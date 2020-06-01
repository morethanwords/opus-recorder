"use strict";

var decoder;
var mainReadyResolve;
var mainReady = new Promise(function(resolve){ mainReadyResolve = resolve; });

global['onmessage'] = function( e ){
  mainReady.then(function(){
    switch( e['data']['command'] ){

      case 'decode16':
        if(decoder) {
          decoder.use16 = true;

          if(e.data.waveform) {
            decoder.waveformGenerator = new WaveformGenerator();
          }

          decoder.decode16(e.data.pages, e.data.waveform);
        }
        break;

      case 'decode':
        if(decoder) {
          decoder.use16 = false;

          if(e.data.waveform) {
            decoder.waveformGenerator = new WaveformGenerator();
          }

          decoder.decode(e.data.pages, e.data.waveform);
        }

        break;

      case 'waveform':
        if(decoder) {
          decoder.generateWaveform(e['data']['pages']);
        }
        break;

      case 'done':
        if (decoder) {
          decoder.sendLastBuffer();
          global['close']();
        }
        break;

      case 'init':
        decoder = new OggOpusDecoder( e['data'], Module );
        break;

      default:
        // Ignore any unknown commands and continue recieving commands
    }
  });
};

var OggOpusDecoder = function(config, Module) {

  if(!Module) {
    throw new Error('Module with exports required to initialize a decoder instance');
  }

  this.mainReady = mainReady; // Expose for unit testing
  this.config = Object.assign({ 
    bufferLength: 4096, // Define size of outgoing buffer
    decoderSampleRate: 48000, // Desired decoder sample rate.
    outputBufferSampleRate: 48000, // Desired output sample rate. Audio will be resampled
    resampleQuality: 3, // Value between 0 and 10 inclusive. 10 being highest quality.
  }, config);

  this._opus_decoder_create = Module._opus_decoder_create;
  this._opus_decoder_destroy = Module._opus_decoder_destroy;
  this._speex_resampler_process_interleaved_float = Module._speex_resampler_process_interleaved_float;
  this._speex_resampler_process_interleaved_int = Module._speex_resampler_process_interleaved_int;
  this._speex_resampler_init = Module._speex_resampler_init;
  this._speex_resampler_destroy = Module._speex_resampler_destroy;
  this._opus_decode_float = Module._opus_decode_float;
  this._opus_decode = Module._opus_decode;
  this._free = Module._free;
  this._malloc = Module._malloc;
  this.HEAPU8 = Module.HEAPU8;
  this.HEAP16 = Module.HEAP16;
  this.HEAP32 = Module.HEAP32;
  this.HEAPF32 = Module.HEAPF32;

  this.outputBuffers = [];
};

function WaveformGenerator() {
  this.resultSamples = 100;
  
  this.allSamples = [];
  this.totalSamples = 0;
}

WaveformGenerator.prototype.saveSamples = function(samplesCount, sampleBuffer) {
  this.totalSamples += samplesCount;
  this.allSamples.push(sampleBuffer.slice());
};

WaveformGenerator.prototype.generate = function(use16) {
  var samples = use16 ? new Uint16Array(this.resultSamples) : new Float32Array(this.resultSamples);
  var sampleRate = Math.max(1, Math.floor(this.totalSamples / this.resultSamples));
  var sampleIndex = 0;
  var peakSample = 0;
  var index = 0;

  //console.log('set sampleRate', totalSamples, sampleRate);

  //var skipped = 0;
  for(var i = 0; i < this.allSamples.length; i++) {
    var sampleBuffer = this.allSamples[i];
    for(var k = 0, length = sampleBuffer.length; k < length; k++) {
      var sample = Math.abs(sampleBuffer[k]);
      if(sample > peakSample) {
        peakSample = sample;
      }
      if((sampleIndex++ % sampleRate) == 0) {
        //console.log('Will write peakSample:', peakSample, index);
        if(index < this.resultSamples) {
          samples[index++] = peakSample;
          //console.log('Writing peakSample:', index - 1, peakSample);
        }/*  else {
          ++skipped;
          //console.log('Skipped sample:', peakSample);
        } */

        peakSample = 0;
      }
    }
  }

  //console.log('skipped', skipped);

  //console.log('samples:', samples);
  if(!use16) {
    var newSamples = new Uint16Array(this.resultSamples);
    for(var i = 0; i < this.resultSamples; i++) {
      newSamples[i] = samples[i] * 32767.5 - 0.5;
    }
    samples = newSamples;
  }

  var sumSamples = 0;
  for(var i = 0; i < this.resultSamples; i++) {
    sumSamples += samples[i];
  }
  var peak = Math.floor(sumSamples * 1.8 / this.resultSamples);
  //console.log('maybe peak', sumSamples, this.resultSamples);
  if(peak < 2500) {
    peak = 2500;
  }

  /* var result = new Uint8Array(this.resultSamples);
  for(var i = 0, l = samples.length; i != l; ++i) {
    result[i] = Math.min(31, Math.min(samples[i], peak) * 31 / peak);
  }

  console.log('omg', result); */

  for(var i = 0; i < this.resultSamples; i++) {
    if(samples[i] > peak) {
      samples[i] = peak;
    }
  }
  
  var bitstreamLength = (this.resultSamples * 5) / 8 + 1;
  var result = new Uint8Array(Math.floor(bitstreamLength));

  for(var i = 0; i < this.resultSamples; i++) {
    var value = Math.min(31, Math.floor(Math.floor(samples[i] * 31) / peak));

    //console.log('value before:', value, samples[i]);
    setBits(result, i * 5, value & 31);
  }

  return result;
};

OggOpusDecoder.prototype.decode16 = function(typedArray, withWaveform) {
  var dataView = new DataView(typedArray.buffer);

  this.getPageBoundaries(dataView).map(function(pageStart) {
    var headerType = dataView.getUint8(pageStart + 5, true );
    var pageIndex = dataView.getUint32(pageStart + 18, true );

    // Beginning of stream
    if(headerType & 2) {
      this.numberOfChannels = dataView.getUint8(pageStart + 37, true);
      this.init();
    }

    // Decode page
    if(pageIndex > 1) {
      var segmentTableLength = dataView.getUint8(pageStart + 26, true);
      var segmentTableIndex = pageStart + 27 + segmentTableLength;

      for(var i = 0; i < segmentTableLength; i++) {
        var packetLength = dataView.getUint8(pageStart + 27 + i, true);
        this.decoderBuffer.set(typedArray.subarray(segmentTableIndex, segmentTableIndex += packetLength), this.decoderBufferIndex);
        this.decoderBufferIndex += packetLength;

        if(packetLength < 255) {
          var outputSampleLength = this._opus_decode(this.decoder, this.decoderBufferPointer, this.decoderBufferIndex, this.decoderOutput16Pointer, this.decoderOutputMaxLength, 0);
          
          if(withWaveform && outputSampleLength > 0) {
            var sampleBuffer = this.HEAP16.subarray(this.decoderOutput16Pointer >> 1, (this.decoderOutput16Pointer >> 1) + this.decoderOutputMaxLength);
            //console.log('sampleBuffer:', sampleBuffer);
  
            this.waveformGenerator.saveSamples(this.decoderOutputMaxLength, sampleBuffer);
          }
          
          var resampledLength = Math.ceil(outputSampleLength * this.config.outputBufferSampleRate / this.config.decoderSampleRate);
          this.HEAP16[this.decoderOutput16LengthPointer >> 1] = outputSampleLength;
          this.HEAP16[this.resampleOutput16LengthPointer >> 1] = resampledLength;
          this._speex_resampler_process_interleaved_int(this.resampler, this.decoderOutput16Pointer, this.decoderOutput16LengthPointer, this.resampleOutput16LengthPointer, this.resampleOutput16LengthPointer);
          this.sendToOutputBuffers(this.HEAP16.subarray(this.resampleOutput16LengthPointer >> 1, (this.resampleOutput16LengthPointer >> 1) + resampledLength * this.numberOfChannels));
          this.decoderBufferIndex = 0;
        }
      }

      // End of stream
      if(headerType & 4) {
        this.sendLastBuffer();
      }
    }
  }, this);
}

OggOpusDecoder.prototype.generateWaveform = function(typedArray) {
  var dataView = new DataView(typedArray.buffer);

  var resultSamples = 100;
  var samples = new Uint16Array(100);
  var sampleIndex = 0;
  var peakSample = 0;
  var index = 0;

  var allSamples = [];
  var totalSamples = 0;

  this.getPageBoundaries(dataView).map(function(pageStart) {
    var headerType = dataView.getUint8(pageStart + 5, true );
    var pageIndex = dataView.getUint32(pageStart + 18, true );

    // Beginning of stream
    if(headerType & 2) {
      this.numberOfChannels = dataView.getUint8(pageStart + 37, true);
      this.init();
    }

    // Decode page
    if(pageIndex > 1) {
      var segmentTableLength = dataView.getUint8(pageStart + 26, true);
      var segmentTableIndex = pageStart + 27 + segmentTableLength;

      for(var i = 0; i < segmentTableLength; i++) {
        var packetLength = dataView.getUint8(pageStart + 27 + i, true);
        this.decoderBuffer.set(typedArray.subarray(segmentTableIndex, segmentTableIndex += packetLength), this.decoderBufferIndex);
        this.decoderBufferIndex += packetLength;

        if(packetLength < 255) {
          var outputSampleLength = this._opus_decode(this.decoder, this.decoderBufferPointer, this.decoderBufferIndex, this.decoderOutput16Pointer, this.decoderOutputMaxLength, 0);
          this.decoderBufferIndex = 0;

          if(outputSampleLength < 1) {
            continue;
          }

          totalSamples += this.decoderOutputMaxLength;

          //continue;
          var sampleBuffer = this.HEAP16.subarray(this.decoderOutput16Pointer >> 1, (this.decoderOutput16Pointer >> 1) + this.decoderOutputMaxLength);
          //console.log('sampleBuffer:', sampleBuffer);

          allSamples.push(sampleBuffer.slice());
          
          //console.warn('decoded samples:', outputSampleLength, this.decoderOutput16Pointer, this.decoderOutputMaxLength, sampleBuffer);
          //for(var k = 0, int16Length = outputSampleLength * 2; k < int16Length; k++) {
        }
      }

      // End of stream
      if(headerType & 4) {
        //
      }
    }
  }, this);

  var sampleRate = Math.max(1, Math.floor(totalSamples / resultSamples));

  //console.log('set sampleRate', totalSamples, sampleRate);

  var skipped = 0;
  for(var i = 0; i < allSamples.length; i++) {
  //for(var i = allSamples.length - 1; i >= 0; i--) {
    var sampleBuffer = allSamples[i];
    /* for(var k = 0, length = sampleBuffer.length; k < length; k++) {
    //for(var k = sampleBuffer.length - 1; k >= 0; k--) {
      var sample = Math.abs(sampleBuffer[k]);
      //var sample = sampleBuffer[k];
      if(sample > peakSample) {
        peakSample = sample;
      }
      if((sampleIndex++ % sampleRate) == 0) {
        //console.log('Will write peakSample:', peakSample, index);
        if(index < resultSamples) {
          samples[index++] = peakSample;
          console.log('Writing peakSample:', index - 1, peakSample);
        } else ++skipped;
        peakSample = 0;
      }
    } */
    for(var k = 0, length = sampleBuffer.length; k < length; k++) {
    //for(var k = sampleBuffer.length - 1; k >= 0; k--) {
      var sample = Math.abs(sampleBuffer[k]);
      //var sample = sampleBuffer[k];
      if(sample > peakSample) {
        peakSample = sample;
      }
      if((sampleIndex++ % sampleRate) == 0) {
        //console.log('Will write peakSample:', peakSample, index);
        if(index < resultSamples) {
          samples[index++] = peakSample;
          //console.log('Writing peakSample:', index - 1, peakSample);
        } else {
          ++skipped;
          //console.log('Skipped sample:', peakSample);
        }

        peakSample = 0;
      }
    }
  }

  //console.log('skipped', skipped);

  var sumSamples = 0;
  for(var i = 0; i < resultSamples; i++) {
    sumSamples += samples[i];
  }
  var peak = Math.floor(sumSamples * 1.8 / resultSamples);
  //console.log('maybe peak', sumSamples, resultSamples);
  var MAGIC_NUMBER = 2500;//2500 / 32767;
  if(peak < MAGIC_NUMBER) { // 2500 / 32767
    peak = MAGIC_NUMBER;
  }

  /* var result = new Uint8Array(resultSamples);
  for(var i = 0, l = samples.length; i != l; ++i) {
    result[i] = Math.min(31, Math.min(samples[i], peak) * 31 / peak);
  }

  console.log('omg', result); */

  for(var i = 0; i < resultSamples; i++) {
    if(samples[i] > peak) {
      samples[i] = peak;
    }
  }
  
  var bitstreamLength = (resultSamples * 5) / 8 + 1;
  var result = new Uint8Array(Math.floor(bitstreamLength));

  for(var i = 0; i < resultSamples; i++) {
    var value = Math.min(31, Math.floor(Math.floor(samples[i] * 31) / peak));

    //console.log('value before:', value, samples[i]);
    setBits(result, i * 5, value & 31);
  }

  //var uint8 = new Uint8Array(dataView.buffer);
  //result.set(dataView.buffer, 0);

  //console.log('SAMPLES:', samples, peak);
  //console.log('RESULT:', result);
  global['postMessage']({type: 'waveform', result: result});
}

function setBits(bytes, bitOffset, value) {
  var o = Math.floor(bitOffset / 8);

  //console.log('setBits before', o, bitOffset);

  bitOffset %= 8;

  var prev = bytes[o];
  value = prev | (value << bitOffset);

  var uint8 = new Uint8Array(new Int32Array([value]).buffer);
  for(var i = 0; i < 4; ++i) {
    bytes[o + i] = uint8[i];
  }

  //console.log('setBits', o, value, bytes, (value << bitOffset));
}

OggOpusDecoder.prototype.decode = function(typedArray, withWaveform) {
  var dataView = new DataView( typedArray.buffer );
  this.getPageBoundaries( dataView ).map( function( pageStart ) {
    var headerType = dataView.getUint8( pageStart + 5, true );
    var pageIndex = dataView.getUint32( pageStart + 18, true );

    // Beginning of stream
    if ( headerType & 2 ) {
      this.numberOfChannels = dataView.getUint8( pageStart + 37, true );
      this.init();
    }

    // Decode page
    if ( pageIndex > 1 ) {
      var segmentTableLength = dataView.getUint8( pageStart + 26, true );
      var segmentTableIndex = pageStart + 27 + segmentTableLength;

      for ( var i = 0; i < segmentTableLength; i++ ) {
        var packetLength = dataView.getUint8( pageStart + 27 + i, true );
        this.decoderBuffer.set( typedArray.subarray( segmentTableIndex, segmentTableIndex += packetLength ), this.decoderBufferIndex );
        this.decoderBufferIndex += packetLength;

        if ( packetLength < 255 ) {
          var outputSampleLength = this._opus_decode_float( this.decoder, this.decoderBufferPointer, this.decoderBufferIndex, this.decoderOutputPointer, this.decoderOutputMaxLength, 0);
          
          if(withWaveform && outputSampleLength > 0) {
            var sampleBuffer = this.HEAPF32.subarray(this.decoderOutputPointer >> 2, (this.decoderOutputPointer >> 2) + this.decoderOutputMaxLength);
            //console.log('sampleBuffer:', sampleBuffer);
  
            this.waveformGenerator.saveSamples(this.decoderOutputMaxLength, sampleBuffer);
          }

          var resampledLength = Math.ceil( outputSampleLength * this.config.outputBufferSampleRate / this.config.decoderSampleRate );
          this.HEAP32[ this.decoderOutputLengthPointer >> 2 ] = outputSampleLength;
          this.HEAP32[ this.resampleOutputLengthPointer >> 2 ] = resampledLength;
          this._speex_resampler_process_interleaved_float( this.resampler, this.decoderOutputPointer, this.decoderOutputLengthPointer, this.resampleOutputBufferPointer, this.resampleOutputLengthPointer );
          this.sendToOutputBuffers( this.HEAPF32.subarray( this.resampleOutputBufferPointer >> 2, (this.resampleOutputBufferPointer >> 2) + resampledLength * this.numberOfChannels ) );
          this.decoderBufferIndex = 0;
        }
      }

      // End of stream
      if ( headerType & 4 ) {
        this.sendLastBuffer();
      }
    }
  }, this );
};

OggOpusDecoder.prototype.getPageBoundaries = function(dataView) {
  var pageBoundaries = [];

  for(var i = 0; i < dataView.byteLength - 32; i++) {
    if(dataView.getUint32(i, true) == 1399285583) {
      pageBoundaries.push(i);
    }
  }

  return pageBoundaries;
};

OggOpusDecoder.prototype.init = function(){
  this.resetOutputBuffers();
  this.initCodec();
  this.initResampler();
};

OggOpusDecoder.prototype.initCodec = function() {

  if ( this.decoder ) {
    this._opus_decoder_destroy( this.decoder );
    this._free( this.decoderBufferPointer );
    this._free( this.decoderOutputLengthPointer );
    this._free( this.decoderOutputPointer );

    this._free(this.decoderOutput16LengthPointer);
    this._free(this.decoderOutput16Pointer);
  }

  var errReference = this._malloc( 4 );
  this.decoder = this._opus_decoder_create( this.config.decoderSampleRate, this.numberOfChannels, errReference );
  this._free( errReference );

  this.decoderBufferMaxLength = 4000;
  this.decoderBufferPointer = this._malloc( this.decoderBufferMaxLength );
  this.decoderBuffer = this.HEAPU8.subarray( this.decoderBufferPointer, this.decoderBufferPointer + this.decoderBufferMaxLength );
  this.decoderBufferIndex = 0;

  this.decoderOutputLengthPointer = this._malloc( 4 );
  this.decoderOutputMaxLength = this.config.decoderSampleRate * this.numberOfChannels * 120 / 1000; // Max 120ms frame size
  this.decoderOutputPointer = this._malloc(this.decoderOutputMaxLength * 4); // 4 bytes per sample

  this.decoderOutput16LengthPointer = this._malloc(2);
  this.decoderOutput16Pointer = this._malloc(this.decoderOutputMaxLength * 2); // 2 bytes per sample
};

OggOpusDecoder.prototype.initResampler = function() {

  if(this.resampler) {
    this._speex_resampler_destroy(this.resampler);
    this._free(this.resampleOutputLengthPointer);
    this._free(this.resampleOutputBufferPointer);

    this._free(this.resampleOutput16LengthPointer);
    this._free(this.resampleOutput16BufferPointer);
  }

  var errLocation = this._malloc(4);
  this.resampler = this._speex_resampler_init(this.numberOfChannels, this.config.decoderSampleRate, this.config.outputBufferSampleRate, this.config.resampleQuality, errLocation );
  this._free(errLocation);

  this.resampleOutputLengthPointer = this._malloc( 4 );
  this.resampleOutputMaxLength = Math.ceil( this.decoderOutputMaxLength * this.config.outputBufferSampleRate / this.config.decoderSampleRate );
  this.resampleOutputBufferPointer = this._malloc( this.resampleOutputMaxLength * 4 ); // 4 bytes per sample

  this.resampleOutput16LengthPointer = this._malloc(2);
  this.resampleOutput16BufferPointer = this._malloc(this.resampleOutputMaxLength * 2); // 2 bytes per sample
};

OggOpusDecoder.prototype.resetOutputBuffers = function() {
  this.outputBuffers = [];
  this.outputBufferArrayBuffers = [];
  this.outputBufferIndex = 0;

  for(var i = 0; i < this.numberOfChannels; i++) {
    if(this.use16) {
      this.outputBuffers.push(new Int16Array(this.config.bufferLength));
    } else {
      this.outputBuffers.push( new Float32Array( this.config.bufferLength ) );
    }
    
    this.outputBufferArrayBuffers.push(this.outputBuffers[i].buffer);
  }
};

OggOpusDecoder.prototype.sendLastBuffer = function() {
  if(this.use16) {
    this.sendToOutputBuffers(new Int16Array((this.config.bufferLength - this.outputBufferIndex) * this.numberOfChannels));

    var waveform = this.waveformGenerator ? this.waveformGenerator.generate(true) : null;
    this.waveformGenerator = new WaveformGenerator();
    global['postMessage']({type: 'done', waveform: waveform});
  } else {
    this.sendToOutputBuffers(new Float32Array( ( this.config.bufferLength - this.outputBufferIndex ) * this.numberOfChannels ));
    
    var waveform = this.waveformGenerator ? this.waveformGenerator.generate(false) : null;
    this.waveformGenerator = new WaveformGenerator();
    global['postMessage']({type: 'done', waveform: waveform});
    
    global['postMessage'](null);
  }
};

OggOpusDecoder.prototype.sendToOutputBuffers = function( mergedBuffers ){
  var dataIndex = 0;
  var mergedBufferLength = mergedBuffers.length / this.numberOfChannels;

  while ( dataIndex < mergedBufferLength ) {
    var amountToCopy = Math.min( mergedBufferLength - dataIndex, this.config.bufferLength - this.outputBufferIndex );

    if (this.numberOfChannels === 1) {
      this.outputBuffers[0].set( mergedBuffers.subarray( dataIndex, dataIndex + amountToCopy ), this.outputBufferIndex );
    }

    // Deinterleave
    else {
      for ( var i = 0; i < amountToCopy; i++ ) {
        this.outputBuffers.forEach( function( buffer, channelIndex ) {
          buffer[ this.outputBufferIndex + i ] = mergedBuffers[ ( dataIndex + i ) * this.numberOfChannels + channelIndex ];
        }, this);
      }
    }

    dataIndex += amountToCopy;
    this.outputBufferIndex += amountToCopy;

    if ( this.outputBufferIndex == this.config.bufferLength ) {
      global['postMessage']( this.outputBuffers, this.outputBufferArrayBuffers );
      this.resetOutputBuffers();
    }
  }
};


if (!Module) {
  Module = {};
}

Module['mainReady'] = mainReady;
Module['OggOpusDecoder'] = OggOpusDecoder;
Module['onRuntimeInitialized'] = mainReadyResolve;

module.exports = Module;

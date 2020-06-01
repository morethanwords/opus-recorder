// Copyright 2010 The Emscripten Authors.  All rights reserved.
// Emscripten is available under two separate licenses, the MIT license and the
// University of Illinois/NCSA Open Source License.  Both these licenses can be
// found in the LICENSE file.

// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module !== 'undefined' ? Module : {};

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DecoderWorker"] = factory();
	else
		root["DecoderWorker"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/decoderWorker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0RlY29kZXJXb3JrZXIvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzP2NkMDAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/global.js\n");

/***/ }),

/***/ "./src/decoderWorker.js":
/*!******************************!*\
  !*** ./src/decoderWorker.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar decoder;\nvar mainReadyResolve;\nvar mainReady = new Promise(function(resolve){ mainReadyResolve = resolve; });\n\nglobal['onmessage'] = function(e) {\n  mainReady.then(function(){\n    switch(e['data']['command']) {\n\n      case 'decode':\n        if(decoder) {\n          decoder.waveformGenerator = e.data.waveform ? new WaveformGenerator() : null;\n          decoder.decode(e.data.pages, e.data.waveform);\n        }\n        break;\n\n      case 'done':\n        if(decoder) {\n          decoder.sendLastBuffer();\n          global['close']();\n        }\n        break;\n\n      case 'init':\n        decoder = new OggOpusDecoder(e['data'], Module);\n        break;\n\n      default:\n        // Ignore any unknown commands and continue recieving commands\n    }\n  });\n};\n\nvar OggOpusDecoder = function(config, Module) {\n\n  if(!Module) {\n    throw new Error('Module with exports required to initialize a decoder instance');\n  }\n\n  this.mainReady = mainReady; // Expose for unit testing\n  this.config = Object.assign({ \n    bufferLength: 4096, // Define size of outgoing buffer\n    decoderSampleRate: 48000, // Desired decoder sample rate.\n    outputBufferSampleRate: 48000, // Desired output sample rate. Audio will be resampled\n    resampleQuality: 3, // Value between 0 and 10 inclusive. 10 being highest quality.\n  }, config);\n\n  this._opus_decoder_create = Module._opus_decoder_create;\n  this._opus_decoder_destroy = Module._opus_decoder_destroy;\n  this._speex_resampler_process_interleaved_float = Module._speex_resampler_process_interleaved_float;\n  this._speex_resampler_process_interleaved_int = Module._speex_resampler_process_interleaved_int;\n  this._speex_resampler_init = Module._speex_resampler_init;\n  this._speex_resampler_destroy = Module._speex_resampler_destroy;\n  this._opus_decode_float = Module._opus_decode_float;\n  this._opus_decode = Module._opus_decode;\n  this._free = Module._free;\n  this._malloc = Module._malloc;\n  this.HEAPU8 = Module.HEAPU8;\n  this.HEAP16 = Module.HEAP16;\n  this.HEAP32 = Module.HEAP32;\n  this.HEAPF32 = Module.HEAPF32;\n\n  this.outputBuffers = [];\n};\n\nfunction WaveformGenerator() {\n  this.resultSamples = 100;\n  \n  this.allSamples = [];\n  this.totalSamples = 0;\n}\n\nWaveformGenerator.prototype.saveSamples = function(samplesCount, sampleBuffer) {\n  this.totalSamples += samplesCount;\n  this.allSamples.push(sampleBuffer.slice());\n};\n\nWaveformGenerator.prototype.generate = function() {\n  var samples = new Float32Array(this.resultSamples);\n  var sampleRate = Math.max(1, Math.floor(this.totalSamples / this.resultSamples));\n  var sampleIndex = 0;\n  var peakSample = 0;\n  var index = 0;\n\n  //console.log('set sampleRate', totalSamples, sampleRate);\n\n  //var skipped = 0;\n  for(var i = 0; i < this.allSamples.length; i++) {\n    var sampleBuffer = this.allSamples[i];\n    for(var k = 0, length = sampleBuffer.length; k < length; k++) {\n      var sample = Math.abs(sampleBuffer[k]);\n      if(sample > peakSample) {\n        peakSample = sample;\n      }\n      if((sampleIndex++ % sampleRate) == 0) {\n        //console.log('Will write peakSample:', peakSample, index);\n        if(index < this.resultSamples) {\n          samples[index++] = peakSample;\n          //console.log('Writing peakSample:', index - 1, peakSample);\n        }/*  else {\n          ++skipped;\n          //console.log('Skipped sample:', peakSample);\n        } */\n\n        peakSample = 0;\n      }\n    }\n  }\n\n  //console.log('skipped', skipped);\n\n  //console.log('samples:', samples);\n  var newSamples = new Uint16Array(this.resultSamples);\n  for(var i = 0; i < this.resultSamples; i++) {\n    newSamples[i] = samples[i] * 32767.5 - 0.5;\n  }\n  samples = newSamples;\n\n  var sumSamples = 0;\n  for(var i = 0; i < this.resultSamples; i++) {\n    sumSamples += samples[i];\n  }\n  var peak = Math.floor(sumSamples * 1.8 / this.resultSamples);\n  //console.log('maybe peak', sumSamples, this.resultSamples);\n  if(peak < 2500) {\n    peak = 2500;\n  }\n\n  for(var i = 0; i < this.resultSamples; i++) {\n    if(samples[i] > peak) {\n      samples[i] = peak;\n    }\n  }\n  \n  var bitstreamLength = (this.resultSamples * 5) / 8 + 1;\n  var result = new Uint8Array(Math.floor(bitstreamLength));\n\n  for(var i = 0; i < this.resultSamples; i++) {\n    var value = Math.min(31, Math.floor(Math.floor(samples[i] * 31) / peak));\n\n    //console.log('value before:', value, samples[i]);\n    setBits(result, i * 5, value & 31);\n  }\n\n  return result;\n};\n\nfunction setBits(bytes, bitOffset, value) {\n  var o = Math.floor(bitOffset / 8);\n\n  //console.log('setBits before', o, bitOffset);\n\n  bitOffset %= 8;\n\n  var prev = bytes[o];\n  value = prev | (value << bitOffset);\n\n  var uint8 = new Uint8Array(new Int32Array([value]).buffer);\n  for(var i = 0; i < 4; ++i) {\n    bytes[o + i] = uint8[i];\n  }\n\n  //console.log('setBits', o, value, bytes, (value << bitOffset));\n}\n\nOggOpusDecoder.prototype.decode = function(typedArray, withWaveform) {\n  var dataView = new DataView(typedArray.buffer);\n  this.getPageBoundaries(dataView).map(function(pageStart) {\n    var headerType = dataView.getUint8(pageStart + 5, true);\n    var pageIndex = dataView.getUint32(pageStart + 18, true);\n\n    // Beginning of stream\n    if(headerType & 2) {\n      this.numberOfChannels = dataView.getUint8(pageStart + 37, true);\n      this.init();\n    }\n\n    // Decode page\n    if(pageIndex > 1) {\n      var segmentTableLength = dataView.getUint8(pageStart + 26, true);\n      var segmentTableIndex = pageStart + 27 + segmentTableLength;\n\n      for(var i = 0; i < segmentTableLength; i++) {\n        var packetLength = dataView.getUint8(pageStart + 27 + i, true);\n        this.decoderBuffer.set(typedArray.subarray(segmentTableIndex, segmentTableIndex += packetLength), this.decoderBufferIndex);\n        this.decoderBufferIndex += packetLength;\n\n        if(packetLength < 255) {\n          var outputSampleLength = this._opus_decode_float(this.decoder, this.decoderBufferPointer, this.decoderBufferIndex, this.decoderOutputPointer, this.decoderOutputMaxLength, 0);\n          \n          if(withWaveform && outputSampleLength > 0) {\n            var sampleBuffer = this.HEAPF32.subarray(this.decoderOutputPointer >> 2, (this.decoderOutputPointer >> 2) + this.decoderOutputMaxLength);\n            //console.log('sampleBuffer:', sampleBuffer);\n  \n            this.waveformGenerator.saveSamples(this.decoderOutputMaxLength, sampleBuffer);\n          }\n\n          var resampledLength = Math.ceil(outputSampleLength * this.config.outputBufferSampleRate / this.config.decoderSampleRate);\n          this.HEAP32[this.decoderOutputLengthPointer >> 2] = outputSampleLength;\n          this.HEAP32[this.resampleOutputLengthPointer >> 2] = resampledLength;\n          this._speex_resampler_process_interleaved_float(this.resampler, this.decoderOutputPointer, this.decoderOutputLengthPointer, this.resampleOutputBufferPointer, this.resampleOutputLengthPointer);\n          this.sendToOutputBuffers(this.HEAPF32.subarray(this.resampleOutputBufferPointer >> 2, (this.resampleOutputBufferPointer >> 2) + resampledLength * this.numberOfChannels));\n          this.decoderBufferIndex = 0;\n        }\n      }\n\n      // End of stream\n      if(headerType & 4) {\n        this.sendLastBuffer();\n      }\n    }\n  }, this);\n};\n\nOggOpusDecoder.prototype.getPageBoundaries = function(dataView) {\n  var pageBoundaries = [];\n\n  for(var i = 0; i < dataView.byteLength - 32; i++) {\n    if(dataView.getUint32(i, true) == 1399285583) {\n      pageBoundaries.push(i);\n    }\n  }\n\n  return pageBoundaries;\n};\n\nOggOpusDecoder.prototype.init = function() {\n  this.resetOutputBuffers();\n  this.initCodec();\n  this.initResampler();\n};\n\nOggOpusDecoder.prototype.initCodec = function() {\n  if(this.decoder) {\n    this._opus_decoder_destroy(this.decoder);\n    this._free(this.decoderBufferPointer);\n    this._free(this.decoderOutputLengthPointer);\n    this._free(this.decoderOutputPointer);\n  }\n\n  var errReference = this._malloc(4);\n  this.decoder = this._opus_decoder_create(this.config.decoderSampleRate, this.numberOfChannels, errReference);\n  this._free(errReference);\n\n  this.decoderBufferMaxLength = 4000;\n  this.decoderBufferPointer = this._malloc(this.decoderBufferMaxLength);\n  this.decoderBuffer = this.HEAPU8.subarray(this.decoderBufferPointer, this.decoderBufferPointer + this.decoderBufferMaxLength);\n  this.decoderBufferIndex = 0;\n\n  this.decoderOutputLengthPointer = this._malloc(4);\n  this.decoderOutputMaxLength = this.config.decoderSampleRate * this.numberOfChannels * 120 / 1000; // Max 120ms frame size\n  this.decoderOutputPointer = this._malloc(this.decoderOutputMaxLength * 4); // 4 bytes per sample\n};\n\nOggOpusDecoder.prototype.initResampler = function() {\n  if(this.resampler) {\n    this._speex_resampler_destroy(this.resampler);\n    this._free(this.resampleOutputLengthPointer);\n    this._free(this.resampleOutputBufferPointer);\n  }\n\n  var errLocation = this._malloc(4);\n  this.resampler = this._speex_resampler_init(this.numberOfChannels, this.config.decoderSampleRate, this.config.outputBufferSampleRate, this.config.resampleQuality, errLocation);\n  this._free(errLocation);\n\n  this.resampleOutputLengthPointer = this._malloc(4);\n  this.resampleOutputMaxLength = Math.ceil( this.decoderOutputMaxLength * this.config.outputBufferSampleRate / this.config.decoderSampleRate);\n  this.resampleOutputBufferPointer = this._malloc(this.resampleOutputMaxLength * 4); // 4 bytes per sample\n};\n\nOggOpusDecoder.prototype.resetOutputBuffers = function() {\n  this.outputBuffers = [];\n  this.outputBufferArrayBuffers = [];\n  this.outputBufferIndex = 0;\n\n  for(var i = 0; i < this.numberOfChannels; i++) {\n    this.outputBuffers.push(new Float32Array(this.config.bufferLength));\n    this.outputBufferArrayBuffers.push(this.outputBuffers[i].buffer);\n  }\n};\n\nOggOpusDecoder.prototype.sendLastBuffer = function() {\n  this.sendToOutputBuffers(new Float32Array((this.config.bufferLength - this.outputBufferIndex) * this.numberOfChannels));\n  \n  var waveform = this.waveformGenerator ? this.waveformGenerator.generate() : null;\n  this.waveformGenerator = new WaveformGenerator();\n  global['postMessage']({type: 'done', waveform: waveform});\n};\n\nOggOpusDecoder.prototype.sendToOutputBuffers = function(mergedBuffers) {\n  var dataIndex = 0;\n  var mergedBufferLength = mergedBuffers.length / this.numberOfChannels;\n\n  while(dataIndex < mergedBufferLength) {\n    var amountToCopy = Math.min(mergedBufferLength - dataIndex, this.config.bufferLength - this.outputBufferIndex);\n\n    if(this.numberOfChannels === 1) {\n      this.outputBuffers[0].set(mergedBuffers.subarray(dataIndex, dataIndex + amountToCopy), this.outputBufferIndex);\n    } else { // Deinterleave\n      for(var i = 0; i < amountToCopy; i++) {\n        this.outputBuffers.forEach(function(buffer, channelIndex) {\n          buffer[this.outputBufferIndex + i] = mergedBuffers[(dataIndex + i) * this.numberOfChannels + channelIndex];\n        }, this);\n      }\n    }\n\n    dataIndex += amountToCopy;\n    this.outputBufferIndex += amountToCopy;\n\n    if(this.outputBufferIndex == this.config.bufferLength) {\n      global['postMessage'](this.outputBuffers, this.outputBufferArrayBuffers);\n      this.resetOutputBuffers();\n    }\n  }\n};\n\n\nif(!Module) {\n  Module = {};\n}\n\nModule['mainReady'] = mainReady;\nModule['OggOpusDecoder'] = OggOpusDecoder;\nModule['onRuntimeInitialized'] = mainReadyResolve;\n\nmodule.exports = Module;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGVjb2Rlcldvcmtlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0RlY29kZXJXb3JrZXIvLi9zcmMvZGVjb2Rlcldvcmtlci5qcz8wYzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZGVjb2RlcjtcbnZhciBtYWluUmVhZHlSZXNvbHZlO1xudmFyIG1haW5SZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpeyBtYWluUmVhZHlSZXNvbHZlID0gcmVzb2x2ZTsgfSk7XG5cbmdsb2JhbFsnb25tZXNzYWdlJ10gPSBmdW5jdGlvbihlKSB7XG4gIG1haW5SZWFkeS50aGVuKGZ1bmN0aW9uKCl7XG4gICAgc3dpdGNoKGVbJ2RhdGEnXVsnY29tbWFuZCddKSB7XG5cbiAgICAgIGNhc2UgJ2RlY29kZSc6XG4gICAgICAgIGlmKGRlY29kZXIpIHtcbiAgICAgICAgICBkZWNvZGVyLndhdmVmb3JtR2VuZXJhdG9yID0gZS5kYXRhLndhdmVmb3JtID8gbmV3IFdhdmVmb3JtR2VuZXJhdG9yKCkgOiBudWxsO1xuICAgICAgICAgIGRlY29kZXIuZGVjb2RlKGUuZGF0YS5wYWdlcywgZS5kYXRhLndhdmVmb3JtKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZG9uZSc6XG4gICAgICAgIGlmKGRlY29kZXIpIHtcbiAgICAgICAgICBkZWNvZGVyLnNlbmRMYXN0QnVmZmVyKCk7XG4gICAgICAgICAgZ2xvYmFsWydjbG9zZSddKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICBkZWNvZGVyID0gbmV3IE9nZ09wdXNEZWNvZGVyKGVbJ2RhdGEnXSwgTW9kdWxlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIElnbm9yZSBhbnkgdW5rbm93biBjb21tYW5kcyBhbmQgY29udGludWUgcmVjaWV2aW5nIGNvbW1hbmRzXG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBPZ2dPcHVzRGVjb2RlciA9IGZ1bmN0aW9uKGNvbmZpZywgTW9kdWxlKSB7XG5cbiAgaWYoIU1vZHVsZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTW9kdWxlIHdpdGggZXhwb3J0cyByZXF1aXJlZCB0byBpbml0aWFsaXplIGEgZGVjb2RlciBpbnN0YW5jZScpO1xuICB9XG5cbiAgdGhpcy5tYWluUmVhZHkgPSBtYWluUmVhZHk7IC8vIEV4cG9zZSBmb3IgdW5pdCB0ZXN0aW5nXG4gIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7IFxuICAgIGJ1ZmZlckxlbmd0aDogNDA5NiwgLy8gRGVmaW5lIHNpemUgb2Ygb3V0Z29pbmcgYnVmZmVyXG4gICAgZGVjb2RlclNhbXBsZVJhdGU6IDQ4MDAwLCAvLyBEZXNpcmVkIGRlY29kZXIgc2FtcGxlIHJhdGUuXG4gICAgb3V0cHV0QnVmZmVyU2FtcGxlUmF0ZTogNDgwMDAsIC8vIERlc2lyZWQgb3V0cHV0IHNhbXBsZSByYXRlLiBBdWRpbyB3aWxsIGJlIHJlc2FtcGxlZFxuICAgIHJlc2FtcGxlUXVhbGl0eTogMywgLy8gVmFsdWUgYmV0d2VlbiAwIGFuZCAxMCBpbmNsdXNpdmUuIDEwIGJlaW5nIGhpZ2hlc3QgcXVhbGl0eS5cbiAgfSwgY29uZmlnKTtcblxuICB0aGlzLl9vcHVzX2RlY29kZXJfY3JlYXRlID0gTW9kdWxlLl9vcHVzX2RlY29kZXJfY3JlYXRlO1xuICB0aGlzLl9vcHVzX2RlY29kZXJfZGVzdHJveSA9IE1vZHVsZS5fb3B1c19kZWNvZGVyX2Rlc3Ryb3k7XG4gIHRoaXMuX3NwZWV4X3Jlc2FtcGxlcl9wcm9jZXNzX2ludGVybGVhdmVkX2Zsb2F0ID0gTW9kdWxlLl9zcGVleF9yZXNhbXBsZXJfcHJvY2Vzc19pbnRlcmxlYXZlZF9mbG9hdDtcbiAgdGhpcy5fc3BlZXhfcmVzYW1wbGVyX3Byb2Nlc3NfaW50ZXJsZWF2ZWRfaW50ID0gTW9kdWxlLl9zcGVleF9yZXNhbXBsZXJfcHJvY2Vzc19pbnRlcmxlYXZlZF9pbnQ7XG4gIHRoaXMuX3NwZWV4X3Jlc2FtcGxlcl9pbml0ID0gTW9kdWxlLl9zcGVleF9yZXNhbXBsZXJfaW5pdDtcbiAgdGhpcy5fc3BlZXhfcmVzYW1wbGVyX2Rlc3Ryb3kgPSBNb2R1bGUuX3NwZWV4X3Jlc2FtcGxlcl9kZXN0cm95O1xuICB0aGlzLl9vcHVzX2RlY29kZV9mbG9hdCA9IE1vZHVsZS5fb3B1c19kZWNvZGVfZmxvYXQ7XG4gIHRoaXMuX29wdXNfZGVjb2RlID0gTW9kdWxlLl9vcHVzX2RlY29kZTtcbiAgdGhpcy5fZnJlZSA9IE1vZHVsZS5fZnJlZTtcbiAgdGhpcy5fbWFsbG9jID0gTW9kdWxlLl9tYWxsb2M7XG4gIHRoaXMuSEVBUFU4ID0gTW9kdWxlLkhFQVBVODtcbiAgdGhpcy5IRUFQMTYgPSBNb2R1bGUuSEVBUDE2O1xuICB0aGlzLkhFQVAzMiA9IE1vZHVsZS5IRUFQMzI7XG4gIHRoaXMuSEVBUEYzMiA9IE1vZHVsZS5IRUFQRjMyO1xuXG4gIHRoaXMub3V0cHV0QnVmZmVycyA9IFtdO1xufTtcblxuZnVuY3Rpb24gV2F2ZWZvcm1HZW5lcmF0b3IoKSB7XG4gIHRoaXMucmVzdWx0U2FtcGxlcyA9IDEwMDtcbiAgXG4gIHRoaXMuYWxsU2FtcGxlcyA9IFtdO1xuICB0aGlzLnRvdGFsU2FtcGxlcyA9IDA7XG59XG5cbldhdmVmb3JtR2VuZXJhdG9yLnByb3RvdHlwZS5zYXZlU2FtcGxlcyA9IGZ1bmN0aW9uKHNhbXBsZXNDb3VudCwgc2FtcGxlQnVmZmVyKSB7XG4gIHRoaXMudG90YWxTYW1wbGVzICs9IHNhbXBsZXNDb3VudDtcbiAgdGhpcy5hbGxTYW1wbGVzLnB1c2goc2FtcGxlQnVmZmVyLnNsaWNlKCkpO1xufTtcblxuV2F2ZWZvcm1HZW5lcmF0b3IucHJvdG90eXBlLmdlbmVyYXRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzYW1wbGVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnJlc3VsdFNhbXBsZXMpO1xuICB2YXIgc2FtcGxlUmF0ZSA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGhpcy50b3RhbFNhbXBsZXMgLyB0aGlzLnJlc3VsdFNhbXBsZXMpKTtcbiAgdmFyIHNhbXBsZUluZGV4ID0gMDtcbiAgdmFyIHBlYWtTYW1wbGUgPSAwO1xuICB2YXIgaW5kZXggPSAwO1xuXG4gIC8vY29uc29sZS5sb2coJ3NldCBzYW1wbGVSYXRlJywgdG90YWxTYW1wbGVzLCBzYW1wbGVSYXRlKTtcblxuICAvL3ZhciBza2lwcGVkID0gMDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuYWxsU2FtcGxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzYW1wbGVCdWZmZXIgPSB0aGlzLmFsbFNhbXBsZXNbaV07XG4gICAgZm9yKHZhciBrID0gMCwgbGVuZ3RoID0gc2FtcGxlQnVmZmVyLmxlbmd0aDsgayA8IGxlbmd0aDsgaysrKSB7XG4gICAgICB2YXIgc2FtcGxlID0gTWF0aC5hYnMoc2FtcGxlQnVmZmVyW2tdKTtcbiAgICAgIGlmKHNhbXBsZSA+IHBlYWtTYW1wbGUpIHtcbiAgICAgICAgcGVha1NhbXBsZSA9IHNhbXBsZTtcbiAgICAgIH1cbiAgICAgIGlmKChzYW1wbGVJbmRleCsrICUgc2FtcGxlUmF0ZSkgPT0gMCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdXaWxsIHdyaXRlIHBlYWtTYW1wbGU6JywgcGVha1NhbXBsZSwgaW5kZXgpO1xuICAgICAgICBpZihpbmRleCA8IHRoaXMucmVzdWx0U2FtcGxlcykge1xuICAgICAgICAgIHNhbXBsZXNbaW5kZXgrK10gPSBwZWFrU2FtcGxlO1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ1dyaXRpbmcgcGVha1NhbXBsZTonLCBpbmRleCAtIDEsIHBlYWtTYW1wbGUpO1xuICAgICAgICB9LyogIGVsc2Uge1xuICAgICAgICAgICsrc2tpcHBlZDtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdTa2lwcGVkIHNhbXBsZTonLCBwZWFrU2FtcGxlKTtcbiAgICAgICAgfSAqL1xuXG4gICAgICAgIHBlYWtTYW1wbGUgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vY29uc29sZS5sb2coJ3NraXBwZWQnLCBza2lwcGVkKTtcblxuICAvL2NvbnNvbGUubG9nKCdzYW1wbGVzOicsIHNhbXBsZXMpO1xuICB2YXIgbmV3U2FtcGxlcyA9IG5ldyBVaW50MTZBcnJheSh0aGlzLnJlc3VsdFNhbXBsZXMpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5yZXN1bHRTYW1wbGVzOyBpKyspIHtcbiAgICBuZXdTYW1wbGVzW2ldID0gc2FtcGxlc1tpXSAqIDMyNzY3LjUgLSAwLjU7XG4gIH1cbiAgc2FtcGxlcyA9IG5ld1NhbXBsZXM7XG5cbiAgdmFyIHN1bVNhbXBsZXMgPSAwO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5yZXN1bHRTYW1wbGVzOyBpKyspIHtcbiAgICBzdW1TYW1wbGVzICs9IHNhbXBsZXNbaV07XG4gIH1cbiAgdmFyIHBlYWsgPSBNYXRoLmZsb29yKHN1bVNhbXBsZXMgKiAxLjggLyB0aGlzLnJlc3VsdFNhbXBsZXMpO1xuICAvL2NvbnNvbGUubG9nKCdtYXliZSBwZWFrJywgc3VtU2FtcGxlcywgdGhpcy5yZXN1bHRTYW1wbGVzKTtcbiAgaWYocGVhayA8IDI1MDApIHtcbiAgICBwZWFrID0gMjUwMDtcbiAgfVxuXG4gIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnJlc3VsdFNhbXBsZXM7IGkrKykge1xuICAgIGlmKHNhbXBsZXNbaV0gPiBwZWFrKSB7XG4gICAgICBzYW1wbGVzW2ldID0gcGVhaztcbiAgICB9XG4gIH1cbiAgXG4gIHZhciBiaXRzdHJlYW1MZW5ndGggPSAodGhpcy5yZXN1bHRTYW1wbGVzICogNSkgLyA4ICsgMTtcbiAgdmFyIHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KE1hdGguZmxvb3IoYml0c3RyZWFtTGVuZ3RoKSk7XG5cbiAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMucmVzdWx0U2FtcGxlczsgaSsrKSB7XG4gICAgdmFyIHZhbHVlID0gTWF0aC5taW4oMzEsIE1hdGguZmxvb3IoTWF0aC5mbG9vcihzYW1wbGVzW2ldICogMzEpIC8gcGVhaykpO1xuXG4gICAgLy9jb25zb2xlLmxvZygndmFsdWUgYmVmb3JlOicsIHZhbHVlLCBzYW1wbGVzW2ldKTtcbiAgICBzZXRCaXRzKHJlc3VsdCwgaSAqIDUsIHZhbHVlICYgMzEpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmZ1bmN0aW9uIHNldEJpdHMoYnl0ZXMsIGJpdE9mZnNldCwgdmFsdWUpIHtcbiAgdmFyIG8gPSBNYXRoLmZsb29yKGJpdE9mZnNldCAvIDgpO1xuXG4gIC8vY29uc29sZS5sb2coJ3NldEJpdHMgYmVmb3JlJywgbywgYml0T2Zmc2V0KTtcblxuICBiaXRPZmZzZXQgJT0gODtcblxuICB2YXIgcHJldiA9IGJ5dGVzW29dO1xuICB2YWx1ZSA9IHByZXYgfCAodmFsdWUgPDwgYml0T2Zmc2V0KTtcblxuICB2YXIgdWludDggPSBuZXcgVWludDhBcnJheShuZXcgSW50MzJBcnJheShbdmFsdWVdKS5idWZmZXIpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgNDsgKytpKSB7XG4gICAgYnl0ZXNbbyArIGldID0gdWludDhbaV07XG4gIH1cblxuICAvL2NvbnNvbGUubG9nKCdzZXRCaXRzJywgbywgdmFsdWUsIGJ5dGVzLCAodmFsdWUgPDwgYml0T2Zmc2V0KSk7XG59XG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbih0eXBlZEFycmF5LCB3aXRoV2F2ZWZvcm0pIHtcbiAgdmFyIGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KHR5cGVkQXJyYXkuYnVmZmVyKTtcbiAgdGhpcy5nZXRQYWdlQm91bmRhcmllcyhkYXRhVmlldykubWFwKGZ1bmN0aW9uKHBhZ2VTdGFydCkge1xuICAgIHZhciBoZWFkZXJUeXBlID0gZGF0YVZpZXcuZ2V0VWludDgocGFnZVN0YXJ0ICsgNSwgdHJ1ZSk7XG4gICAgdmFyIHBhZ2VJbmRleCA9IGRhdGFWaWV3LmdldFVpbnQzMihwYWdlU3RhcnQgKyAxOCwgdHJ1ZSk7XG5cbiAgICAvLyBCZWdpbm5pbmcgb2Ygc3RyZWFtXG4gICAgaWYoaGVhZGVyVHlwZSAmIDIpIHtcbiAgICAgIHRoaXMubnVtYmVyT2ZDaGFubmVscyA9IGRhdGFWaWV3LmdldFVpbnQ4KHBhZ2VTdGFydCArIDM3LCB0cnVlKTtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIC8vIERlY29kZSBwYWdlXG4gICAgaWYocGFnZUluZGV4ID4gMSkge1xuICAgICAgdmFyIHNlZ21lbnRUYWJsZUxlbmd0aCA9IGRhdGFWaWV3LmdldFVpbnQ4KHBhZ2VTdGFydCArIDI2LCB0cnVlKTtcbiAgICAgIHZhciBzZWdtZW50VGFibGVJbmRleCA9IHBhZ2VTdGFydCArIDI3ICsgc2VnbWVudFRhYmxlTGVuZ3RoO1xuXG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc2VnbWVudFRhYmxlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBhY2tldExlbmd0aCA9IGRhdGFWaWV3LmdldFVpbnQ4KHBhZ2VTdGFydCArIDI3ICsgaSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZGVjb2RlckJ1ZmZlci5zZXQodHlwZWRBcnJheS5zdWJhcnJheShzZWdtZW50VGFibGVJbmRleCwgc2VnbWVudFRhYmxlSW5kZXggKz0gcGFja2V0TGVuZ3RoKSwgdGhpcy5kZWNvZGVyQnVmZmVySW5kZXgpO1xuICAgICAgICB0aGlzLmRlY29kZXJCdWZmZXJJbmRleCArPSBwYWNrZXRMZW5ndGg7XG5cbiAgICAgICAgaWYocGFja2V0TGVuZ3RoIDwgMjU1KSB7XG4gICAgICAgICAgdmFyIG91dHB1dFNhbXBsZUxlbmd0aCA9IHRoaXMuX29wdXNfZGVjb2RlX2Zsb2F0KHRoaXMuZGVjb2RlciwgdGhpcy5kZWNvZGVyQnVmZmVyUG9pbnRlciwgdGhpcy5kZWNvZGVyQnVmZmVySW5kZXgsIHRoaXMuZGVjb2Rlck91dHB1dFBvaW50ZXIsIHRoaXMuZGVjb2Rlck91dHB1dE1heExlbmd0aCwgMCk7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYod2l0aFdhdmVmb3JtICYmIG91dHB1dFNhbXBsZUxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBzYW1wbGVCdWZmZXIgPSB0aGlzLkhFQVBGMzIuc3ViYXJyYXkodGhpcy5kZWNvZGVyT3V0cHV0UG9pbnRlciA+PiAyLCAodGhpcy5kZWNvZGVyT3V0cHV0UG9pbnRlciA+PiAyKSArIHRoaXMuZGVjb2Rlck91dHB1dE1heExlbmd0aCk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzYW1wbGVCdWZmZXI6Jywgc2FtcGxlQnVmZmVyKTtcbiAgXG4gICAgICAgICAgICB0aGlzLndhdmVmb3JtR2VuZXJhdG9yLnNhdmVTYW1wbGVzKHRoaXMuZGVjb2Rlck91dHB1dE1heExlbmd0aCwgc2FtcGxlQnVmZmVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmVzYW1wbGVkTGVuZ3RoID0gTWF0aC5jZWlsKG91dHB1dFNhbXBsZUxlbmd0aCAqIHRoaXMuY29uZmlnLm91dHB1dEJ1ZmZlclNhbXBsZVJhdGUgLyB0aGlzLmNvbmZpZy5kZWNvZGVyU2FtcGxlUmF0ZSk7XG4gICAgICAgICAgdGhpcy5IRUFQMzJbdGhpcy5kZWNvZGVyT3V0cHV0TGVuZ3RoUG9pbnRlciA+PiAyXSA9IG91dHB1dFNhbXBsZUxlbmd0aDtcbiAgICAgICAgICB0aGlzLkhFQVAzMlt0aGlzLnJlc2FtcGxlT3V0cHV0TGVuZ3RoUG9pbnRlciA+PiAyXSA9IHJlc2FtcGxlZExlbmd0aDtcbiAgICAgICAgICB0aGlzLl9zcGVleF9yZXNhbXBsZXJfcHJvY2Vzc19pbnRlcmxlYXZlZF9mbG9hdCh0aGlzLnJlc2FtcGxlciwgdGhpcy5kZWNvZGVyT3V0cHV0UG9pbnRlciwgdGhpcy5kZWNvZGVyT3V0cHV0TGVuZ3RoUG9pbnRlciwgdGhpcy5yZXNhbXBsZU91dHB1dEJ1ZmZlclBvaW50ZXIsIHRoaXMucmVzYW1wbGVPdXRwdXRMZW5ndGhQb2ludGVyKTtcbiAgICAgICAgICB0aGlzLnNlbmRUb091dHB1dEJ1ZmZlcnModGhpcy5IRUFQRjMyLnN1YmFycmF5KHRoaXMucmVzYW1wbGVPdXRwdXRCdWZmZXJQb2ludGVyID4+IDIsICh0aGlzLnJlc2FtcGxlT3V0cHV0QnVmZmVyUG9pbnRlciA+PiAyKSArIHJlc2FtcGxlZExlbmd0aCAqIHRoaXMubnVtYmVyT2ZDaGFubmVscykpO1xuICAgICAgICAgIHRoaXMuZGVjb2RlckJ1ZmZlckluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBFbmQgb2Ygc3RyZWFtXG4gICAgICBpZihoZWFkZXJUeXBlICYgNCkge1xuICAgICAgICB0aGlzLnNlbmRMYXN0QnVmZmVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB0aGlzKTtcbn07XG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5nZXRQYWdlQm91bmRhcmllcyA9IGZ1bmN0aW9uKGRhdGFWaWV3KSB7XG4gIHZhciBwYWdlQm91bmRhcmllcyA9IFtdO1xuXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhVmlldy5ieXRlTGVuZ3RoIC0gMzI7IGkrKykge1xuICAgIGlmKGRhdGFWaWV3LmdldFVpbnQzMihpLCB0cnVlKSA9PSAxMzk5Mjg1NTgzKSB7XG4gICAgICBwYWdlQm91bmRhcmllcy5wdXNoKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYWdlQm91bmRhcmllcztcbn07XG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmVzZXRPdXRwdXRCdWZmZXJzKCk7XG4gIHRoaXMuaW5pdENvZGVjKCk7XG4gIHRoaXMuaW5pdFJlc2FtcGxlcigpO1xufTtcblxuT2dnT3B1c0RlY29kZXIucHJvdG90eXBlLmluaXRDb2RlYyA9IGZ1bmN0aW9uKCkge1xuICBpZih0aGlzLmRlY29kZXIpIHtcbiAgICB0aGlzLl9vcHVzX2RlY29kZXJfZGVzdHJveSh0aGlzLmRlY29kZXIpO1xuICAgIHRoaXMuX2ZyZWUodGhpcy5kZWNvZGVyQnVmZmVyUG9pbnRlcik7XG4gICAgdGhpcy5fZnJlZSh0aGlzLmRlY29kZXJPdXRwdXRMZW5ndGhQb2ludGVyKTtcbiAgICB0aGlzLl9mcmVlKHRoaXMuZGVjb2Rlck91dHB1dFBvaW50ZXIpO1xuICB9XG5cbiAgdmFyIGVyclJlZmVyZW5jZSA9IHRoaXMuX21hbGxvYyg0KTtcbiAgdGhpcy5kZWNvZGVyID0gdGhpcy5fb3B1c19kZWNvZGVyX2NyZWF0ZSh0aGlzLmNvbmZpZy5kZWNvZGVyU2FtcGxlUmF0ZSwgdGhpcy5udW1iZXJPZkNoYW5uZWxzLCBlcnJSZWZlcmVuY2UpO1xuICB0aGlzLl9mcmVlKGVyclJlZmVyZW5jZSk7XG5cbiAgdGhpcy5kZWNvZGVyQnVmZmVyTWF4TGVuZ3RoID0gNDAwMDtcbiAgdGhpcy5kZWNvZGVyQnVmZmVyUG9pbnRlciA9IHRoaXMuX21hbGxvYyh0aGlzLmRlY29kZXJCdWZmZXJNYXhMZW5ndGgpO1xuICB0aGlzLmRlY29kZXJCdWZmZXIgPSB0aGlzLkhFQVBVOC5zdWJhcnJheSh0aGlzLmRlY29kZXJCdWZmZXJQb2ludGVyLCB0aGlzLmRlY29kZXJCdWZmZXJQb2ludGVyICsgdGhpcy5kZWNvZGVyQnVmZmVyTWF4TGVuZ3RoKTtcbiAgdGhpcy5kZWNvZGVyQnVmZmVySW5kZXggPSAwO1xuXG4gIHRoaXMuZGVjb2Rlck91dHB1dExlbmd0aFBvaW50ZXIgPSB0aGlzLl9tYWxsb2MoNCk7XG4gIHRoaXMuZGVjb2Rlck91dHB1dE1heExlbmd0aCA9IHRoaXMuY29uZmlnLmRlY29kZXJTYW1wbGVSYXRlICogdGhpcy5udW1iZXJPZkNoYW5uZWxzICogMTIwIC8gMTAwMDsgLy8gTWF4IDEyMG1zIGZyYW1lIHNpemVcbiAgdGhpcy5kZWNvZGVyT3V0cHV0UG9pbnRlciA9IHRoaXMuX21hbGxvYyh0aGlzLmRlY29kZXJPdXRwdXRNYXhMZW5ndGggKiA0KTsgLy8gNCBieXRlcyBwZXIgc2FtcGxlXG59O1xuXG5PZ2dPcHVzRGVjb2Rlci5wcm90b3R5cGUuaW5pdFJlc2FtcGxlciA9IGZ1bmN0aW9uKCkge1xuICBpZih0aGlzLnJlc2FtcGxlcikge1xuICAgIHRoaXMuX3NwZWV4X3Jlc2FtcGxlcl9kZXN0cm95KHRoaXMucmVzYW1wbGVyKTtcbiAgICB0aGlzLl9mcmVlKHRoaXMucmVzYW1wbGVPdXRwdXRMZW5ndGhQb2ludGVyKTtcbiAgICB0aGlzLl9mcmVlKHRoaXMucmVzYW1wbGVPdXRwdXRCdWZmZXJQb2ludGVyKTtcbiAgfVxuXG4gIHZhciBlcnJMb2NhdGlvbiA9IHRoaXMuX21hbGxvYyg0KTtcbiAgdGhpcy5yZXNhbXBsZXIgPSB0aGlzLl9zcGVleF9yZXNhbXBsZXJfaW5pdCh0aGlzLm51bWJlck9mQ2hhbm5lbHMsIHRoaXMuY29uZmlnLmRlY29kZXJTYW1wbGVSYXRlLCB0aGlzLmNvbmZpZy5vdXRwdXRCdWZmZXJTYW1wbGVSYXRlLCB0aGlzLmNvbmZpZy5yZXNhbXBsZVF1YWxpdHksIGVyckxvY2F0aW9uKTtcbiAgdGhpcy5fZnJlZShlcnJMb2NhdGlvbik7XG5cbiAgdGhpcy5yZXNhbXBsZU91dHB1dExlbmd0aFBvaW50ZXIgPSB0aGlzLl9tYWxsb2MoNCk7XG4gIHRoaXMucmVzYW1wbGVPdXRwdXRNYXhMZW5ndGggPSBNYXRoLmNlaWwoIHRoaXMuZGVjb2Rlck91dHB1dE1heExlbmd0aCAqIHRoaXMuY29uZmlnLm91dHB1dEJ1ZmZlclNhbXBsZVJhdGUgLyB0aGlzLmNvbmZpZy5kZWNvZGVyU2FtcGxlUmF0ZSk7XG4gIHRoaXMucmVzYW1wbGVPdXRwdXRCdWZmZXJQb2ludGVyID0gdGhpcy5fbWFsbG9jKHRoaXMucmVzYW1wbGVPdXRwdXRNYXhMZW5ndGggKiA0KTsgLy8gNCBieXRlcyBwZXIgc2FtcGxlXG59O1xuXG5PZ2dPcHVzRGVjb2Rlci5wcm90b3R5cGUucmVzZXRPdXRwdXRCdWZmZXJzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMub3V0cHV0QnVmZmVycyA9IFtdO1xuICB0aGlzLm91dHB1dEJ1ZmZlckFycmF5QnVmZmVycyA9IFtdO1xuICB0aGlzLm91dHB1dEJ1ZmZlckluZGV4ID0gMDtcblxuICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZkNoYW5uZWxzOyBpKyspIHtcbiAgICB0aGlzLm91dHB1dEJ1ZmZlcnMucHVzaChuZXcgRmxvYXQzMkFycmF5KHRoaXMuY29uZmlnLmJ1ZmZlckxlbmd0aCkpO1xuICAgIHRoaXMub3V0cHV0QnVmZmVyQXJyYXlCdWZmZXJzLnB1c2godGhpcy5vdXRwdXRCdWZmZXJzW2ldLmJ1ZmZlcik7XG4gIH1cbn07XG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5zZW5kTGFzdEJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNlbmRUb091dHB1dEJ1ZmZlcnMobmV3IEZsb2F0MzJBcnJheSgodGhpcy5jb25maWcuYnVmZmVyTGVuZ3RoIC0gdGhpcy5vdXRwdXRCdWZmZXJJbmRleCkgKiB0aGlzLm51bWJlck9mQ2hhbm5lbHMpKTtcbiAgXG4gIHZhciB3YXZlZm9ybSA9IHRoaXMud2F2ZWZvcm1HZW5lcmF0b3IgPyB0aGlzLndhdmVmb3JtR2VuZXJhdG9yLmdlbmVyYXRlKCkgOiBudWxsO1xuICB0aGlzLndhdmVmb3JtR2VuZXJhdG9yID0gbmV3IFdhdmVmb3JtR2VuZXJhdG9yKCk7XG4gIGdsb2JhbFsncG9zdE1lc3NhZ2UnXSh7dHlwZTogJ2RvbmUnLCB3YXZlZm9ybTogd2F2ZWZvcm19KTtcbn07XG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5zZW5kVG9PdXRwdXRCdWZmZXJzID0gZnVuY3Rpb24obWVyZ2VkQnVmZmVycykge1xuICB2YXIgZGF0YUluZGV4ID0gMDtcbiAgdmFyIG1lcmdlZEJ1ZmZlckxlbmd0aCA9IG1lcmdlZEJ1ZmZlcnMubGVuZ3RoIC8gdGhpcy5udW1iZXJPZkNoYW5uZWxzO1xuXG4gIHdoaWxlKGRhdGFJbmRleCA8IG1lcmdlZEJ1ZmZlckxlbmd0aCkge1xuICAgIHZhciBhbW91bnRUb0NvcHkgPSBNYXRoLm1pbihtZXJnZWRCdWZmZXJMZW5ndGggLSBkYXRhSW5kZXgsIHRoaXMuY29uZmlnLmJ1ZmZlckxlbmd0aCAtIHRoaXMub3V0cHV0QnVmZmVySW5kZXgpO1xuXG4gICAgaWYodGhpcy5udW1iZXJPZkNoYW5uZWxzID09PSAxKSB7XG4gICAgICB0aGlzLm91dHB1dEJ1ZmZlcnNbMF0uc2V0KG1lcmdlZEJ1ZmZlcnMuc3ViYXJyYXkoZGF0YUluZGV4LCBkYXRhSW5kZXggKyBhbW91bnRUb0NvcHkpLCB0aGlzLm91dHB1dEJ1ZmZlckluZGV4KTtcbiAgICB9IGVsc2UgeyAvLyBEZWludGVybGVhdmVcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhbW91bnRUb0NvcHk7IGkrKykge1xuICAgICAgICB0aGlzLm91dHB1dEJ1ZmZlcnMuZm9yRWFjaChmdW5jdGlvbihidWZmZXIsIGNoYW5uZWxJbmRleCkge1xuICAgICAgICAgIGJ1ZmZlclt0aGlzLm91dHB1dEJ1ZmZlckluZGV4ICsgaV0gPSBtZXJnZWRCdWZmZXJzWyhkYXRhSW5kZXggKyBpKSAqIHRoaXMubnVtYmVyT2ZDaGFubmVscyArIGNoYW5uZWxJbmRleF07XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGFJbmRleCArPSBhbW91bnRUb0NvcHk7XG4gICAgdGhpcy5vdXRwdXRCdWZmZXJJbmRleCArPSBhbW91bnRUb0NvcHk7XG5cbiAgICBpZih0aGlzLm91dHB1dEJ1ZmZlckluZGV4ID09IHRoaXMuY29uZmlnLmJ1ZmZlckxlbmd0aCkge1xuICAgICAgZ2xvYmFsWydwb3N0TWVzc2FnZSddKHRoaXMub3V0cHV0QnVmZmVycywgdGhpcy5vdXRwdXRCdWZmZXJBcnJheUJ1ZmZlcnMpO1xuICAgICAgdGhpcy5yZXNldE91dHB1dEJ1ZmZlcnMoKTtcbiAgICB9XG4gIH1cbn07XG5cblxuaWYoIU1vZHVsZSkge1xuICBNb2R1bGUgPSB7fTtcbn1cblxuTW9kdWxlWydtYWluUmVhZHknXSA9IG1haW5SZWFkeTtcbk1vZHVsZVsnT2dnT3B1c0RlY29kZXInXSA9IE9nZ09wdXNEZWNvZGVyO1xuTW9kdWxlWydvblJ1bnRpbWVJbml0aWFsaXplZCddID0gbWFpblJlYWR5UmVzb2x2ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2R1bGU7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/decoderWorker.js\n");

/***/ })

/******/ });
});


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_HAS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// A web environment like Electron.js can have Node enabled, so we must
// distinguish between Node-enabled environments and Node environments per se.
// This will allow the former to do things like mount NODEFS.
// Extended check using process.versions fixes issue #8816.
// (Also makes redundant the original check that 'require' is a function.)
ENVIRONMENT_HAS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
ENVIRONMENT_IS_NODE = ENVIRONMENT_HAS_NODE && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;



// Three configurations we can be running in:
// 1) We could be the application main() thread running in the main JS UI thread. (ENVIRONMENT_IS_WORKER == false and ENVIRONMENT_IS_PTHREAD == false)
// 2) We could be the application main() thread proxied to worker. (with Emscripten -s PROXY_TO_WORKER=1) (ENVIRONMENT_IS_WORKER == true, ENVIRONMENT_IS_PTHREAD == false)
// 3) We could be an application pthread running in a worker. (ENVIRONMENT_IS_WORKER == true and ENVIRONMENT_IS_PTHREAD == true)




// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

if (ENVIRONMENT_IS_NODE) {
  scriptDirectory = __dirname + '/';

  // Expose functionality in the same simple way that the shells work
  // Note that we pollute the global namespace here, otherwise we break in node
  var nodeFS;
  var nodePath;

  read_ = function shell_read(filename, binary) {
    var ret;
      if (!nodeFS) nodeFS = require('fs');
      if (!nodePath) nodePath = require('path');
      filename = nodePath['normalize'](filename);
      ret = nodeFS['readFileSync'](filename);
    return binary ? ret : ret.toString();
  };

  readBinary = function readBinary(filename) {
    var ret = read_(filename, true);
    if (!ret.buffer) {
      ret = new Uint8Array(ret);
    }
    assert(ret.buffer);
    return ret;
  };

  if (process['argv'].length > 1) {
    thisProgram = process['argv'][1].replace(/\\/g, '/');
  }

  arguments_ = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  process['on']('unhandledRejection', abort);

  quit_ = function(status) {
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };
} else
if (ENVIRONMENT_IS_SHELL) {


  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    var data;
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit === 'function') {
    quit_ = function(status) {
      quit(status);
    };
  }

  if (typeof print !== 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console === 'undefined') console = {};
    console.log = print;
    console.warn = console.error = typeof printErr !== 'undefined' ? printErr : print;
  }
} else
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }


  read_ = function shell_read(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function readBinary(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(xhr.response);
    };
  }

  readAsync = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

  setWindowTitle = function(title) { document.title = title };
} else
{
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module['arguments']) arguments_ = Module['arguments'];
if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message

// TODO remove when SDL2 is fixed (also see above)



// Copyright 2017 The Emscripten Authors.  All rights reserved.
// Emscripten is available under two separate licenses, the MIT license and the
// University of Illinois/NCSA Open Source License.  Both these licenses can be
// found in the LICENSE file.

// {{PREAMBLE_ADDITIONS}}

var STACK_ALIGN = 16;


function dynamicAlloc(size) {
  var ret = HEAP32[DYNAMICTOP_PTR>>2];
  var end = (ret + size + 15) & -16;
  if (end > _emscripten_get_heap_size()) {
    abort();
  }
  HEAP32[DYNAMICTOP_PTR>>2] = end;
  return ret;
}

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = parseInt(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

var asm2wasmImports = { // special asm2wasm imports
    "f64-rem": function(x, y) {
        return x % y;
    },
    "debugger": function() {
    }
};



var jsCallStartIndex = 1;
var functionPointers = new Array(0);

// Wraps a JS function as a wasm function with a given signature.
// In the future, we may get a WebAssembly.Function constructor. Until then,
// we create a wasm module that takes the JS function as an import with a given
// signature, and re-exports that as a wasm function.
function convertJsFunctionToWasm(func, sig) {

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    e: {
      f: func
    }
  });
  var wrappedFunc = instance.exports.f;
  return wrappedFunc;
}

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  var table = wasmTable;
  var ret = table.length;

  // Grow the table
  try {
    table.grow(1);
  } catch (err) {
    if (!err instanceof RangeError) {
      throw err;
    }
    throw 'Unable to grow wasm table. Use a higher value for RESERVED_FUNCTION_POINTERS or set ALLOW_TABLE_GROWTH.';
  }

  // Insert new element
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    table.set(ret, func);
  } catch (err) {
    if (!err instanceof TypeError) {
      throw err;
    }
    assert(typeof sig !== 'undefined', 'Missing signature argument to addFunction');
    var wrapped = convertJsFunctionToWasm(func, sig);
    table.set(ret, wrapped);
  }

  return ret;
}

function removeFunctionWasm(index) {
  // TODO(sbc): Look into implementing this to allow re-using of table slots
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {


  var base = 0;
  for (var i = base; i < base + 0; i++) {
    if (!functionPointers[i]) {
      functionPointers[i] = func;
      return jsCallStartIndex + i;
    }
  }
  throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';

}

function removeFunction(index) {

  functionPointers[index-jsCallStartIndex] = null;
}

var funcWrappers = {};

function getFuncWrapper(func, sig) {
  if (!func) return; // on null pointer, return undefined
  assert(sig);
  if (!funcWrappers[sig]) {
    funcWrappers[sig] = {};
  }
  var sigCache = funcWrappers[sig];
  if (!sigCache[func]) {
    // optimize away arguments usage in common cases
    if (sig.length === 1) {
      sigCache[func] = function dynCall_wrapper() {
        return dynCall(sig, func);
      };
    } else if (sig.length === 2) {
      sigCache[func] = function dynCall_wrapper(arg) {
        return dynCall(sig, func, [arg]);
      };
    } else {
      // general case
      sigCache[func] = function dynCall_wrapper() {
        return dynCall(sig, func, Array.prototype.slice.call(arguments));
      };
    }
  }
  return sigCache[func];
}


function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

function dynCall(sig, ptr, args) {
  if (args && args.length) {
    return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
  } else {
    return Module['dynCall_' + sig].call(null, ptr);
  }
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};


var Runtime = {
};

// The address globals begin at. Very low in memory, for code size and optimization opportunities.
// Above 0 is static memory, starting with globals.
// Then the stack.
// Then 'dynamic' memory for sbrk.
var GLOBAL_BASE = 1024;




// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html


var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];


if (typeof WebAssembly !== 'object') {
  err('no native wasm support detected');
}


// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @type {function(number, number, string, boolean=)} */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @type {function(number, string, boolean=)} */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}





// Wasm globals

var wasmMemory;

// In fastcomp asm.js, we don't need a wasm Table at all.
// In the wasm backend, we polyfill the WebAssembly object,
// so this creates a (non-native-wasm) table for us.
var wasmTable = new WebAssembly.Table({
  'initial': 14,
  'maximum': 14,
  'element': 'anyfunc'
});


//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS = 0;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

function cwrap(ident, returnType, argTypes, opts) {
  argTypes = argTypes || [];
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = argTypes.every(function(type){ return type === 'number'});
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_DYNAMIC = 2; // Cannot be freed except through sbrk
var ALLOC_NONE = 3; // Do not allocate

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((TypedArray|Array<number>|number), string, number, number=)} */
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }

  var singleType = typeof types === 'string' ? types : null;

  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [_malloc,
    stackAlloc,
    dynamicAlloc][allocator](Math.max(size, singleType ? 1 : types.length));
  }

  if (zeroinit) {
    var stop;
    ptr = ret;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)>>0)]=0;
    }
    return ret;
  }

  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(/** @type {!Uint8Array} */ (slab), ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }

  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }

    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

    setValue(ret+i, curr, type);

    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }

  return ret;
}

// Allocate memory during any stage of startup - static memory early on, dynamic memory later, malloc when ready
function getMemory(size) {
  if (!runtimeInitialized) return dynamicAlloc(size);
  return _malloc(size);
}




/** @type {function(number, number=)} */
function Pointer_stringify(ptr, length) {
  abort("this function has been removed - you should use UTF8ToString(ptr, maxBytesToRead) instead!");
}

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}


// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(u8Array, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (u8Array[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = u8Array[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = u8Array[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = u8Array[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (u8Array[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outU8Array: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      outU8Array[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      outU8Array[outIdx++] = 0xC0 | (u >> 6);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      outU8Array[outIdx++] = 0xE0 | (u >> 12);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      outU8Array[outIdx++] = 0xF0 | (u >> 18);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  outU8Array[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}


// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;
function UTF16ToString(ptr) {
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  while (HEAP16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr) {
  var i = 0;

  var str = '';
  while (1) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0)
      return str;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}

function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}




// Memory management

var PAGE_SIZE = 16384;
var WASM_PAGE_SIZE = 65536;
var ASMJS_PAGE_SIZE = 16777216;

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}


var STATIC_BASE = 1024,
    STACK_BASE = 37824,
    STACKTOP = STACK_BASE,
    STACK_MAX = 5280704,
    DYNAMIC_BASE = 5280704,
    DYNAMICTOP_PTR = 37616;




var TOTAL_STACK = 5242880;

var INITIAL_TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 16777216;







// In standalone mode, the wasm creates the memory, and the user can't provide it.
// In non-standalone/normal mode, we create the memory here.

// Create the main memory. (Note: this isn't used in STANDALONE_WASM mode since the wasm
// memory is created in the wasm, not in JS.)

  if (Module['wasmMemory']) {
    wasmMemory = Module['wasmMemory'];
  } else
  {
    wasmMemory = new WebAssembly.Memory({
      'initial': INITIAL_TOTAL_MEMORY / WASM_PAGE_SIZE
      ,
      'maximum': INITIAL_TOTAL_MEMORY / WASM_PAGE_SIZE
    });
  }


if (wasmMemory) {
  buffer = wasmMemory.buffer;
}

// If the user provides an incorrect length, just use that length instead rather than providing the user to
// specifically provide the memory length with Module['TOTAL_MEMORY'].
INITIAL_TOTAL_MEMORY = buffer.byteLength;
updateGlobalBufferAndViews(buffer);

HEAP32[DYNAMICTOP_PTR>>2] = DYNAMIC_BASE;










function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback();
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Module['dynCall_v'](func);
      } else {
        Module['dynCall_vi'](func, callback.arg);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}

var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;


function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;
  
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  runtimeExited = true;
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

function unSign(value, bits, ignore) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
function reSign(value, bits, ignore) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}



var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_round = Math.round;
var Math_min = Math.min;
var Math_max = Math.max;
var Math_clz32 = Math.clz32;
var Math_trunc = Math.trunc;



// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data


function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  out(what);
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  throw 'abort(' + what + '). Build with -s ASSERTIONS=1 for more info.';
}


var memoryInitializer = null;







// Copyright 2017 The Emscripten Authors.  All rights reserved.
// Emscripten is available under two separate licenses, the MIT license and the
// University of Illinois/NCSA Open Source License.  Both these licenses can be
// found in the LICENSE file.

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return String.prototype.startsWith ?
      filename.startsWith(dataURIPrefix) :
      filename.indexOf(dataURIPrefix) === 0;
}




var wasmBinaryFile = 'decoderWorker.wasm';
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary() {
  try {
    if (wasmBinary) {
      return new Uint8Array(wasmBinary);
    }

    if (readBinary) {
      return readBinary(wasmBinaryFile);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // if we don't have the binary yet, and have the Fetch api, use that
  // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function') {
    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
      if (!response['ok']) {
        throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
      }
      return response['arrayBuffer']();
    }).catch(function () {
      return getBinary();
    });
  }
  // Otherwise, getBinary should be able to get it synchronously
  return new Promise(function(resolve, reject) {
    resolve(getBinary());
  });
}



// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_unstable': asmLibraryArg
    ,
    'global': {
      'NaN': NaN,
      'Infinity': Infinity
    },
    'global.Math': Math,
    'asm2wasm': asm2wasmImports
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  function receiveInstance(instance, module) {
    var exports = instance.exports;
    Module['asm'] = exports;
    removeRunDependency('wasm-instantiate');
  }
   // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');


  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
      // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
      // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }


  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);
      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.
  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming === 'function' &&
        !isDataURI(wasmBinaryFile) &&
        typeof fetch === 'function') {
      fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
        var result = WebAssembly.instantiateStreaming(response, info);
        return result.then(receiveInstantiatedSource, function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            instantiateArrayBuffer(receiveInstantiatedSource);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiatedSource);
    }
  }
  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  instantiateAsync();
  return {}; // no exports yet; we'll fill them in later
}

Module['asm'] = createWasm;

// Globals used by JS i64 conversions
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = [];





// STATICTOP = STATIC_BASE + 36800;
/* global initializers */ /*__ATINIT__.push();*/








/* no memory initializer */
var tempDoublePtr = 37808

function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much
  HEAP8[tempDoublePtr] = HEAP8[ptr];
  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];
  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];
  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];
}

function copyTempDouble(ptr) {
  HEAP8[tempDoublePtr] = HEAP8[ptr];
  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];
  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];
  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];
  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];
  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];
  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];
  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];
}

// {{PRE_LIBRARY}}


  function demangle(func) {
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b__Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function jsStackTrace() {
      var err = new Error();
      if (!err.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error(0);
        } catch(e) {
          err = e;
        }
        if (!err.stack) {
          return '(no stack trace available)';
        }
      }
      return err.stack.toString();
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  
  
  
  var PATH={splitPath:function(filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function(parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function(path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function(path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function(path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function(path) {
        return PATH.splitPath(path)[3];
      },join:function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function(l, r) {
        return PATH.normalize(l + '/' + r);
      }};var SYSCALLS={buffers:[null,[],[]],printChar:function(stream, curr) {
        var buffer = SYSCALLS.buffers[stream];
        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
          buffer.length = 0;
        } else {
          buffer.push(curr);
        }
      },varargs:0,get:function(varargs) {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function() {
        var ret = UTF8ToString(SYSCALLS.get());
        return ret;
      },get64:function() {
        var low = SYSCALLS.get(), high = SYSCALLS.get();
        return low;
      },getZero:function() {
        SYSCALLS.get();
      }};function _fd_close(fd) {try {
  
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }function ___wasi_fd_close(
  ) {
  return _fd_close.apply(null, arguments)
  }

  
  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {try {
  
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }function ___wasi_fd_seek(
  ) {
  return _fd_seek.apply(null, arguments)
  }

  
  
  function flush_NO_FILESYSTEM() {
      // flush anything remaining in the buffers during shutdown
      var fflush = Module["_fflush"];
      if (fflush) fflush(0);
      var buffers = SYSCALLS.buffers;
      if (buffers[1].length) SYSCALLS.printChar(1, 10);
      if (buffers[2].length) SYSCALLS.printChar(2, 10);
    }function _fd_write(fd, iov, iovcnt, pnum) {try {
  
      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[(((iov)+(i*8))>>2)];
        var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr+j]);
        }
        num += len;
      }
      HEAP32[((pnum)>>2)]=num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }function ___wasi_fd_write(
  ) {
  return _fd_write.apply(null, arguments)
  }

  function _abort() {
      abort();
    }

  function _emscripten_get_heap_size() {
      return HEAP8.length;
    }

   

  
  function abortOnCannotGrowMemory(requestedSize) {
      abort('OOM');
    }function _emscripten_resize_heap(requestedSize) {
      abortOnCannotGrowMemory(requestedSize);
    }

  function _llvm_stackrestore(p) {
      var self = _llvm_stacksave;
      var ret = self.LLVM_SAVEDSTACKS[p];
      self.LLVM_SAVEDSTACKS.splice(p, 1);
      stackRestore(ret);
    }

  function _llvm_stacksave() {
      var self = _llvm_stacksave;
      if (!self.LLVM_SAVEDSTACKS) {
        self.LLVM_SAVEDSTACKS = [];
      }
      self.LLVM_SAVEDSTACKS.push(stackSave());
      return self.LLVM_SAVEDSTACKS.length-1;
    }

  
  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src+num), dest);
    }
  
   

   

   

  
  
    
var ASSERTIONS = false;

// Copyright 2017 The Emscripten Authors.  All rights reserved.
// Emscripten is available under two separate licenses, the MIT license and the
// University of Illinois/NCSA Open Source License.  Both these licenses can be
// found in the LICENSE file.

/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// ASM_LIBRARY EXTERN PRIMITIVES: Int8Array,Int32Array,Math_floor,Math_ceil


var asmGlobalArg = {};

var asmLibraryArg = { "___wasi_fd_close": ___wasi_fd_close, "___wasi_fd_seek": ___wasi_fd_seek, "___wasi_fd_write": ___wasi_fd_write, "__memory_base": 1024, "__table_base": 0, "_abort": _abort, "_emscripten_get_heap_size": _emscripten_get_heap_size, "_emscripten_memcpy_big": _emscripten_memcpy_big, "_emscripten_resize_heap": _emscripten_resize_heap, "_fd_close": _fd_close, "_fd_seek": _fd_seek, "_fd_write": _fd_write, "_llvm_stackrestore": _llvm_stackrestore, "_llvm_stacksave": _llvm_stacksave, "abort": abort, "abortOnCannotGrowMemory": abortOnCannotGrowMemory, "demangle": demangle, "demangleAll": demangleAll, "flush_NO_FILESYSTEM": flush_NO_FILESYSTEM, "getTempRet0": getTempRet0, "jsStackTrace": jsStackTrace, "memory": wasmMemory, "setTempRet0": setTempRet0, "stackTrace": stackTrace, "table": wasmTable, "tempDoublePtr": tempDoublePtr };
// EMSCRIPTEN_START_ASM
var asm =Module["asm"]// EMSCRIPTEN_END_ASM
(asmGlobalArg, asmLibraryArg, buffer);

Module["asm"] = asm;
var _emscripten_get_sbrk_ptr = Module["_emscripten_get_sbrk_ptr"] = function() {
  return Module["asm"]["_emscripten_get_sbrk_ptr"].apply(null, arguments)
};

var _free = Module["_free"] = function() {
  return Module["asm"]["_free"].apply(null, arguments)
};

var _malloc = Module["_malloc"] = function() {
  return Module["asm"]["_malloc"].apply(null, arguments)
};

var _memcpy = Module["_memcpy"] = function() {
  return Module["asm"]["_memcpy"].apply(null, arguments)
};

var _memmove = Module["_memmove"] = function() {
  return Module["asm"]["_memmove"].apply(null, arguments)
};

var _memset = Module["_memset"] = function() {
  return Module["asm"]["_memset"].apply(null, arguments)
};

var _opus_decode = Module["_opus_decode"] = function() {
  return Module["asm"]["_opus_decode"].apply(null, arguments)
};

var _opus_decode_float = Module["_opus_decode_float"] = function() {
  return Module["asm"]["_opus_decode_float"].apply(null, arguments)
};

var _opus_decoder_create = Module["_opus_decoder_create"] = function() {
  return Module["asm"]["_opus_decoder_create"].apply(null, arguments)
};

var _opus_decoder_destroy = Module["_opus_decoder_destroy"] = function() {
  return Module["asm"]["_opus_decoder_destroy"].apply(null, arguments)
};

var _rintf = Module["_rintf"] = function() {
  return Module["asm"]["_rintf"].apply(null, arguments)
};

var _speex_resampler_destroy = Module["_speex_resampler_destroy"] = function() {
  return Module["asm"]["_speex_resampler_destroy"].apply(null, arguments)
};

var _speex_resampler_init = Module["_speex_resampler_init"] = function() {
  return Module["asm"]["_speex_resampler_init"].apply(null, arguments)
};

var _speex_resampler_process_interleaved_float = Module["_speex_resampler_process_interleaved_float"] = function() {
  return Module["asm"]["_speex_resampler_process_interleaved_float"].apply(null, arguments)
};

var _speex_resampler_process_interleaved_int = Module["_speex_resampler_process_interleaved_int"] = function() {
  return Module["asm"]["_speex_resampler_process_interleaved_int"].apply(null, arguments)
};

var establishStackSpace = Module["establishStackSpace"] = function() {
  return Module["asm"]["establishStackSpace"].apply(null, arguments)
};

var stackAlloc = Module["stackAlloc"] = function() {
  return Module["asm"]["stackAlloc"].apply(null, arguments)
};

var stackRestore = Module["stackRestore"] = function() {
  return Module["asm"]["stackRestore"].apply(null, arguments)
};

var stackSave = Module["stackSave"] = function() {
  return Module["asm"]["stackSave"].apply(null, arguments)
};

var dynCall_ii = Module["dynCall_ii"] = function() {
  return Module["asm"]["dynCall_ii"].apply(null, arguments)
};

var dynCall_iiii = Module["dynCall_iiii"] = function() {
  return Module["asm"]["dynCall_iiii"].apply(null, arguments)
};

var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = function() {
  return Module["asm"]["dynCall_iiiiiii"].apply(null, arguments)
};

var dynCall_jiji = Module["dynCall_jiji"] = function() {
  return Module["asm"]["dynCall_jiji"].apply(null, arguments)
};
;



// === Auto-generated postamble setup entry stuff ===

Module['asm'] = asm;














































































var calledRun;


/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};





/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }


  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();


    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}
Module['run'] = run;


function exit(status, implicit) {

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
  } else {

    ABORT = true;
    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}


  noExitRuntime = true;

run();





// {{MODULE_ADDITIONS}}




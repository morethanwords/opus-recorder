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
		exports["EncoderWorker"] = factory();
	else
		root["EncoderWorker"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/encoderWorker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0VuY29kZXJXb3JrZXIvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzP2NkMDAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/global.js\n");

/***/ }),

/***/ "./src/encoderWorker.js":
/*!******************************!*\
  !*** ./src/encoderWorker.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar encoder;\nvar mainReadyResolve;\nvar mainReady = new Promise(function(resolve){ mainReadyResolve = resolve; });\n\nglobal['onmessage'] = function( e ){\n  mainReady.then(function(){\n    switch( e['data']['command'] ){\n\n      case 'encode':\n        if (encoder){\n          encoder.encode( e['data']['buffers'] );\n        }\n        break;\n\n      case 'getHeaderPages':\n        if (encoder){\n          encoder.generateIdPage();\n          encoder.generateCommentPage();\n        }\n        break;\n\n      case 'done':\n        if (encoder) {\n          encoder.encodeFinalFrame();\n          global['postMessage']( {message: 'done'} );\n        }\n        break;\n\n      case 'close':\n        global['close']();\n        break;\n\n      case 'flush':\n        if (encoder) {\n          encoder.flush();\n        }\n        break;\n\n      case 'init':\n        if ( encoder ) {\n          encoder.destroy();\n        }\n        encoder = new OggOpusEncoder( e['data'], Module );\n        global['postMessage']( {message: 'ready'} );\n        break;\n\n      default:\n        // Ignore any unknown commands and continue recieving commands\n    }\n  });\n};\n\n\nvar OggOpusEncoder = function( config, Module ){\n\n  if ( !Module ) {\n    throw new Error('Module with exports required to initialize an encoder instance');\n  }\n\n  this.config = Object.assign({ \n    bufferLength: 4096, // Define size of incoming buffer\n    encoderApplication: 2049, // 2048 = Voice (Lower fidelity)\n                              // 2049 = Full Band Audio (Highest fidelity)\n                              // 2051 = Restricted Low Delay (Lowest latency)\n    encoderFrameSize: 20, // Specified in ms.\n    encoderSampleRate: 48000, // Desired encoding sample rate. Audio will be resampled\n    maxFramesPerPage: 40, // Tradeoff latency with overhead\n    numberOfChannels: 1,\n    originalSampleRate: 44100,\n    resampleQuality: 3, // Value between 0 and 10 inclusive. 10 being highest quality.\n    serial: Math.floor(Math.random() * 4294967296)\n  }, config );\n\n  this._opus_encoder_create = Module._opus_encoder_create;\n  this._opus_encoder_destroy = Module._opus_encoder_destroy;\n  this._opus_encoder_ctl = Module._opus_encoder_ctl;\n  this._speex_resampler_process_interleaved_float = Module._speex_resampler_process_interleaved_float;\n  this._speex_resampler_init = Module._speex_resampler_init;\n  this._speex_resampler_destroy = Module._speex_resampler_destroy;\n  this._opus_encode_float = Module._opus_encode_float;\n  this._free = Module._free;\n  this._malloc = Module._malloc;\n  this.HEAPU8 = Module.HEAPU8;\n  this.HEAP32 = Module.HEAP32;\n  this.HEAPF32 = Module.HEAPF32;\n\n  this.pageIndex = 0;\n  this.granulePosition = 0;\n  this.segmentData = new Uint8Array( 65025 ); // Maximum length of oggOpus data\n  this.segmentDataIndex = 0;\n  this.segmentTable = new Uint8Array( 255 ); // Maximum data segments\n  this.segmentTableIndex = 0;\n  this.framesInPage = 0;\n\n  this.initChecksumTable();\n  this.initCodec();\n  this.initResampler();\n\n  if ( this.config.numberOfChannels === 1 ) {\n    this.interleave = function( buffers ) { return buffers[0]; };\n  }\n  else {\n    this.interleavedBuffers = new Float32Array( this.config.bufferLength * this.config.numberOfChannels );\n  }\n\n};\n\nOggOpusEncoder.prototype.encode = function( buffers ) {\n  var samples = this.interleave( buffers );\n  var sampleIndex = 0;\n\n  while ( sampleIndex < samples.length ) {\n\n    var lengthToCopy = Math.min( this.resampleBufferLength - this.resampleBufferIndex, samples.length - sampleIndex );\n    this.resampleBuffer.set( samples.subarray( sampleIndex, sampleIndex+lengthToCopy ), this.resampleBufferIndex );\n    sampleIndex += lengthToCopy;\n    this.resampleBufferIndex += lengthToCopy;\n\n    if ( this.resampleBufferIndex === this.resampleBufferLength ) {\n      this._speex_resampler_process_interleaved_float( this.resampler, this.resampleBufferPointer, this.resampleSamplesPerChannelPointer, this.encoderBufferPointer, this.encoderSamplesPerChannelPointer );\n      var packetLength = this._opus_encode_float( this.encoder, this.encoderBufferPointer, this.encoderSamplesPerChannel, this.encoderOutputPointer, this.encoderOutputMaxLength );\n      this.segmentPacket( packetLength );\n      this.resampleBufferIndex = 0;\n\n      this.framesInPage++;\n      if ( this.framesInPage >= this.config.maxFramesPerPage ) {\n        this.generatePage();\n      }\n    }\n  }\n};\n\nOggOpusEncoder.prototype.destroy = function() {\n  if ( this.encoder ) {\n    this._free(this.encoderSamplesPerChannelPointer);\n    delete this.encoderSamplesPerChannelPointer;\n    this._free(this.encoderBufferPointer);\n    delete this.encoderBufferPointer;\n    this._free(this.encoderOutputPointer);\n    delete this.encoderOutputPointer;\n    this._free(this.resampleSamplesPerChannelPointer);\n    delete this.resampleSamplesPerChannelPointer;\n    this._free(this.resampleBufferPointer);\n    delete this.resampleBufferPointer;\n    this._speex_resampler_destroy(this.resampler);\n    delete this.resampler;\n    this._opus_encoder_destroy(this.encoder);\n    delete this.encoder;\n  }\n};\n\nOggOpusEncoder.prototype.flush = function() {\n  if ( this.framesInPage ) {\n    this.generatePage();\n  }\n  // discard any pending data in resample buffer (only a few ms worth)\n  this.resampleBufferIndex = 0;\n  global['postMessage']( {message: 'flushed'} );\n};\n\nOggOpusEncoder.prototype.encodeFinalFrame = function() {\n  if ( this.resampleBufferIndex > 0 ) {\n    var finalFrameBuffers = [];\n    for ( var i = 0; i < this.config.numberOfChannels; ++i ) {\n      finalFrameBuffers.push( new Float32Array( this.config.bufferLength - (this.resampleBufferIndex / this.config.numberOfChannels) ));\n    }\n    this.encode( finalFrameBuffers );\n  }\n  this.headerType += 4;\n  this.generatePage();\n};\n\nOggOpusEncoder.prototype.getChecksum = function( data ){\n  var checksum = 0;\n  for ( var i = 0; i < data.length; i++ ) {\n    checksum = (checksum << 8) ^ this.checksumTable[ ((checksum>>>24) & 0xff) ^ data[i] ];\n  }\n  return checksum >>> 0;\n};\n\nOggOpusEncoder.prototype.generateCommentPage = function(){\n  var segmentDataView = new DataView( this.segmentData.buffer );\n  segmentDataView.setUint32( 0, 1937076303, true ) // Magic Signature 'Opus'\n  segmentDataView.setUint32( 4, 1936154964, true ) // Magic Signature 'Tags'\n  segmentDataView.setUint32( 8, 10, true ); // Vendor Length\n  segmentDataView.setUint32( 12, 1868784978, true ); // Vendor name 'Reco'\n  segmentDataView.setUint32( 16, 1919247474, true ); // Vendor name 'rder'\n  segmentDataView.setUint16( 20, 21322, true ); // Vendor name 'JS'\n  segmentDataView.setUint32( 22, 0, true ); // User Comment List Length\n  this.segmentTableIndex = 1;\n  this.segmentDataIndex = this.segmentTable[0] = 26;\n  this.headerType = 0;\n  this.generatePage();\n};\n\nOggOpusEncoder.prototype.generateIdPage = function(){\n  var segmentDataView = new DataView( this.segmentData.buffer );\n  segmentDataView.setUint32( 0, 1937076303, true ) // Magic Signature 'Opus'\n  segmentDataView.setUint32( 4, 1684104520, true ) // Magic Signature 'Head'\n  segmentDataView.setUint8( 8, 1, true ); // Version\n  segmentDataView.setUint8( 9, this.config.numberOfChannels, true ); // Channel count\n  segmentDataView.setUint16( 10, 3840, true ); // pre-skip (80ms)\n  segmentDataView.setUint32( 12, this.config.originalSampleRateOverride || this.config.originalSampleRate, true ); // original sample rate\n  segmentDataView.setUint16( 16, 0, true ); // output gain\n  segmentDataView.setUint8( 18, 0, true ); // channel map 0 = mono or stereo\n  this.segmentTableIndex = 1;\n  this.segmentDataIndex = this.segmentTable[0] = 19;\n  this.headerType = 2;\n  this.generatePage();\n};\n\nOggOpusEncoder.prototype.generatePage = function(){\n  var granulePosition = ( this.lastPositiveGranulePosition === this.granulePosition) ? -1 : this.granulePosition;\n  var pageBuffer = new ArrayBuffer(  27 + this.segmentTableIndex + this.segmentDataIndex );\n  var pageBufferView = new DataView( pageBuffer );\n  var page = new Uint8Array( pageBuffer );\n\n  pageBufferView.setUint32( 0, 1399285583, true); // Capture Pattern starts all page headers 'OggS'\n  pageBufferView.setUint8( 4, 0, true ); // Version\n  pageBufferView.setUint8( 5, this.headerType, true ); // 1 = continuation, 2 = beginning of stream, 4 = end of stream\n\n  // Number of samples upto and including this page at 48000Hz, into signed 64 bit Little Endian integer\n  // Javascript Number maximum value is 53 bits or 2^53 - 1 \n  pageBufferView.setUint32( 6, granulePosition, true );\n  if (granulePosition < 0) {\n    pageBufferView.setInt32( 10, Math.ceil(granulePosition/4294967297) - 1, true );\n  }\n  else {\n    pageBufferView.setInt32( 10, Math.floor(granulePosition/4294967296), true );\n  }\n\n  pageBufferView.setUint32( 14, this.config.serial, true ); // Bitstream serial number\n  pageBufferView.setUint32( 18, this.pageIndex++, true ); // Page sequence number\n  pageBufferView.setUint8( 26, this.segmentTableIndex, true ); // Number of segments in page.\n  page.set( this.segmentTable.subarray(0, this.segmentTableIndex), 27 ); // Segment Table\n  page.set( this.segmentData.subarray(0, this.segmentDataIndex), 27 + this.segmentTableIndex ); // Segment Data\n  pageBufferView.setUint32( 22, this.getChecksum( page ), true ); // Checksum\n\n  global['postMessage']( {message: 'page', page: page, samplePosition: this.granulePosition}, [page.buffer] );\n  this.segmentTableIndex = 0;\n  this.segmentDataIndex = 0;\n  this.framesInPage = 0;\n  if ( granulePosition > 0 ) {\n    this.lastPositiveGranulePosition = granulePosition;\n  }\n};\n\nOggOpusEncoder.prototype.initChecksumTable = function(){\n  this.checksumTable = [];\n  for ( var i = 0; i < 256; i++ ) {\n    var r = i << 24;\n    for ( var j = 0; j < 8; j++ ) {\n      r = ((r & 0x80000000) != 0) ? ((r << 1) ^ 0x04c11db7) : (r << 1);\n    }\n    this.checksumTable[i] = (r & 0xffffffff);\n  }\n};\n\nOggOpusEncoder.prototype.setOpusControl = function( control, value ){\n  var location = this._malloc( 4 );\n  this.HEAP32[ location >> 2 ] = value;\n  this._opus_encoder_ctl( this.encoder, control, location );\n  this._free( location );\n};\n\nOggOpusEncoder.prototype.initCodec = function() {\n  var errLocation = this._malloc( 4 );\n  this.encoder = this._opus_encoder_create( this.config.encoderSampleRate, this.config.numberOfChannels, this.config.encoderApplication, errLocation );\n  this._free( errLocation );\n\n  if ( this.config.encoderBitRate ) {\n    this.setOpusControl( 4002, this.config.encoderBitRate );\n  }\n\n  if ( this.config.encoderComplexity ) {\n    this.setOpusControl( 4010, this.config.encoderComplexity );\n  }\n\n  this.encoderSamplesPerChannel = this.config.encoderSampleRate * this.config.encoderFrameSize / 1000;\n  this.encoderSamplesPerChannelPointer = this._malloc( 4 );\n  this.HEAP32[ this.encoderSamplesPerChannelPointer >> 2 ] = this.encoderSamplesPerChannel;\n\n  this.encoderBufferLength = this.encoderSamplesPerChannel * this.config.numberOfChannels;\n  this.encoderBufferPointer = this._malloc( this.encoderBufferLength * 4 ); // 4 bytes per sample\n  this.encoderBuffer = this.HEAPF32.subarray( this.encoderBufferPointer >> 2, (this.encoderBufferPointer >> 2) + this.encoderBufferLength );\n\n  this.encoderOutputMaxLength = 4000;\n  this.encoderOutputPointer = this._malloc( this.encoderOutputMaxLength );\n  this.encoderOutputBuffer = this.HEAPU8.subarray( this.encoderOutputPointer, this.encoderOutputPointer + this.encoderOutputMaxLength );\n};\n\nOggOpusEncoder.prototype.initResampler = function() {\n  var errLocation = this._malloc( 4 );\n  this.resampler = this._speex_resampler_init( this.config.numberOfChannels, this.config.originalSampleRate, this.config.encoderSampleRate, this.config.resampleQuality, errLocation );\n  this._free( errLocation );\n\n  this.resampleBufferIndex = 0;\n  this.resampleSamplesPerChannel = this.config.originalSampleRate * this.config.encoderFrameSize / 1000;\n  this.resampleSamplesPerChannelPointer = this._malloc( 4 );\n  this.HEAP32[ this.resampleSamplesPerChannelPointer >> 2 ] = this.resampleSamplesPerChannel;\n\n  this.resampleBufferLength = this.resampleSamplesPerChannel * this.config.numberOfChannels;\n  this.resampleBufferPointer = this._malloc( this.resampleBufferLength * 4 ); // 4 bytes per sample\n  this.resampleBuffer = this.HEAPF32.subarray( this.resampleBufferPointer >> 2, (this.resampleBufferPointer >> 2) + this.resampleBufferLength );\n};\n\nOggOpusEncoder.prototype.interleave = function( buffers ) {\n  for ( var i = 0; i < this.config.bufferLength; i++ ) {\n    for ( var channel = 0; channel < this.config.numberOfChannels; channel++ ) {\n      this.interleavedBuffers[ i * this.config.numberOfChannels + channel ] = buffers[ channel ][ i ];\n    }\n  }\n\n  return this.interleavedBuffers;\n};\n\nOggOpusEncoder.prototype.segmentPacket = function( packetLength ) {\n  var packetIndex = 0;\n\n  while ( packetLength >= 0 ) {\n\n    if ( this.segmentTableIndex === 255 ) {\n      this.generatePage();\n      this.headerType = 1;\n    }\n\n    var segmentLength = Math.min( packetLength, 255 );\n    this.segmentTable[ this.segmentTableIndex++ ] = segmentLength;\n    this.segmentData.set( this.encoderOutputBuffer.subarray( packetIndex, packetIndex + segmentLength ), this.segmentDataIndex );\n    this.segmentDataIndex += segmentLength;\n    packetIndex += segmentLength;\n    packetLength -= 255;\n  }\n\n  this.granulePosition += ( 48 * this.config.encoderFrameSize );\n  if ( this.segmentTableIndex === 255 ) {\n    this.generatePage();\n    this.headerType = 0;\n  }\n};\n\n\nif (!Module) {\n  Module = {};\n}\n\nModule['mainReady'] = mainReady;\nModule['OggOpusEncoder'] = OggOpusEncoder;\nModule['onRuntimeInitialized'] = mainReadyResolve;\n\nmodule.exports = Module;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW5jb2Rlcldvcmtlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0VuY29kZXJXb3JrZXIvLi9zcmMvZW5jb2Rlcldvcmtlci5qcz84YjNjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZW5jb2RlcjtcbnZhciBtYWluUmVhZHlSZXNvbHZlO1xudmFyIG1haW5SZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpeyBtYWluUmVhZHlSZXNvbHZlID0gcmVzb2x2ZTsgfSk7XG5cbmdsb2JhbFsnb25tZXNzYWdlJ10gPSBmdW5jdGlvbiggZSApe1xuICBtYWluUmVhZHkudGhlbihmdW5jdGlvbigpe1xuICAgIHN3aXRjaCggZVsnZGF0YSddWydjb21tYW5kJ10gKXtcblxuICAgICAgY2FzZSAnZW5jb2RlJzpcbiAgICAgICAgaWYgKGVuY29kZXIpe1xuICAgICAgICAgIGVuY29kZXIuZW5jb2RlKCBlWydkYXRhJ11bJ2J1ZmZlcnMnXSApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdnZXRIZWFkZXJQYWdlcyc6XG4gICAgICAgIGlmIChlbmNvZGVyKXtcbiAgICAgICAgICBlbmNvZGVyLmdlbmVyYXRlSWRQYWdlKCk7XG4gICAgICAgICAgZW5jb2Rlci5nZW5lcmF0ZUNvbW1lbnRQYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RvbmUnOlxuICAgICAgICBpZiAoZW5jb2Rlcikge1xuICAgICAgICAgIGVuY29kZXIuZW5jb2RlRmluYWxGcmFtZSgpO1xuICAgICAgICAgIGdsb2JhbFsncG9zdE1lc3NhZ2UnXSgge21lc3NhZ2U6ICdkb25lJ30gKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICBnbG9iYWxbJ2Nsb3NlJ10oKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2ZsdXNoJzpcbiAgICAgICAgaWYgKGVuY29kZXIpIHtcbiAgICAgICAgICBlbmNvZGVyLmZsdXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICBpZiAoIGVuY29kZXIgKSB7XG4gICAgICAgICAgZW5jb2Rlci5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgZW5jb2RlciA9IG5ldyBPZ2dPcHVzRW5jb2RlciggZVsnZGF0YSddLCBNb2R1bGUgKTtcbiAgICAgICAgZ2xvYmFsWydwb3N0TWVzc2FnZSddKCB7bWVzc2FnZTogJ3JlYWR5J30gKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIElnbm9yZSBhbnkgdW5rbm93biBjb21tYW5kcyBhbmQgY29udGludWUgcmVjaWV2aW5nIGNvbW1hbmRzXG4gICAgfVxuICB9KTtcbn07XG5cblxudmFyIE9nZ09wdXNFbmNvZGVyID0gZnVuY3Rpb24oIGNvbmZpZywgTW9kdWxlICl7XG5cbiAgaWYgKCAhTW9kdWxlICkge1xuICAgIHRocm93IG5ldyBFcnJvcignTW9kdWxlIHdpdGggZXhwb3J0cyByZXF1aXJlZCB0byBpbml0aWFsaXplIGFuIGVuY29kZXIgaW5zdGFuY2UnKTtcbiAgfVxuXG4gIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7IFxuICAgIGJ1ZmZlckxlbmd0aDogNDA5NiwgLy8gRGVmaW5lIHNpemUgb2YgaW5jb21pbmcgYnVmZmVyXG4gICAgZW5jb2RlckFwcGxpY2F0aW9uOiAyMDQ5LCAvLyAyMDQ4ID0gVm9pY2UgKExvd2VyIGZpZGVsaXR5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMjA0OSA9IEZ1bGwgQmFuZCBBdWRpbyAoSGlnaGVzdCBmaWRlbGl0eSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIwNTEgPSBSZXN0cmljdGVkIExvdyBEZWxheSAoTG93ZXN0IGxhdGVuY3kpXG4gICAgZW5jb2RlckZyYW1lU2l6ZTogMjAsIC8vIFNwZWNpZmllZCBpbiBtcy5cbiAgICBlbmNvZGVyU2FtcGxlUmF0ZTogNDgwMDAsIC8vIERlc2lyZWQgZW5jb2Rpbmcgc2FtcGxlIHJhdGUuIEF1ZGlvIHdpbGwgYmUgcmVzYW1wbGVkXG4gICAgbWF4RnJhbWVzUGVyUGFnZTogNDAsIC8vIFRyYWRlb2ZmIGxhdGVuY3kgd2l0aCBvdmVyaGVhZFxuICAgIG51bWJlck9mQ2hhbm5lbHM6IDEsXG4gICAgb3JpZ2luYWxTYW1wbGVSYXRlOiA0NDEwMCxcbiAgICByZXNhbXBsZVF1YWxpdHk6IDMsIC8vIFZhbHVlIGJldHdlZW4gMCBhbmQgMTAgaW5jbHVzaXZlLiAxMCBiZWluZyBoaWdoZXN0IHF1YWxpdHkuXG4gICAgc2VyaWFsOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0Mjk0OTY3Mjk2KVxuICB9LCBjb25maWcgKTtcblxuICB0aGlzLl9vcHVzX2VuY29kZXJfY3JlYXRlID0gTW9kdWxlLl9vcHVzX2VuY29kZXJfY3JlYXRlO1xuICB0aGlzLl9vcHVzX2VuY29kZXJfZGVzdHJveSA9IE1vZHVsZS5fb3B1c19lbmNvZGVyX2Rlc3Ryb3k7XG4gIHRoaXMuX29wdXNfZW5jb2Rlcl9jdGwgPSBNb2R1bGUuX29wdXNfZW5jb2Rlcl9jdGw7XG4gIHRoaXMuX3NwZWV4X3Jlc2FtcGxlcl9wcm9jZXNzX2ludGVybGVhdmVkX2Zsb2F0ID0gTW9kdWxlLl9zcGVleF9yZXNhbXBsZXJfcHJvY2Vzc19pbnRlcmxlYXZlZF9mbG9hdDtcbiAgdGhpcy5fc3BlZXhfcmVzYW1wbGVyX2luaXQgPSBNb2R1bGUuX3NwZWV4X3Jlc2FtcGxlcl9pbml0O1xuICB0aGlzLl9zcGVleF9yZXNhbXBsZXJfZGVzdHJveSA9IE1vZHVsZS5fc3BlZXhfcmVzYW1wbGVyX2Rlc3Ryb3k7XG4gIHRoaXMuX29wdXNfZW5jb2RlX2Zsb2F0ID0gTW9kdWxlLl9vcHVzX2VuY29kZV9mbG9hdDtcbiAgdGhpcy5fZnJlZSA9IE1vZHVsZS5fZnJlZTtcbiAgdGhpcy5fbWFsbG9jID0gTW9kdWxlLl9tYWxsb2M7XG4gIHRoaXMuSEVBUFU4ID0gTW9kdWxlLkhFQVBVODtcbiAgdGhpcy5IRUFQMzIgPSBNb2R1bGUuSEVBUDMyO1xuICB0aGlzLkhFQVBGMzIgPSBNb2R1bGUuSEVBUEYzMjtcblxuICB0aGlzLnBhZ2VJbmRleCA9IDA7XG4gIHRoaXMuZ3JhbnVsZVBvc2l0aW9uID0gMDtcbiAgdGhpcy5zZWdtZW50RGF0YSA9IG5ldyBVaW50OEFycmF5KCA2NTAyNSApOyAvLyBNYXhpbXVtIGxlbmd0aCBvZiBvZ2dPcHVzIGRhdGFcbiAgdGhpcy5zZWdtZW50RGF0YUluZGV4ID0gMDtcbiAgdGhpcy5zZWdtZW50VGFibGUgPSBuZXcgVWludDhBcnJheSggMjU1ICk7IC8vIE1heGltdW0gZGF0YSBzZWdtZW50c1xuICB0aGlzLnNlZ21lbnRUYWJsZUluZGV4ID0gMDtcbiAgdGhpcy5mcmFtZXNJblBhZ2UgPSAwO1xuXG4gIHRoaXMuaW5pdENoZWNrc3VtVGFibGUoKTtcbiAgdGhpcy5pbml0Q29kZWMoKTtcbiAgdGhpcy5pbml0UmVzYW1wbGVyKCk7XG5cbiAgaWYgKCB0aGlzLmNvbmZpZy5udW1iZXJPZkNoYW5uZWxzID09PSAxICkge1xuICAgIHRoaXMuaW50ZXJsZWF2ZSA9IGZ1bmN0aW9uKCBidWZmZXJzICkgeyByZXR1cm4gYnVmZmVyc1swXTsgfTtcbiAgfVxuICBlbHNlIHtcbiAgICB0aGlzLmludGVybGVhdmVkQnVmZmVycyA9IG5ldyBGbG9hdDMyQXJyYXkoIHRoaXMuY29uZmlnLmJ1ZmZlckxlbmd0aCAqIHRoaXMuY29uZmlnLm51bWJlck9mQ2hhbm5lbHMgKTtcbiAgfVxuXG59O1xuXG5PZ2dPcHVzRW5jb2Rlci5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24oIGJ1ZmZlcnMgKSB7XG4gIHZhciBzYW1wbGVzID0gdGhpcy5pbnRlcmxlYXZlKCBidWZmZXJzICk7XG4gIHZhciBzYW1wbGVJbmRleCA9IDA7XG5cbiAgd2hpbGUgKCBzYW1wbGVJbmRleCA8IHNhbXBsZXMubGVuZ3RoICkge1xuXG4gICAgdmFyIGxlbmd0aFRvQ29weSA9IE1hdGgubWluKCB0aGlzLnJlc2FtcGxlQnVmZmVyTGVuZ3RoIC0gdGhpcy5yZXNhbXBsZUJ1ZmZlckluZGV4LCBzYW1wbGVzLmxlbmd0aCAtIHNhbXBsZUluZGV4ICk7XG4gICAgdGhpcy5yZXNhbXBsZUJ1ZmZlci5zZXQoIHNhbXBsZXMuc3ViYXJyYXkoIHNhbXBsZUluZGV4LCBzYW1wbGVJbmRleCtsZW5ndGhUb0NvcHkgKSwgdGhpcy5yZXNhbXBsZUJ1ZmZlckluZGV4ICk7XG4gICAgc2FtcGxlSW5kZXggKz0gbGVuZ3RoVG9Db3B5O1xuICAgIHRoaXMucmVzYW1wbGVCdWZmZXJJbmRleCArPSBsZW5ndGhUb0NvcHk7XG5cbiAgICBpZiAoIHRoaXMucmVzYW1wbGVCdWZmZXJJbmRleCA9PT0gdGhpcy5yZXNhbXBsZUJ1ZmZlckxlbmd0aCApIHtcbiAgICAgIHRoaXMuX3NwZWV4X3Jlc2FtcGxlcl9wcm9jZXNzX2ludGVybGVhdmVkX2Zsb2F0KCB0aGlzLnJlc2FtcGxlciwgdGhpcy5yZXNhbXBsZUJ1ZmZlclBvaW50ZXIsIHRoaXMucmVzYW1wbGVTYW1wbGVzUGVyQ2hhbm5lbFBvaW50ZXIsIHRoaXMuZW5jb2RlckJ1ZmZlclBvaW50ZXIsIHRoaXMuZW5jb2RlclNhbXBsZXNQZXJDaGFubmVsUG9pbnRlciApO1xuICAgICAgdmFyIHBhY2tldExlbmd0aCA9IHRoaXMuX29wdXNfZW5jb2RlX2Zsb2F0KCB0aGlzLmVuY29kZXIsIHRoaXMuZW5jb2RlckJ1ZmZlclBvaW50ZXIsIHRoaXMuZW5jb2RlclNhbXBsZXNQZXJDaGFubmVsLCB0aGlzLmVuY29kZXJPdXRwdXRQb2ludGVyLCB0aGlzLmVuY29kZXJPdXRwdXRNYXhMZW5ndGggKTtcbiAgICAgIHRoaXMuc2VnbWVudFBhY2tldCggcGFja2V0TGVuZ3RoICk7XG4gICAgICB0aGlzLnJlc2FtcGxlQnVmZmVySW5kZXggPSAwO1xuXG4gICAgICB0aGlzLmZyYW1lc0luUGFnZSsrO1xuICAgICAgaWYgKCB0aGlzLmZyYW1lc0luUGFnZSA+PSB0aGlzLmNvbmZpZy5tYXhGcmFtZXNQZXJQYWdlICkge1xuICAgICAgICB0aGlzLmdlbmVyYXRlUGFnZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuT2dnT3B1c0VuY29kZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLmVuY29kZXIgKSB7XG4gICAgdGhpcy5fZnJlZSh0aGlzLmVuY29kZXJTYW1wbGVzUGVyQ2hhbm5lbFBvaW50ZXIpO1xuICAgIGRlbGV0ZSB0aGlzLmVuY29kZXJTYW1wbGVzUGVyQ2hhbm5lbFBvaW50ZXI7XG4gICAgdGhpcy5fZnJlZSh0aGlzLmVuY29kZXJCdWZmZXJQb2ludGVyKTtcbiAgICBkZWxldGUgdGhpcy5lbmNvZGVyQnVmZmVyUG9pbnRlcjtcbiAgICB0aGlzLl9mcmVlKHRoaXMuZW5jb2Rlck91dHB1dFBvaW50ZXIpO1xuICAgIGRlbGV0ZSB0aGlzLmVuY29kZXJPdXRwdXRQb2ludGVyO1xuICAgIHRoaXMuX2ZyZWUodGhpcy5yZXNhbXBsZVNhbXBsZXNQZXJDaGFubmVsUG9pbnRlcik7XG4gICAgZGVsZXRlIHRoaXMucmVzYW1wbGVTYW1wbGVzUGVyQ2hhbm5lbFBvaW50ZXI7XG4gICAgdGhpcy5fZnJlZSh0aGlzLnJlc2FtcGxlQnVmZmVyUG9pbnRlcik7XG4gICAgZGVsZXRlIHRoaXMucmVzYW1wbGVCdWZmZXJQb2ludGVyO1xuICAgIHRoaXMuX3NwZWV4X3Jlc2FtcGxlcl9kZXN0cm95KHRoaXMucmVzYW1wbGVyKTtcbiAgICBkZWxldGUgdGhpcy5yZXNhbXBsZXI7XG4gICAgdGhpcy5fb3B1c19lbmNvZGVyX2Rlc3Ryb3kodGhpcy5lbmNvZGVyKTtcbiAgICBkZWxldGUgdGhpcy5lbmNvZGVyO1xuICB9XG59O1xuXG5PZ2dPcHVzRW5jb2Rlci5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLmZyYW1lc0luUGFnZSApIHtcbiAgICB0aGlzLmdlbmVyYXRlUGFnZSgpO1xuICB9XG4gIC8vIGRpc2NhcmQgYW55IHBlbmRpbmcgZGF0YSBpbiByZXNhbXBsZSBidWZmZXIgKG9ubHkgYSBmZXcgbXMgd29ydGgpXG4gIHRoaXMucmVzYW1wbGVCdWZmZXJJbmRleCA9IDA7XG4gIGdsb2JhbFsncG9zdE1lc3NhZ2UnXSgge21lc3NhZ2U6ICdmbHVzaGVkJ30gKTtcbn07XG5cbk9nZ09wdXNFbmNvZGVyLnByb3RvdHlwZS5lbmNvZGVGaW5hbEZyYW1lID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5yZXNhbXBsZUJ1ZmZlckluZGV4ID4gMCApIHtcbiAgICB2YXIgZmluYWxGcmFtZUJ1ZmZlcnMgPSBbXTtcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbmZpZy5udW1iZXJPZkNoYW5uZWxzOyArK2kgKSB7XG4gICAgICBmaW5hbEZyYW1lQnVmZmVycy5wdXNoKCBuZXcgRmxvYXQzMkFycmF5KCB0aGlzLmNvbmZpZy5idWZmZXJMZW5ndGggLSAodGhpcy5yZXNhbXBsZUJ1ZmZlckluZGV4IC8gdGhpcy5jb25maWcubnVtYmVyT2ZDaGFubmVscykgKSk7XG4gICAgfVxuICAgIHRoaXMuZW5jb2RlKCBmaW5hbEZyYW1lQnVmZmVycyApO1xuICB9XG4gIHRoaXMuaGVhZGVyVHlwZSArPSA0O1xuICB0aGlzLmdlbmVyYXRlUGFnZSgpO1xufTtcblxuT2dnT3B1c0VuY29kZXIucHJvdG90eXBlLmdldENoZWNrc3VtID0gZnVuY3Rpb24oIGRhdGEgKXtcbiAgdmFyIGNoZWNrc3VtID0gMDtcbiAgZm9yICggdmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyApIHtcbiAgICBjaGVja3N1bSA9IChjaGVja3N1bSA8PCA4KSBeIHRoaXMuY2hlY2tzdW1UYWJsZVsgKChjaGVja3N1bT4+PjI0KSAmIDB4ZmYpIF4gZGF0YVtpXSBdO1xuICB9XG4gIHJldHVybiBjaGVja3N1bSA+Pj4gMDtcbn07XG5cbk9nZ09wdXNFbmNvZGVyLnByb3RvdHlwZS5nZW5lcmF0ZUNvbW1lbnRQYWdlID0gZnVuY3Rpb24oKXtcbiAgdmFyIHNlZ21lbnREYXRhVmlldyA9IG5ldyBEYXRhVmlldyggdGhpcy5zZWdtZW50RGF0YS5idWZmZXIgKTtcbiAgc2VnbWVudERhdGFWaWV3LnNldFVpbnQzMiggMCwgMTkzNzA3NjMwMywgdHJ1ZSApIC8vIE1hZ2ljIFNpZ25hdHVyZSAnT3B1cydcbiAgc2VnbWVudERhdGFWaWV3LnNldFVpbnQzMiggNCwgMTkzNjE1NDk2NCwgdHJ1ZSApIC8vIE1hZ2ljIFNpZ25hdHVyZSAnVGFncydcbiAgc2VnbWVudERhdGFWaWV3LnNldFVpbnQzMiggOCwgMTAsIHRydWUgKTsgLy8gVmVuZG9yIExlbmd0aFxuICBzZWdtZW50RGF0YVZpZXcuc2V0VWludDMyKCAxMiwgMTg2ODc4NDk3OCwgdHJ1ZSApOyAvLyBWZW5kb3IgbmFtZSAnUmVjbydcbiAgc2VnbWVudERhdGFWaWV3LnNldFVpbnQzMiggMTYsIDE5MTkyNDc0NzQsIHRydWUgKTsgLy8gVmVuZG9yIG5hbWUgJ3JkZXInXG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50MTYoIDIwLCAyMTMyMiwgdHJ1ZSApOyAvLyBWZW5kb3IgbmFtZSAnSlMnXG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50MzIoIDIyLCAwLCB0cnVlICk7IC8vIFVzZXIgQ29tbWVudCBMaXN0IExlbmd0aFxuICB0aGlzLnNlZ21lbnRUYWJsZUluZGV4ID0gMTtcbiAgdGhpcy5zZWdtZW50RGF0YUluZGV4ID0gdGhpcy5zZWdtZW50VGFibGVbMF0gPSAyNjtcbiAgdGhpcy5oZWFkZXJUeXBlID0gMDtcbiAgdGhpcy5nZW5lcmF0ZVBhZ2UoKTtcbn07XG5cbk9nZ09wdXNFbmNvZGVyLnByb3RvdHlwZS5nZW5lcmF0ZUlkUGFnZSA9IGZ1bmN0aW9uKCl7XG4gIHZhciBzZWdtZW50RGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoIHRoaXMuc2VnbWVudERhdGEuYnVmZmVyICk7XG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50MzIoIDAsIDE5MzcwNzYzMDMsIHRydWUgKSAvLyBNYWdpYyBTaWduYXR1cmUgJ09wdXMnXG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50MzIoIDQsIDE2ODQxMDQ1MjAsIHRydWUgKSAvLyBNYWdpYyBTaWduYXR1cmUgJ0hlYWQnXG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50OCggOCwgMSwgdHJ1ZSApOyAvLyBWZXJzaW9uXG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50OCggOSwgdGhpcy5jb25maWcubnVtYmVyT2ZDaGFubmVscywgdHJ1ZSApOyAvLyBDaGFubmVsIGNvdW50XG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50MTYoIDEwLCAzODQwLCB0cnVlICk7IC8vIHByZS1za2lwICg4MG1zKVxuICBzZWdtZW50RGF0YVZpZXcuc2V0VWludDMyKCAxMiwgdGhpcy5jb25maWcub3JpZ2luYWxTYW1wbGVSYXRlT3ZlcnJpZGUgfHwgdGhpcy5jb25maWcub3JpZ2luYWxTYW1wbGVSYXRlLCB0cnVlICk7IC8vIG9yaWdpbmFsIHNhbXBsZSByYXRlXG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50MTYoIDE2LCAwLCB0cnVlICk7IC8vIG91dHB1dCBnYWluXG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50OCggMTgsIDAsIHRydWUgKTsgLy8gY2hhbm5lbCBtYXAgMCA9IG1vbm8gb3Igc3RlcmVvXG4gIHRoaXMuc2VnbWVudFRhYmxlSW5kZXggPSAxO1xuICB0aGlzLnNlZ21lbnREYXRhSW5kZXggPSB0aGlzLnNlZ21lbnRUYWJsZVswXSA9IDE5O1xuICB0aGlzLmhlYWRlclR5cGUgPSAyO1xuICB0aGlzLmdlbmVyYXRlUGFnZSgpO1xufTtcblxuT2dnT3B1c0VuY29kZXIucHJvdG90eXBlLmdlbmVyYXRlUGFnZSA9IGZ1bmN0aW9uKCl7XG4gIHZhciBncmFudWxlUG9zaXRpb24gPSAoIHRoaXMubGFzdFBvc2l0aXZlR3JhbnVsZVBvc2l0aW9uID09PSB0aGlzLmdyYW51bGVQb3NpdGlvbikgPyAtMSA6IHRoaXMuZ3JhbnVsZVBvc2l0aW9uO1xuICB2YXIgcGFnZUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlciggIDI3ICsgdGhpcy5zZWdtZW50VGFibGVJbmRleCArIHRoaXMuc2VnbWVudERhdGFJbmRleCApO1xuICB2YXIgcGFnZUJ1ZmZlclZpZXcgPSBuZXcgRGF0YVZpZXcoIHBhZ2VCdWZmZXIgKTtcbiAgdmFyIHBhZ2UgPSBuZXcgVWludDhBcnJheSggcGFnZUJ1ZmZlciApO1xuXG4gIHBhZ2VCdWZmZXJWaWV3LnNldFVpbnQzMiggMCwgMTM5OTI4NTU4MywgdHJ1ZSk7IC8vIENhcHR1cmUgUGF0dGVybiBzdGFydHMgYWxsIHBhZ2UgaGVhZGVycyAnT2dnUydcbiAgcGFnZUJ1ZmZlclZpZXcuc2V0VWludDgoIDQsIDAsIHRydWUgKTsgLy8gVmVyc2lvblxuICBwYWdlQnVmZmVyVmlldy5zZXRVaW50OCggNSwgdGhpcy5oZWFkZXJUeXBlLCB0cnVlICk7IC8vIDEgPSBjb250aW51YXRpb24sIDIgPSBiZWdpbm5pbmcgb2Ygc3RyZWFtLCA0ID0gZW5kIG9mIHN0cmVhbVxuXG4gIC8vIE51bWJlciBvZiBzYW1wbGVzIHVwdG8gYW5kIGluY2x1ZGluZyB0aGlzIHBhZ2UgYXQgNDgwMDBIeiwgaW50byBzaWduZWQgNjQgYml0IExpdHRsZSBFbmRpYW4gaW50ZWdlclxuICAvLyBKYXZhc2NyaXB0IE51bWJlciBtYXhpbXVtIHZhbHVlIGlzIDUzIGJpdHMgb3IgMl41MyAtIDEgXG4gIHBhZ2VCdWZmZXJWaWV3LnNldFVpbnQzMiggNiwgZ3JhbnVsZVBvc2l0aW9uLCB0cnVlICk7XG4gIGlmIChncmFudWxlUG9zaXRpb24gPCAwKSB7XG4gICAgcGFnZUJ1ZmZlclZpZXcuc2V0SW50MzIoIDEwLCBNYXRoLmNlaWwoZ3JhbnVsZVBvc2l0aW9uLzQyOTQ5NjcyOTcpIC0gMSwgdHJ1ZSApO1xuICB9XG4gIGVsc2Uge1xuICAgIHBhZ2VCdWZmZXJWaWV3LnNldEludDMyKCAxMCwgTWF0aC5mbG9vcihncmFudWxlUG9zaXRpb24vNDI5NDk2NzI5NiksIHRydWUgKTtcbiAgfVxuXG4gIHBhZ2VCdWZmZXJWaWV3LnNldFVpbnQzMiggMTQsIHRoaXMuY29uZmlnLnNlcmlhbCwgdHJ1ZSApOyAvLyBCaXRzdHJlYW0gc2VyaWFsIG51bWJlclxuICBwYWdlQnVmZmVyVmlldy5zZXRVaW50MzIoIDE4LCB0aGlzLnBhZ2VJbmRleCsrLCB0cnVlICk7IC8vIFBhZ2Ugc2VxdWVuY2UgbnVtYmVyXG4gIHBhZ2VCdWZmZXJWaWV3LnNldFVpbnQ4KCAyNiwgdGhpcy5zZWdtZW50VGFibGVJbmRleCwgdHJ1ZSApOyAvLyBOdW1iZXIgb2Ygc2VnbWVudHMgaW4gcGFnZS5cbiAgcGFnZS5zZXQoIHRoaXMuc2VnbWVudFRhYmxlLnN1YmFycmF5KDAsIHRoaXMuc2VnbWVudFRhYmxlSW5kZXgpLCAyNyApOyAvLyBTZWdtZW50IFRhYmxlXG4gIHBhZ2Uuc2V0KCB0aGlzLnNlZ21lbnREYXRhLnN1YmFycmF5KDAsIHRoaXMuc2VnbWVudERhdGFJbmRleCksIDI3ICsgdGhpcy5zZWdtZW50VGFibGVJbmRleCApOyAvLyBTZWdtZW50IERhdGFcbiAgcGFnZUJ1ZmZlclZpZXcuc2V0VWludDMyKCAyMiwgdGhpcy5nZXRDaGVja3N1bSggcGFnZSApLCB0cnVlICk7IC8vIENoZWNrc3VtXG5cbiAgZ2xvYmFsWydwb3N0TWVzc2FnZSddKCB7bWVzc2FnZTogJ3BhZ2UnLCBwYWdlOiBwYWdlLCBzYW1wbGVQb3NpdGlvbjogdGhpcy5ncmFudWxlUG9zaXRpb259LCBbcGFnZS5idWZmZXJdICk7XG4gIHRoaXMuc2VnbWVudFRhYmxlSW5kZXggPSAwO1xuICB0aGlzLnNlZ21lbnREYXRhSW5kZXggPSAwO1xuICB0aGlzLmZyYW1lc0luUGFnZSA9IDA7XG4gIGlmICggZ3JhbnVsZVBvc2l0aW9uID4gMCApIHtcbiAgICB0aGlzLmxhc3RQb3NpdGl2ZUdyYW51bGVQb3NpdGlvbiA9IGdyYW51bGVQb3NpdGlvbjtcbiAgfVxufTtcblxuT2dnT3B1c0VuY29kZXIucHJvdG90eXBlLmluaXRDaGVja3N1bVRhYmxlID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5jaGVja3N1bVRhYmxlID0gW107XG4gIGZvciAoIHZhciBpID0gMDsgaSA8IDI1NjsgaSsrICkge1xuICAgIHZhciByID0gaSA8PCAyNDtcbiAgICBmb3IgKCB2YXIgaiA9IDA7IGogPCA4OyBqKysgKSB7XG4gICAgICByID0gKChyICYgMHg4MDAwMDAwMCkgIT0gMCkgPyAoKHIgPDwgMSkgXiAweDA0YzExZGI3KSA6IChyIDw8IDEpO1xuICAgIH1cbiAgICB0aGlzLmNoZWNrc3VtVGFibGVbaV0gPSAociAmIDB4ZmZmZmZmZmYpO1xuICB9XG59O1xuXG5PZ2dPcHVzRW5jb2Rlci5wcm90b3R5cGUuc2V0T3B1c0NvbnRyb2wgPSBmdW5jdGlvbiggY29udHJvbCwgdmFsdWUgKXtcbiAgdmFyIGxvY2F0aW9uID0gdGhpcy5fbWFsbG9jKCA0ICk7XG4gIHRoaXMuSEVBUDMyWyBsb2NhdGlvbiA+PiAyIF0gPSB2YWx1ZTtcbiAgdGhpcy5fb3B1c19lbmNvZGVyX2N0bCggdGhpcy5lbmNvZGVyLCBjb250cm9sLCBsb2NhdGlvbiApO1xuICB0aGlzLl9mcmVlKCBsb2NhdGlvbiApO1xufTtcblxuT2dnT3B1c0VuY29kZXIucHJvdG90eXBlLmluaXRDb2RlYyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZXJyTG9jYXRpb24gPSB0aGlzLl9tYWxsb2MoIDQgKTtcbiAgdGhpcy5lbmNvZGVyID0gdGhpcy5fb3B1c19lbmNvZGVyX2NyZWF0ZSggdGhpcy5jb25maWcuZW5jb2RlclNhbXBsZVJhdGUsIHRoaXMuY29uZmlnLm51bWJlck9mQ2hhbm5lbHMsIHRoaXMuY29uZmlnLmVuY29kZXJBcHBsaWNhdGlvbiwgZXJyTG9jYXRpb24gKTtcbiAgdGhpcy5fZnJlZSggZXJyTG9jYXRpb24gKTtcblxuICBpZiAoIHRoaXMuY29uZmlnLmVuY29kZXJCaXRSYXRlICkge1xuICAgIHRoaXMuc2V0T3B1c0NvbnRyb2woIDQwMDIsIHRoaXMuY29uZmlnLmVuY29kZXJCaXRSYXRlICk7XG4gIH1cblxuICBpZiAoIHRoaXMuY29uZmlnLmVuY29kZXJDb21wbGV4aXR5ICkge1xuICAgIHRoaXMuc2V0T3B1c0NvbnRyb2woIDQwMTAsIHRoaXMuY29uZmlnLmVuY29kZXJDb21wbGV4aXR5ICk7XG4gIH1cblxuICB0aGlzLmVuY29kZXJTYW1wbGVzUGVyQ2hhbm5lbCA9IHRoaXMuY29uZmlnLmVuY29kZXJTYW1wbGVSYXRlICogdGhpcy5jb25maWcuZW5jb2RlckZyYW1lU2l6ZSAvIDEwMDA7XG4gIHRoaXMuZW5jb2RlclNhbXBsZXNQZXJDaGFubmVsUG9pbnRlciA9IHRoaXMuX21hbGxvYyggNCApO1xuICB0aGlzLkhFQVAzMlsgdGhpcy5lbmNvZGVyU2FtcGxlc1BlckNoYW5uZWxQb2ludGVyID4+IDIgXSA9IHRoaXMuZW5jb2RlclNhbXBsZXNQZXJDaGFubmVsO1xuXG4gIHRoaXMuZW5jb2RlckJ1ZmZlckxlbmd0aCA9IHRoaXMuZW5jb2RlclNhbXBsZXNQZXJDaGFubmVsICogdGhpcy5jb25maWcubnVtYmVyT2ZDaGFubmVscztcbiAgdGhpcy5lbmNvZGVyQnVmZmVyUG9pbnRlciA9IHRoaXMuX21hbGxvYyggdGhpcy5lbmNvZGVyQnVmZmVyTGVuZ3RoICogNCApOyAvLyA0IGJ5dGVzIHBlciBzYW1wbGVcbiAgdGhpcy5lbmNvZGVyQnVmZmVyID0gdGhpcy5IRUFQRjMyLnN1YmFycmF5KCB0aGlzLmVuY29kZXJCdWZmZXJQb2ludGVyID4+IDIsICh0aGlzLmVuY29kZXJCdWZmZXJQb2ludGVyID4+IDIpICsgdGhpcy5lbmNvZGVyQnVmZmVyTGVuZ3RoICk7XG5cbiAgdGhpcy5lbmNvZGVyT3V0cHV0TWF4TGVuZ3RoID0gNDAwMDtcbiAgdGhpcy5lbmNvZGVyT3V0cHV0UG9pbnRlciA9IHRoaXMuX21hbGxvYyggdGhpcy5lbmNvZGVyT3V0cHV0TWF4TGVuZ3RoICk7XG4gIHRoaXMuZW5jb2Rlck91dHB1dEJ1ZmZlciA9IHRoaXMuSEVBUFU4LnN1YmFycmF5KCB0aGlzLmVuY29kZXJPdXRwdXRQb2ludGVyLCB0aGlzLmVuY29kZXJPdXRwdXRQb2ludGVyICsgdGhpcy5lbmNvZGVyT3V0cHV0TWF4TGVuZ3RoICk7XG59O1xuXG5PZ2dPcHVzRW5jb2Rlci5wcm90b3R5cGUuaW5pdFJlc2FtcGxlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZXJyTG9jYXRpb24gPSB0aGlzLl9tYWxsb2MoIDQgKTtcbiAgdGhpcy5yZXNhbXBsZXIgPSB0aGlzLl9zcGVleF9yZXNhbXBsZXJfaW5pdCggdGhpcy5jb25maWcubnVtYmVyT2ZDaGFubmVscywgdGhpcy5jb25maWcub3JpZ2luYWxTYW1wbGVSYXRlLCB0aGlzLmNvbmZpZy5lbmNvZGVyU2FtcGxlUmF0ZSwgdGhpcy5jb25maWcucmVzYW1wbGVRdWFsaXR5LCBlcnJMb2NhdGlvbiApO1xuICB0aGlzLl9mcmVlKCBlcnJMb2NhdGlvbiApO1xuXG4gIHRoaXMucmVzYW1wbGVCdWZmZXJJbmRleCA9IDA7XG4gIHRoaXMucmVzYW1wbGVTYW1wbGVzUGVyQ2hhbm5lbCA9IHRoaXMuY29uZmlnLm9yaWdpbmFsU2FtcGxlUmF0ZSAqIHRoaXMuY29uZmlnLmVuY29kZXJGcmFtZVNpemUgLyAxMDAwO1xuICB0aGlzLnJlc2FtcGxlU2FtcGxlc1BlckNoYW5uZWxQb2ludGVyID0gdGhpcy5fbWFsbG9jKCA0ICk7XG4gIHRoaXMuSEVBUDMyWyB0aGlzLnJlc2FtcGxlU2FtcGxlc1BlckNoYW5uZWxQb2ludGVyID4+IDIgXSA9IHRoaXMucmVzYW1wbGVTYW1wbGVzUGVyQ2hhbm5lbDtcblxuICB0aGlzLnJlc2FtcGxlQnVmZmVyTGVuZ3RoID0gdGhpcy5yZXNhbXBsZVNhbXBsZXNQZXJDaGFubmVsICogdGhpcy5jb25maWcubnVtYmVyT2ZDaGFubmVscztcbiAgdGhpcy5yZXNhbXBsZUJ1ZmZlclBvaW50ZXIgPSB0aGlzLl9tYWxsb2MoIHRoaXMucmVzYW1wbGVCdWZmZXJMZW5ndGggKiA0ICk7IC8vIDQgYnl0ZXMgcGVyIHNhbXBsZVxuICB0aGlzLnJlc2FtcGxlQnVmZmVyID0gdGhpcy5IRUFQRjMyLnN1YmFycmF5KCB0aGlzLnJlc2FtcGxlQnVmZmVyUG9pbnRlciA+PiAyLCAodGhpcy5yZXNhbXBsZUJ1ZmZlclBvaW50ZXIgPj4gMikgKyB0aGlzLnJlc2FtcGxlQnVmZmVyTGVuZ3RoICk7XG59O1xuXG5PZ2dPcHVzRW5jb2Rlci5wcm90b3R5cGUuaW50ZXJsZWF2ZSA9IGZ1bmN0aW9uKCBidWZmZXJzICkge1xuICBmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbmZpZy5idWZmZXJMZW5ndGg7IGkrKyApIHtcbiAgICBmb3IgKCB2YXIgY2hhbm5lbCA9IDA7IGNoYW5uZWwgPCB0aGlzLmNvbmZpZy5udW1iZXJPZkNoYW5uZWxzOyBjaGFubmVsKysgKSB7XG4gICAgICB0aGlzLmludGVybGVhdmVkQnVmZmVyc1sgaSAqIHRoaXMuY29uZmlnLm51bWJlck9mQ2hhbm5lbHMgKyBjaGFubmVsIF0gPSBidWZmZXJzWyBjaGFubmVsIF1bIGkgXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5pbnRlcmxlYXZlZEJ1ZmZlcnM7XG59O1xuXG5PZ2dPcHVzRW5jb2Rlci5wcm90b3R5cGUuc2VnbWVudFBhY2tldCA9IGZ1bmN0aW9uKCBwYWNrZXRMZW5ndGggKSB7XG4gIHZhciBwYWNrZXRJbmRleCA9IDA7XG5cbiAgd2hpbGUgKCBwYWNrZXRMZW5ndGggPj0gMCApIHtcblxuICAgIGlmICggdGhpcy5zZWdtZW50VGFibGVJbmRleCA9PT0gMjU1ICkge1xuICAgICAgdGhpcy5nZW5lcmF0ZVBhZ2UoKTtcbiAgICAgIHRoaXMuaGVhZGVyVHlwZSA9IDE7XG4gICAgfVxuXG4gICAgdmFyIHNlZ21lbnRMZW5ndGggPSBNYXRoLm1pbiggcGFja2V0TGVuZ3RoLCAyNTUgKTtcbiAgICB0aGlzLnNlZ21lbnRUYWJsZVsgdGhpcy5zZWdtZW50VGFibGVJbmRleCsrIF0gPSBzZWdtZW50TGVuZ3RoO1xuICAgIHRoaXMuc2VnbWVudERhdGEuc2V0KCB0aGlzLmVuY29kZXJPdXRwdXRCdWZmZXIuc3ViYXJyYXkoIHBhY2tldEluZGV4LCBwYWNrZXRJbmRleCArIHNlZ21lbnRMZW5ndGggKSwgdGhpcy5zZWdtZW50RGF0YUluZGV4ICk7XG4gICAgdGhpcy5zZWdtZW50RGF0YUluZGV4ICs9IHNlZ21lbnRMZW5ndGg7XG4gICAgcGFja2V0SW5kZXggKz0gc2VnbWVudExlbmd0aDtcbiAgICBwYWNrZXRMZW5ndGggLT0gMjU1O1xuICB9XG5cbiAgdGhpcy5ncmFudWxlUG9zaXRpb24gKz0gKCA0OCAqIHRoaXMuY29uZmlnLmVuY29kZXJGcmFtZVNpemUgKTtcbiAgaWYgKCB0aGlzLnNlZ21lbnRUYWJsZUluZGV4ID09PSAyNTUgKSB7XG4gICAgdGhpcy5nZW5lcmF0ZVBhZ2UoKTtcbiAgICB0aGlzLmhlYWRlclR5cGUgPSAwO1xuICB9XG59O1xuXG5cbmlmICghTW9kdWxlKSB7XG4gIE1vZHVsZSA9IHt9O1xufVxuXG5Nb2R1bGVbJ21haW5SZWFkeSddID0gbWFpblJlYWR5O1xuTW9kdWxlWydPZ2dPcHVzRW5jb2RlciddID0gT2dnT3B1c0VuY29kZXI7XG5Nb2R1bGVbJ29uUnVudGltZUluaXRpYWxpemVkJ10gPSBtYWluUmVhZHlSZXNvbHZlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZHVsZTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/encoderWorker.js\n");

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
  'initial': 16,
  'maximum': 16,
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
    STACK_BASE = 46720,
    STACKTOP = STACK_BASE,
    STACK_MAX = 5289600,
    DYNAMIC_BASE = 5289600,
    DYNAMICTOP_PTR = 46512;




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




var wasmBinaryFile = 'encoderWorker.wasm';
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





// STATICTOP = STATIC_BASE + 45696;
/* global initializers */ /*__ATINIT__.push();*/








/* no memory initializer */
var tempDoublePtr = 46704

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

  
  function _llvm_exp2_f32(x) {
      return Math.pow(2, x);
    }function _llvm_exp2_f64(a0
  ) {
  return _llvm_exp2_f32(a0);
  }

  
  function _llvm_log10_f32(x) {
      return Math.log(x) / Math.LN10; // TODO: Math.log10, when browser support is there
    }function _llvm_log10_f64(a0
  ) {
  return _llvm_log10_f32(a0);
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

var asmLibraryArg = { "___wasi_fd_close": ___wasi_fd_close, "___wasi_fd_seek": ___wasi_fd_seek, "___wasi_fd_write": ___wasi_fd_write, "__memory_base": 1024, "__table_base": 0, "_abort": _abort, "_emscripten_get_heap_size": _emscripten_get_heap_size, "_emscripten_memcpy_big": _emscripten_memcpy_big, "_emscripten_resize_heap": _emscripten_resize_heap, "_fd_close": _fd_close, "_fd_seek": _fd_seek, "_fd_write": _fd_write, "_llvm_exp2_f32": _llvm_exp2_f32, "_llvm_exp2_f64": _llvm_exp2_f64, "_llvm_log10_f32": _llvm_log10_f32, "_llvm_log10_f64": _llvm_log10_f64, "_llvm_stackrestore": _llvm_stackrestore, "_llvm_stacksave": _llvm_stacksave, "abort": abort, "abortOnCannotGrowMemory": abortOnCannotGrowMemory, "demangle": demangle, "demangleAll": demangleAll, "flush_NO_FILESYSTEM": flush_NO_FILESYSTEM, "getTempRet0": getTempRet0, "jsStackTrace": jsStackTrace, "memory": wasmMemory, "setTempRet0": setTempRet0, "stackTrace": stackTrace, "table": wasmTable, "tempDoublePtr": tempDoublePtr };
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

var _opus_encode_float = Module["_opus_encode_float"] = function() {
  return Module["asm"]["_opus_encode_float"].apply(null, arguments)
};

var _opus_encoder_create = Module["_opus_encoder_create"] = function() {
  return Module["asm"]["_opus_encoder_create"].apply(null, arguments)
};

var _opus_encoder_ctl = Module["_opus_encoder_ctl"] = function() {
  return Module["asm"]["_opus_encoder_ctl"].apply(null, arguments)
};

var _opus_encoder_destroy = Module["_opus_encoder_destroy"] = function() {
  return Module["asm"]["_opus_encoder_destroy"].apply(null, arguments)
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

var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = function() {
  return Module["asm"]["dynCall_viiiiiii"].apply(null, arguments)
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




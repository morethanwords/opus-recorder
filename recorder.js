var Recorder = function(source, config){

  var context = source.context,
    isRecording = false,
    node,
    worker,
    currCallback;

  config = config || {};
  config.bufferLen = config.bufferLen || 4096;
  config.workerPath = config.workerPath || 'recorderWorker.js';
  config.type = config.type || 'audio/wav';

  this.isRecording = function(){
    return isRecording;
  };

  this.record = function(){
    isRecording = true;
  };

  this.stop = function(){
    isRecording = false;
  };

  this.clear = function(){
    worker.postMessage({ command: 'clear' });
  };

  this.getBuffer = function(cb) {
    currCallback = cb || config.callback;
    worker.postMessage({ command: 'getBuffer' })
  };

  this.exportWAV = function(cb, type){
    currCallback = cb || config.callback;
    if (!currCallback) throw new Error('Callback not set');
    worker.postMessage({
      command: 'exportWAV',
      type: config.type
    });
  };

  context.createScriptProcessor = context.createScriptProcessor || context.createJavaScriptNode;
  node = context.createScriptProcessor(config.bufferLen, 2, 2);
  worker = new Worker(config.workerPath);
  worker.postMessage({
    command: 'init',
    config: { sampleRate: context.sampleRate }
  });

  node.onaudioprocess = function(e){
    if (isRecording) {
      worker.postMessage({
        command: 'record',
        buffer: [
          e.inputBuffer.getChannelData(0),
          e.inputBuffer.getChannelData(1)
        ]
      });
    }
  };

  worker.onmessage = function(e){
    currCallback( e.data );
  };

  source.connect(node);
  node.connect(context.destination);    //this should not be necessary
};

Recorder.forceDownload = function(blob, filename){
  var url = (URL || webkitURL).createObjectURL(blob);
  var link = document.createElement('a');
  link.href = url;
  link.download = filename || 'output.wav';
  var click = document.createEvent("Event");
  click.initEvent("click", true, true);
  link.dispatchEvent(click);
};

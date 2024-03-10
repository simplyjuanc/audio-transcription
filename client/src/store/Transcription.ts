

const TranscriptionStore = {
  transcription: '',
};

const proxiedStore = new Proxy(TranscriptionStore, {
  get: (target, property: 'transcription') => {
    return target[property];
  },
  set: (target, property: 'transcription', value: string) => {
    target[property] = value;
    window.dispatchEvent(new Event('transcriptchange'));
    return true;
  }
});

export default proxiedStore;
import { configureFileDrop as setupFileDrop } from './scripts/fileUpload';
import { configureTranscriptionBox as setupTranscriptionBox } from './scripts/transcription';
import Router from './services/router';
import TranscriptionStore from './store/Transcription';

declare global {
  interface Window {
    app: {
      store: typeof TranscriptionStore
    }
  }
}

window.app = {
  store: TranscriptionStore,
};


document.addEventListener('DOMContentLoaded', () => {
  Router.init();

  setupFileDrop();
  setupTranscriptionBox();

});



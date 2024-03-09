import { configureFileDrop } from './scripts/fileUpload';
import { configureTranscriptionBox } from './scripts/transcription';
import TranscriptionStore from './store/Transcription';

declare global {
  interface Window {
    app: {
      store: typeof TranscriptionStore
    }
  }
}


window.app = { store: TranscriptionStore };

document.addEventListener('DOMContentLoaded', () => {
  configureFileDrop();
  configureTranscriptionBox();
});



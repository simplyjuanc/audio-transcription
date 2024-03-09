import { configureFileDrop } from './scripts/fileUpload';
import { configureTranscriptionBox } from './scripts/transcription';
import { TranscriptionStore } from './store/Transcription';

declare global {
  interface Window {
    app: {
      transcription: typeof TranscriptionStore
    }
  }
}


window.app = { transcription: TranscriptionStore };

document.addEventListener('DOMContentLoaded', () => {
  configureFileDrop();
  configureTranscriptionBox();
});



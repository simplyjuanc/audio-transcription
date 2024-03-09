import TranscriptionStore from '../store/Transcription';


/* 
Check if there's a transcript in store
if there isn't, do nothing
If there is, grab the text response and render it within the box

*/
function renderTranscription(container: HTMLElement, transcript: string) {
  container.innerHTML = '';
  const p = document.createElement('p');
  p.classList.add('transcription__text');
  p.textContent = transcript;
  container.appendChild(p);
}

export function configureTranscriptionBox() {
  const transcriptContainer = document.querySelector<HTMLElement>('.transcription__box');
  if (!transcriptContainer) return;

  window.addEventListener('transcriptchange', () => {
    const transcript = TranscriptionStore.transcription;
    if (transcript === '') return;
    renderTranscription(transcriptContainer, transcript);
  });
}

import TranscriptionStore from '../store/Transcription';


function renderTranscription(container: HTMLElement, transcript: string) {
  container.innerHTML = '';
  const p = document.createElement('p');
  p.classList.add('transcription__text');
  p.textContent = transcript;
  container.appendChild(p);
}


export function configureTranscriptionBox() {
  const transcriptContainer = document.querySelector<HTMLElement>('.transcription__box');
  const transcript = document.querySelector<HTMLParagraphElement>('.transcription__text');
  const copyBtn = document.querySelector<HTMLButtonElement>('.transcription__copy');
  if (!transcriptContainer || !transcript || !copyBtn) return;

  window.addEventListener('transcriptchange', () => {
    const newTranscript = TranscriptionStore.transcription;
    if (newTranscript === '') return;
    renderTranscription(transcriptContainer, newTranscript);
  });

  // addCopyEventListener(transcript, copyBtn);
  copyBtn.addEventListener('click', async () => {
    const text = window.app.store.transcription;
    if (!text) return;
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = 'Text copied!';
    setTimeout(() => {
      copyBtn.textContent = 'Copy text';
    }, 3000);
  });
}

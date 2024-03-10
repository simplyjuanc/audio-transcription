import { postFile } from '../services/apiClient';


function endDrag(dropZone: HTMLElement) {
  dropZone.classList.remove('form__drop-zone--active');
  dropZone.classList.add('form__drop-zone');
}


function handleDrop(e: DragEvent) {
  try {
    const file = e.dataTransfer?.files[0];
    if (!file) return;
    handleFileSelect(file);
  } catch (error) {
    console.error(error);
  }
}

function handleFileSelect(file: File) {
  if (!file.type.startsWith('audio') || file.size > 2e7) {
    throw new Error('File is not of right type or file size is too large');
  }
  previewAudioFile(file);
  handleUpload(file);
}


// TODO improve behaviour of filename rendering
function previewAudioFile(file: File) {
  const title = document.createElement('p');
  title.textContent = (file.name.length > 20) ?
    file.name.slice(0, 20) + '...' :
    file.name;
  title.classList.add('form__file-title--active');
  const dropZone = document.querySelector('.form__drop-zone');
  if (!dropZone) return;
  dropZone.innerHTML = '';
  dropZone.appendChild(title);
}

function handleUpload(file: File) {
  const form = document.querySelector<HTMLButtonElement>('.form');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const res = await postFile(file);
      if (!res) throw new Error('Error - transcript not returned');
      window.app.store.transcription = res.transcript;
    } catch (error) {
      alert(error);
    }
  });
}


export function configureFileDrop() {
  const dropZone = document.querySelector<HTMLElement>('.form__drop-zone');
  const input = document.querySelector<HTMLInputElement>('.form__file-input');
  if (!dropZone || !input) return;

  input.addEventListener('change', () => {
    const files = input.files;
    if (!files) return;
    handleFileSelect(files[0]);
  });

  ['dragover', 'drop', 'dragend', 'dragleave'].forEach(event => {
    dropZone.addEventListener(event, (e) => e.preventDefault());
  });

  dropZone.addEventListener('dragend', () => endDrag(dropZone));
  dropZone.addEventListener('dragleave', () => endDrag(dropZone));
  dropZone.addEventListener('dragover', () => {
    dropZone.classList.remove('form__drop-zone');
    dropZone.classList.add('form__drop-zone--active');
  });

  dropZone.addEventListener('drop', (e) => {
    endDrag(dropZone);
    handleDrop(e);
  });
  dropZone.addEventListener('click', () => input.click());
}

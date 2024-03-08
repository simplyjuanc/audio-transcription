import { postFile } from '../services/apiClient';


function endDrag(dropZone: HTMLElement) {
  dropZone.classList.remove('form__drop-zone--active');
  dropZone.classList.add('form__drop-zone');
}

// TODO improve behaviour of filename rendering
function previewAudioFile(file: File) {
  const title = document.createElement('p');
  title.textContent = file.name;
  document.querySelector('.form__drop-zone')?.appendChild(title);
}

function handleUpload(file: File) {
  const submitBtn = document.querySelector<HTMLButtonElement>('.form__submit');
  if (!submitBtn) return;
  submitBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    postFile(file);
    console.log('File uploaded!');
  });
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



export function configureFileDrop() {
  const dropZone = document.querySelector<HTMLElement>('.form__drop-zone');
  const input = document.querySelector<HTMLInputElement>('.form__file-input');
  if (!dropZone || !input) return;

  input.addEventListener('click', () => {
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

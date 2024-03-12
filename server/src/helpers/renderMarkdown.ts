import fs from 'fs';
import path from 'path';
import { render } from 'mustache';
import { VoiceNote } from '../@types';
import { stringifyDate } from './stringifyDate';


const templatePath = path.join(process.cwd(), 'templates');
if (!fs.existsSync(templatePath)) {
  fs.mkdirSync(templatePath);
}
const template = fs.readFileSync(path.join(templatePath, 'fleeting-note.md')).toString();


export function renderVoiceNoteMd(file: VoiceNote, date?: Date) {
  const mdDate = date ? stringifyDate(date) : stringifyDate(new Date());
  const fields = {
    date: mdDate,
    filename: file.filename,
    transcript: file.transcript,
  };
  return render(template, fields);
}


/* 
## Markdown Generator
1. Create MD template for fleeting note / voice note (copy from Obsidian).
2. Set up rendering functionality in server with Mustache
  - https://egghead.io/lessons/node-js-batch-create-markdown-files-from-a-template-with-node-js-and-mustache
3. Create MongoDB where transcript, MD generated, and metadata (date, link to audio) are generated.
4. Set up functinality to save:
  - MD in Obsidian vault: https://www.npmjs.com/search?q=dropbox
  - Audio file in GDrive: https://developers.google.com/drive/api/guides/manage-uploads#resumable
5. Display MD in UI
  - Add button to file upload page
  - Navigate to MD page with :id for the generated markdown
    - https://github.com/showdownjs/showdown
    - Work on setting up a retrieval functionality for 

*/
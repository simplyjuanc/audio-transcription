import { Schema, model } from 'mongoose';
import { VoiceNote } from '../@types';


const noteSchema = new Schema<VoiceNote>({
  filename: String,
  mimetype: String,
  path: String,
  originalname: String,
  transcript: String,
  markdown: { type: String, required: false },
});

const NoteModel = model<VoiceNote>('VoiceNote', noteSchema);

export { NoteModel };

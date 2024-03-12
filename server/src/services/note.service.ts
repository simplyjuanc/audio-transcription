import { VoiceNote } from '../@types';
import { NoteModel } from '../models/note.model';


export async function getNoteById(id: string) {
  try {
    const note = await NoteModel.findById(id);
    if (!note) throw new Error(`No note found for id: ${id}`);
  } catch (error) {
    console.log(error);
    return null;
  }
}



export async function createNote(note: VoiceNote) {
  try {
    const newNote = NoteModel.create(note);
    if (!newNote) throw new Error(`Unable to create entry for file: ${note.originalname}`);
    return newNote;
  } catch (error) {
    console.log(error);
    return null;
  }
}
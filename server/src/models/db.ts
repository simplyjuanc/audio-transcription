import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { NoteModel } from './note.model';
dotenv.config();




(async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('📚 Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
})();



export const DB = {
  NoteModel
};


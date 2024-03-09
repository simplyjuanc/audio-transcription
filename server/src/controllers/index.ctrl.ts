
import { Request, Response } from 'express';
import { transcribeVideo } from '../services/OpenAiClient';



export async function postTranscribe(req: Request, res: Response) {
  try {
    if (!req.file?.filename) throw new Error('Unable to upload file');
    const transcript = await transcribeVideo(req.file.path);
    res.status(200).json({ transcript });
  } catch (error) {
    res.status(500).send(error);
  }
}

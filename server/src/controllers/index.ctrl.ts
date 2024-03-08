
import { Request, Response } from 'express';
// import { transcribeVideo, generateCaption, generateThumbnail } from '../services/OpenAiClient';



export async function postTranscribe(req: Request, res: Response) {
  console.log(req.body);
  res.send({ success: 'success' });

  // try {
  //   if (!req.file?.filename) throw new Error('Unable to upload file');

  //   console.log(req.headers)
  //   const transcript = await transcribeVideo(req.file.path);

  //   const completion = await generateCaption(transcript);
  //   const caption = completion.choices[0].message.content;

  //   if (!caption) throw new Error('Unable to generate caption');
  //   const thumbnail = await generateThumbnail(caption);

  //   res.status(201).json({ transcript, caption, thumbnail });

  // } catch (error) {
  //   res.status(500).send(error);
  // }
}

// export async function postCaption(req: Request, res: Response) { }
// export async function postThumbnail(req: Request, res: Response) { }
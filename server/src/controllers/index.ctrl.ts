import { Request, Response } from 'express';
// import { ProcessedFile } from '../@types';
// import { renderVoiceNoteMd } from '../services/renderMarkdown';
// import { transcribeVideo } from '../services/OpenAiClient';



export async function postTranscribe(req: Request, res: Response) {
  try {
    const uploadFile = req.file;
    if (!uploadFile) throw new Error('Unable to upload file');
    // const transcript = await transcribeVideo(uploadFile);
    const transcript = 'await transcribeVideo(path)';
    // const transcribedFile: ProcessedFile = {
    //   date: new Date(),
    //   transcript,
    //   ...uploadFile
    // };
    // const md = renderVoiceNoteMd(transcribedFile);


    res.status(201).json({ transcript });
  } catch (error) {
    res.status(500).send(error);
  }
}


export async function postMarkdown(req: Request, res: Response) {
  try {
    const { id }: { id: string } = req.body;
    if (!id) throw new Error('No file id received');

    res.status(201).send({ id });
  } catch (error) {
    res.status(500).send(error);
  }
}






export async function getMarkdown(req: Request, res: Response) {
  try {
    console.log('pending');
  } catch (error) {
    res.status(500).send(error);
  }

}
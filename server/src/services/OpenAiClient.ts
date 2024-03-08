import dotenv from 'dotenv';
import fs from 'fs';
import OpenAI from 'openai';
dotenv.config();

const openAi = new OpenAI();


export async function transcribeVideo(filename: string) {
  const transcription = await openAi.audio.transcriptions.create({
    file: fs.createReadStream(filename),
    model: 'whisper-1',
  });

  return transcription.text;
}

export async function generateCaption(transcript: string) {
  const completion = await openAi.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: 'Use 20 tokens or less to write a caption for the video.'
      },
      {
        role: 'user',
        content: `You are a helpful AI Prompt Engineer. Your task is to write a caption that will be used to post a video on social media. Your input  is the following transcript of said video. ${transcript}`
      },
    ],
    model: 'gpt-3.5-turbo',
    max_tokens: 20,
  });

  return completion;
}

export async function generateThumbnail(caption: string) {
  const image = await openAi.images.generate({
    model: 'dall-e-2',
    size: '256x256',
    prompt: `Create a thumbnail for a video that has the following social media caption: ${caption}. You cannot use any text or words in the thumbnail under any circumstances.`,
  });

  return image;
}


generateThumbnail('Unleashing the Power of Books: A Journey Through Deep Thoughts and Self-Transformation');
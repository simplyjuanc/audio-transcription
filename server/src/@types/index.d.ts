


declare global {
  namespace NodeJS {
    interface ProcessEnv {
      OPENAI_API_KEY: string
      DB_URL: string
    }
  }
}



export type VoiceNote = {
  transcript?: string
  markdown?: string
} & Pick<
  Express.Multer.File,
  'buffer' | 'path' | 'filename' | 'originalname' | 'size' | 'destination' | 'mimetype'
>


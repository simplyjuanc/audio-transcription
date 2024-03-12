
export interface ProcessedFile extends Express.Multer.File {
  date: Date
  transcript: string
}

//& Pick<Express.Multer.File, 'buffer' | 'path' | 'filename' | 'originalname' | 'size' | 'destination'>



interface PersistentFile extends ProcessedFile {
  markdown: string
}
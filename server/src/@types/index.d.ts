
export type File = {
  date: Date
  transcript: string
} & Pick<Express.Multer.File, 'buffer' | 'path' | 'filename' | 'originalname' | 'size' | 'destination'>

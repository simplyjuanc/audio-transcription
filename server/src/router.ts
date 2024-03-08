import { Router } from 'express';
import multer from './services/multer';
import { postTranscribe } from './controllers/index.ctrl';
// import { postCaption, postThumbnail, postTranscribe } from './controllers/index.ctrl';


const router = Router();

router.post('/api/transcribe', multer.upload.single('audio'), postTranscribe);
// router.post('/api/caption', multer.upload.single('audio'), postCaption);
// router.post('/api/thumbnail', multer.upload.single('audio'), postThumbnail);


export default router;
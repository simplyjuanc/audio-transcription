import { Router } from 'express';
import multer from './services/multer';
import { getMarkdown, postMarkdown, postTranscribe } from './controllers/index.ctrl';
// import { postCaption, postThumbnail, postTranscribe } from './controllers/index.ctrl';


const router = Router();

router.post('/api/v1/transcribe', multer.upload.single('audio'), postTranscribe);
router.post('/api/v1/markdown', postMarkdown);
router.get('/api/v1/markdown', getMarkdown);
// router.post('/api/caption', multer.upload.single('audio'), postCaption);
// router.post('/api/thumbnail', multer.upload.single('audio'), postThumbnail);


export default router;
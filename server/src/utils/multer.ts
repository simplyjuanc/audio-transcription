import multer from 'multer';
import path from 'path';
import fs from 'fs';


const uploadPath = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}


const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
});

export default {
  upload: multer({ storage }),
};
import express from 'express';
import cors from 'cors';
import router from './router';


const app = express();

app.use(cors());
app.use(express.json());
app.use(router)


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
 
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './router.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/', router);

mongoose
  .connect(process.env.CONNECTON_URL_DEV)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server runnin on post ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
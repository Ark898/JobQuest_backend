import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: 'MERN_JOB_SEEKING_WEBAPP',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to database.');
    })
    .catch((err) => {
      console.log(`Some Error occurred. ${err}`);
    });
};

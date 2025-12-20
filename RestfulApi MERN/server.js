import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import userRoute from './routes/userRoute.js';
import connectDB from './config/db.js';
connectDB();
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use('/api/users', userRoute);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
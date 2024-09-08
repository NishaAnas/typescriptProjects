import express from 'express';
import { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import studentRoutes from './routes/studentRoutes';

const app: Application = express();
const port=3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/students', studentRoutes);

const mongoURI = 'mongodb://127.0.0.1:27017/studentdb'; // Local MongoDB URI

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.listen(port,()=>{
    console.log(`listining to port ${port}`);
})
import express from 'express';
import { Application } from 'express';
//import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes';

const app: Application = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/students', studentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

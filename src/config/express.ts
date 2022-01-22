import express from 'express';
import 'dotenv/config'
import morgan from 'morgan';
import cors from 'cors';

import authenticate from '/middlewares/authenticate';
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(morgan('dev'));

app.use(authenticate);

export default app;
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import dotenv from 'dotenv';
import publicRouter from './router/public.router';
import privateRouter from './router/private.router';
dotenv.config();
mongoose.connect('mongodb://localhost:27017/paysgate', { useNewUrlParser: true, useUnifiedTopology: true } as any);

const app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use('/api', privateRouter)
app.listen(3000, async () => { console.log(`Server started on port 8888`); })
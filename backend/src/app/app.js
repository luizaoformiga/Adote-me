import express from 'express';
import cors from 'cors';
import path from 'path';
import socketio from '../middlewares/lib/socketio';
import { verifyToken } from '../middlewares/auth';
import database from '../database/mongo';
import router from './routes/router';

const app = express();

database.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(socketio);
app.use(verifyToken);
app.use(router);

export default app;

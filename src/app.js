import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { taskRouter } from './tasks/tasks.routes.js';
import { notFoundMiddleware } from './middlewares/not-found.middleware.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

export const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
}));

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    ok: true,
    message: 'Task API is running',
  });
});

app.use('/api/tasks', taskRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

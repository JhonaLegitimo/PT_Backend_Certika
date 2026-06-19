import { Router } from 'express';
import {
  completeTask,
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from './tasks.controller.js';
import { asyncHandler } from '../middlewares/async-handler.middleware.js';

export const taskRouter = Router();

taskRouter.get('/', asyncHandler(getTasks));
taskRouter.post('/', asyncHandler(createTask));
taskRouter.get('/:id', asyncHandler(getTaskById));
taskRouter.put('/:id', asyncHandler(updateTask));
taskRouter.patch('/:id/complete', asyncHandler(completeTask));
taskRouter.delete('/:id', asyncHandler(deleteTask));

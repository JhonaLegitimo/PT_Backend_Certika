import { BadRequestError, NotFoundError } from '../utils/errors.js';

const TASK_STATUS = {
  PENDING: 'pendiente',
  COMPLETED: 'completada',
};

let nextId = 1;
const tasks = [];

export function findTasks() {
  return tasks;
}

export function findTaskById(id) {
  const task = tasks.find((currentTask) => currentTask.id === Number(id));

  if (!task) {
    throw new NotFoundError('La tarea no existe.');
  }

  return task;
}

export function createTask(data) {
  const title = validateTitle(data?.title);

  const task = {
    id: nextId,
    title,
    status: TASK_STATUS.PENDING,
  };

  nextId += 1;
  tasks.push(task);

  return task;
}

export function updateTaskById(id, data) {
  const task = findTaskById(id);

  if (data?.title !== undefined) {
    task.title = validateTitle(data.title);
  }

  if (data?.status !== undefined) {
    task.status = validateStatus(data.status);
  }

  return task;
}

export function completeTaskById(id) {
  const task = findTaskById(id);
  task.status = TASK_STATUS.COMPLETED;

  return task;
}

export function deleteTaskById(id) {
  const taskIndex = tasks.findIndex((task) => task.id === Number(id));

  if (taskIndex === -1) {
    throw new NotFoundError('La tarea no existe.');
  }

  tasks.splice(taskIndex, 1);
}

function validateTitle(title) {
  if (typeof title !== 'string' || title.trim().length === 0) {
    throw new BadRequestError('El titulo es obligatorio.');
  }

  return title.trim();
}

function validateStatus(status) {
  const allowedStatuses = Object.values(TASK_STATUS);

  if (!allowedStatuses.includes(status)) {
    throw new BadRequestError('El estado debe ser pendiente o completada.');
  }

  return status;
}

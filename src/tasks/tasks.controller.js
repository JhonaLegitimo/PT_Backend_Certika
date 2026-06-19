import {
  completeTaskById,
  createTask as createTaskService,
  deleteTaskById,
  findTaskById,
  findTasks,
  updateTaskById,
} from './tasks.service.js';

export async function getTasks(req, res) {
  const tasks = findTasks();

  res.json({
    data: tasks,
  });
}

export async function createTask(req, res) {
  const task = createTaskService(req.body);

  res.status(201).json({
    data: task,
  });
}

export async function getTaskById(req, res) {
  const task = findTaskById(req.params.id);

  res.json({
    data: task,
  });
}

export async function updateTask(req, res) {
  const task = updateTaskById(req.params.id, req.body);

  res.json({
    data: task,
  });
}

export async function completeTask(req, res) {
  const task = completeTaskById(req.params.id);

  res.json({
    data: task,
  });
}

export async function deleteTask(req, res) {
  deleteTaskById(req.params.id);

  res.status(204).send();
}

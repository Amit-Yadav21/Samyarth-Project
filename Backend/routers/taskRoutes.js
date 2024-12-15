import express from 'express';
import { createTask, getAllTasks, updateTask, deleteTask } from '../controllers/taskController.js';

const router = express.Router();

// Route for creating a task
router.post('/create/task', createTask);

// Route for getting all tasks
router.get('/find/all/task', getAllTasks);

// Route for updating a task
router.put('/update/task/:id', updateTask);

// Route for deleting a task
router.delete('/delete/task/:id', deleteTask);

export default router;
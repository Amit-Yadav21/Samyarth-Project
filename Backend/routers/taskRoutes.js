import express from 'express';
import { createTask, getAllTasks, updateTask, deleteTask } from '../controllers/taskController.js';
import handleValidationErrors from '../middleware/handleValidationErrors.js'
import { validateCreateTask, validateUpdateTaskBy_TaskID, validateDeleteTaskBy_TaskID} from '../validators/taskValidation.js';

const router = express.Router();

// Route for creating a task
router.post('/create/task', validateCreateTask, handleValidationErrors, createTask);

// Route for getting all tasks
router.get('/find/all/task', getAllTasks);

// Route for updating a task
router.put('/update/task/:id', validateUpdateTaskBy_TaskID, handleValidationErrors, updateTask);

// Route for deleting a task
router.delete('/delete/task/:id', validateDeleteTaskBy_TaskID, handleValidationErrors, deleteTask);

export default router;
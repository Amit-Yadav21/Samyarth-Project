import { body, param } from 'express-validator';

// Validation for creating a new task
const validateCreateTask = [
    body('description')
        .notEmpty().withMessage('Description field is required')
        .isString().withMessage('Description must be a string'),
];

// Validation for updating a task by project name
const validateUpdateTaskBy_TaskID = [
    param('id')
        .isMongoId().withMessage('Task ID must be a valid MongoDB ObjectId'),
    body('description')
        .notEmpty().withMessage('Description field is required')
        .isString().withMessage('Description must be a string'),
];

// Validation for deleting a task by task_ID
const validateDeleteTaskBy_TaskID = [
    param('id')
        .isMongoId().withMessage('Task ID must be a valid MongoDB ObjectId'),
];

export { validateCreateTask, validateUpdateTaskBy_TaskID, validateDeleteTaskBy_TaskID }
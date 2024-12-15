import Task from '../mongoDBSchema/taskSchema.js';
import { generate } from '../geminiAI/ai.js';

const createTask = async (req, res, next) => {
    try {
        const { description } = req.body;

        // Validate required field
        if (!description) {
            const err = new Error("Task description is required")
            err.status = 400;
            return next(err)
            // return res.status(400).json({ message: "Task description is required" });
        }

        // Generate AI-based priority
        const priority = await generate(description);
        console.log("priority get from Gemini AI -", priority);

        // Save the task to the database
        const task = new Task({ description, priority });
        await task.save();

        res.status(201).json({
            message: "Task created successfully",
            task,
        });
    } catch (error) {
        console.error("Error creating task:", error.message);
        const err = new Error("Server error while creating task")
        err.status = 500;
        return next(err)
        // res.status(500).json({ message: "Server error while creating task" });
    }
};

// Get all tasks
const getAllTasks = async (req, res, next) => {
    try {
        // priority: -1(Sorts tasks by priority in Ascending order (highest priority first))
        // createdAt: 1(If two tasks have the same priority, they are sorted by their createdAt timestamp in ascending order (earliest first))
        const tasks = await Task.find().sort({ priority: 1, createdAt: 1 });
        res.status(200).json(tasks);
    } catch (error) {
        const err = new Error("Server error while fetching task")
        err.status = 500;
        return next(err)
        // res.status(500).json({ message: 'Error fetching tasks', error });
    }
};

// Update a task
const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { description } = req.body;

        // Use the Gemini AI to generate priority based on description
        const priority = await generate(description);

        // Update the task in the database
        const task = await Task.findByIdAndUpdate(
            id,
            { description, priority },
            { new: true }
        );

        // Check if the task exists
        if (!task) {
            const err = new Error("Task not found");
            err.status = 404;
            return next(err);
        }

        // Return the updated task
        res.status(200).json({ message: 'Task updated successfully', task });
    } catch (error) {
        console.error("Error updating task:", error.message);
        const err = new Error("Error updating task");
        err.status = 500;
        return next(err);
    }
};

// Delete a task
const deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            const err = new Error("Task not found")
            err.status = 404;
            return next(err)
            // return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({ message: 'Task deleted successfully', task: deletedTask });
    } catch (error) {
        const err = new Error("Error deleting task")
        err.status = 500;
        return next(err)
        // res.status(500).json({ message: 'Error deleting task', error });
    }
};

export { createTask, getAllTasks, updateTask, deleteTask };
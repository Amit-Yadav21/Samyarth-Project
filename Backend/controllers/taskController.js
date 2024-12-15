import Task from '../mongoDBSchema/taskSchema.js';
import { generate } from '../geminiAI/ai.js';

const createTask = async (req, res) => {
    try {
        const { description } = req.body;

        // Validate required field
        if (!description) {
            return res.status(400).json({ message: "Task description is required" });
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
        res.status(500).json({ message: "Server error while creating task" });
    }
};

// Get all tasks
const getAllTasks = async (req, res) => {
    try {
        // priority: -1(Sorts tasks by priority in Ascending order (highest priority first))
        // createdAt: 1(If two tasks have the same priority, they are sorted by their createdAt timestamp in ascending order (earliest first))
        const tasks = await Task.find().sort({ priority: 1, createdAt: 1 });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
};

// Update a task
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { description, dueDate } = req.body;
        const priority = suggestPriority(description, dueDate);
        const task = await Task.findByIdAndUpdate(
            id,
            { description, dueDate, priority },
            { new: true }
        );
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
    }
};

// Delete a task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
};

export { createTask, getAllTasks, updateTask, deleteTask };
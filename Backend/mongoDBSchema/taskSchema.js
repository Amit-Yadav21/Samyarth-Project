import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    description: { type: String, required: true },
    priority: { type: String, required: true }, 
    createdAt: { type: Date, default: Date.now },
});

const Task = mongoose.model('Task', taskSchema);
export default Task;
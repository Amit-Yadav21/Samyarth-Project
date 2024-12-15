import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DB_URI = process.env.MONGODB_URL;

const databaseConection = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); // Exit the process if the connection fails
    }
};

export default databaseConection;
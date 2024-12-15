import express from 'express';
import dotenv from 'dotenv';
import taskRoutes from './routers/taskRoutes.js';
import databaseConection from './databaseConection/db.js'
dotenv.config();

const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', taskRoutes)

// Connect to the database
databaseConection();

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
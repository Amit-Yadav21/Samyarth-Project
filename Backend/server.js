import express from 'express';
import dotenv from 'dotenv';
import taskRoutes from './routers/taskRoutes.js';
import databaseConection from './databaseConection/db.js'
import logging from './middleware/logger.js'
import errorHandler from './middleware/errorHandler.js'
import notFoundHandler from './middleware/notFoundHandler.js'
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(express.json());

// Logger Meddleware, Application-level middleware - Logging (whole application)
app.use(logging)

const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? process.env.PRODUCTION_URL // Production URL from .env
    : process.env.DEVELOPMENT_URL, // Development URL from .env
  optionsSuccessStatus: 200,
  credentials: true, // Allow credentials
};
app.use(cors(corsOptions))

// Routes
app.use('/api', taskRoutes)

// notFound Handling Middleware
app.use(notFoundHandler)

// Error Handling Middleware
app.use(errorHandler);

// Connect to the database
databaseConection();

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
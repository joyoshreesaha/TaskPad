const express = require('express');
const taskRouter = require('./routes/tasks');

const app = express();
const port = 3000;

// In-memory storage (will be replaced by MySQL in LAB 3)
const tasks = [
    { 
        id: 1, 
        title: 'Sample Task', 
        completed: false,
        priority: 'medium',
        createdAt: new Date('2025-11-01')
    }
];

// Attach tasks to app.locals for route access
app.locals.tasks = tasks;

// JSON parsing middleware (MUST come before routes)
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Task Management API is running!');
});

// Health check route
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        uptime: process.uptime()
    });
});

// Mount task router
app.use('/tasks', taskRouter);
app.use('/task', taskRouter);

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
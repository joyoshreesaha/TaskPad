const express = require('express');
const router = express.Router();

// ============================================
// GET /tasks - Retrieve all tasks
// ============================================
router.get('/', (req, res) => {
    try {
        const tasks = req.app.locals.tasks;
        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
});

// ============================================
// GET /tasks/:id - Retrieve a single task by ID
// ============================================
router.get('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        
        // Validate ID format
        if (isNaN(id)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid ID format'
            });
        }
        
        const tasks = req.app.locals.tasks;
        const task = tasks.find(t => t.id === id);
        
        if (task) {
            res.status(200).json({
                success: true,
                data: task
            });
        } else {
            res.status(404).json({
                success: false,
                error: 'Task not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
});

// ============================================
// POST /tasks - Create a new task
// ============================================
router.post('/', (req, res) => {
    try {
        const { title, priority, completed } = req.body;
        
        // Input validation
        if (!title || typeof title !== 'string' || title.trim().length === 0) {
            return res.status(400).json({
                success: false,
                error: 'Title is required and must be a non-empty string'
            });
        }
        
        // Validate priority if provided
        const validPriorities = ['low', 'medium', 'high'];
        const taskPriority = priority || 'medium';
        
        if (!validPriorities.includes(taskPriority)) {
            return res.status(400).json({
                success: false,
                error: 'Priority must be low, medium, or high'
            });
        }
        
        // Create new task
        const newTask = {
            id: Date.now(), // Simple ID generation
            title: title.trim(),
            completed: completed || false,
            priority: taskPriority,
            createdAt: new Date()
        };
        
        const tasks = req.app.locals.tasks;
        tasks.push(newTask);
        
        res.status(201).json({
            success: true,
            message: 'Task created successfully',
            data: newTask
        });
        
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
});

module.exports = router;
const express = require('express');
   const router = express.Router();

   const tasks = [
       { 
           id: 1, 
           title: 'Learn Node.js', 
           completed: false,
           priority: 'high',
           createdAt: new Date('2025-10-15')
       },
       { 
           id: 2, 
           title: 'Build REST API', 
           completed: false,
           priority: 'medium',
           createdAt: new Date('2025-10-20')
       },
       { 
           id: 3, 
           title: 'Test with Postman', 
           completed: true,
           priority: 'low',
           createdAt: new Date('2025-10-22')
       },
       { 
           id: 4, 
           title: 'Deploy to production', 
           completed: false,
           priority: 'high',
           createdAt: new Date('2025-10-25')
       },
       { 
           id: 5, 
           title: 'Write documentation', 
           completed: false,
           priority: 'medium',
           createdAt: new Date('2025-10-28')
       }
   ];

   // GET all tasks
   router.get('/', (req, res) => {
       res.json(tasks);
   });

   // GET task by ID
   router.get('/:id', (req, res) => {
       const id = parseInt(req.params.id);
       const task = tasks.find(t => t.id === id);
       
       if (task) {
           res.json(task);
       } else {
           res.status(404).json({ error: 'Task not found' });
       }
   });

   module.exports = router;
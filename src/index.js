const express = require('express');
const app = express();
const port = 3000;
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
app.get('/', (req, res) => {
        res.send('Task Management API is running!');
});
app.get('/tasks', (req, res) => {
       res.json(tasks);
});
app.get('/health', (req, res) => {
       res.json({ status: 'healthy',
              uptime: process.uptime(),
        });
});
app.get('/task/:id', (req, res) => {
         const taskId = parseInt(req.params.id, 10);    
            const task = tasks.find(t => t.id === taskId);
            if (task) {
                res.json(task);
            }   else {
                res.status(404).json({ "error": "Task not found" });
            }
});
app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
});
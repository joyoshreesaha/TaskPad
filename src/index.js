   const express = require('express');
   const app = express();
   const port = 3000;
   const tasksRouter = require('./routes/tasks');

   app.get('/', (req, res) => {
       res.send('Task Management API is running!');
   });

   app.get('/health', (req, res) => {
       res.json({
           status: 'healthy',
           uptime: process.uptime()
       });
   });

   // Use the tasks router
   app.use('/tasks', tasksRouter);
   app.use('/task', tasksRouter);

   app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
   });
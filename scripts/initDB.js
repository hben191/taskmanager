const mongoose = require('mongoose');
const Project = require('../models/Project'); // Adjust the path to your Project model
const Task = require('../models/Task'); // Adjust the path to your Task model

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected!');

    // Create a sample project
    const project = await Project.create({
      name: 'Sample Project',
      tasks: [],
    });

    // Add some tasks (assuming you have a Task model)
    // const task = await Task.create({ title: 'Sample Task', project: project._id });

    console.log('Project created:', project);

    // Close the connection
    mongoose.connection.close();
  })
.catch(err => console.error('MongoDB connection error:', err));

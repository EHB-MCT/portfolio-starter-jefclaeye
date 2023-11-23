const express = require('express');
const app = express();
const studentsRoutes = require('./routes/studentsRoutes');
const projectsRoutes = require('./routes/projectsRoutes');

// Parse incoming JSON data
app.use(express.json());

// Endpoint to test if the server is running
app.get("/", (req, res) => {
    res.send({ message: "test" })
});

// Use the studentsRoutes module for the "/api/students" endpoint
app.use('/api/students', studentsRoutes);

// Use the projectsRoutes module for the "/api/projects" endpoint
app.use('/api/projects', projectsRoutes);

module.exports = app;
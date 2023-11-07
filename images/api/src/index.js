const express = require('express');
const app = express();
const studentsRoutes = require('./routes/studentsRoutes'); // Import your route module
const projectsRoutes = require('./routes/projectsRoutes'); // Import your route module


app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "test" })
})

// Use the studentsRoutes module for the "/api/students" endpoint
app.use('/api/students', studentsRoutes);
app.use('/api/projects', projectsRoutes);
app.listen(3000, (err) => {
    if (!err) {
        console.log(`Server is running on port 3000`)
    } else { console.error(err) };
});
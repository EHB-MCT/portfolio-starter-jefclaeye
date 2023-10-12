const express = require('express');
const app = express();
const studentsRoutes = require('./routes/studentsRoutes'); // Import your route module
const port = process.env.PORT || 3000;

app.use(express.json());

// Use the studentsRoutes module for the "/api/students" endpoint
app.use('/api/students', studentsRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

console.log("test f");
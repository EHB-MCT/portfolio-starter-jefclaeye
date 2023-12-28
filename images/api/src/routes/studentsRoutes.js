const express = require('express');
const router = express.Router();
const students = require('../controller/students'); // Import your CRUD operations

// Create a new student
router.post('/', async(req, res) => {
    try {
        // Validate student data here
        if (!req.body.first_name || !req.body.last_name || !req.body.age || !req.body.email) {
            return res.status(400).json({ error: 'Invalid student data.' });
        }

        const student = await students.createStudent(req.body);
        res.status(200).json(student);
    } catch (error) {
        console.error('Error creating student:', error);
        res.status(500).json({ error: 'Failed to create student.' });
    }
});




// Retrieve all students
router.get('/', async(req, res) => {
    try {
        const allStudents = await students.getAllStudents();
        res.json(allStudents);
    } catch (error) {
        console.error('Error retrieving students:', error);
        res.status(500).json({ error: 'Failed to retrieve students.' });
    }
});

// Retrieve a student by ID
router.get('/:id', async(req, res) => {
    const studentId = req.params.id;
    try {
        const student = await students.getStudentById(studentId);
        if (!student) {
            return res.status(404).json({ error: 'Student not found.' });
        }
        res.json(student);
    } catch (error) {
        console.error('Error retrieving student:', error);
        res.status(500).json({ error: 'Failed to retrieve student.' });
    }
});

// Update a student by ID
router.put('/:id', async(req, res) => {
    const studentId = req.params.id;
    try {
        await students.updateStudent(studentId, req.body);
        res.status(204).end();
    } catch (error) {
        console.error('Error updating student:', error);
        res.status(500).json({ error: 'Failed to update student.' });
    }
});

// Delete a student by ID
router.delete('/:id', async(req, res) => {
    const studentId = req.params.id;
    try {
        await students.deleteStudent(studentId);
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({ error: 'Failed to delete student.' });
    }
});

module.exports = router;
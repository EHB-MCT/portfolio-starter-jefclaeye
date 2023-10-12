const express = require('express');
const app = express();
const students = require('../students'); // Assuming 'students' module handles data operations
const port = process.env.PORT || 3000;

app.use(express.json());

/**
 * Create a new student.
 *
 * @route POST /api/students
 * @param {object} req.body - The student data to be created.
 * @returns {object} - The newly created student.
 * @throws {object} - Returns a 500 Internal Server Error if the creation fails.
 */
app.post('/api/students', async(req, res) => {
    try {
        const student = await students.createStudent(req.body);
        res.status(201).json(student);
    } catch (error) {
        console.error('Error creating student:', error);
        res.status(500).json({ error: 'Failed to create student.' });
    }
});

/**
 * Retrieve all students.
 *
 * @route GET /api/students
 * @returns {array} - An array of all students.
 * @throws {object} - Returns a 500 Internal Server Error if the retrieval fails.
 */
app.get('/api/students', async(req, res) => {
    try {
        const allStudents = await students.getAllStudents();
        res.json(allStudents);
    } catch (error) {
        console.error('Error retrieving students:', error);
        res.status(500).json({ error: 'Failed to retrieve students.' });
    }
});

/**
 * Retrieve a student by ID.
 *
 * @route GET /api/students/:id
 * @param {string} req.params.id - The ID of the student to retrieve.
 * @returns {object} - The student with the specified ID.
 * @throws {object} - Returns a 404 Not Found if the student is not found, or a 500 Internal Server Error if retrieval fails.
 */
app.get('/api/students/:id', async(req, res) => {
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

/**
 * Update a student by ID.
 *
 * @route PUT /api/students/:id
 * @param {string} req.params.id - The ID of the student to update.
 * @param {object} req.body - The updated student data.
 * @returns {string} - A success message.
 * @throws {object} - Returns a 500 Internal Server Error if the update fails.
 */
app.put('/api/students/:id', async(req, res) => {
    const studentId = req.params.id;
    try {
        await students.updateStudent(studentId, req.body);
        res.status(204).end();
    } catch (error) {
        console.error('Error updating student:', error);
        res.status(500).json({ error: 'Failed to update student.' });
    }
});

/**
 * Delete a student by ID.
 *
 * @route DELETE /api/students/:id
 * @param {string} req.params.id - The ID of the student to delete.
 * @returns {string} - A success message.
 * @throws {object} - Returns a 500 Internal Server Error if the deletion fails.
 */
app.delete('/api/students/:id', async(req, res) => {
    const studentId = req.params.id;
    try {
        await students.deleteStudent(studentId);
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({ error: 'Failed to delete student.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

console.log("test f");
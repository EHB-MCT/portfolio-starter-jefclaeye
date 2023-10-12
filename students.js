const knex = require('knex')(require('./knexfile')['development']);

// Create a new student
const createStudent = async(studentData) => {
    return await knex('students').insert(studentData);
};

// Retrieve all students
const getAllStudents = async() => {
    return await knex('students').select('*');
};

// Retrieve a student by ID
const getStudentById = async(studentId) => {
    return await knex('students').where({ id: studentId }).first();
};

// Update a student by ID
const updateStudent = async(studentId, updatedData) => {
    return await knex('students').where({ id: studentId }).update(updatedData);
};

// Delete a student by ID
const deleteStudent = async(studentId) => {
    return await knex('students').where({ id: studentId }).del();
};

module.exports = {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
};
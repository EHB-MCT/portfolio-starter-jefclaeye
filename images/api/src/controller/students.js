const knex = require('knex')(require('../db/knexfile')['development']);
const checkStudentFields = require('./../helpers/checkStudentFields');

/**
 * Create a new student in the database.
 * @param {Object} studentData - Data for the new student.
 * @returns {Promise<Array>} - Returns an array containing the inserted student data.
 */
const createStudent = async(studentData) => {
    if (checkStudentFields(studentData.name)) {
        return await knex('students').insert(studentData).returning("*");
    } else {
        return false;
    }
};

/**
 * Retrieve all students from the database.
 * @returns {Promise<Array>} - Returns an array containing all students.
 */
const getAllStudents = async() => {
    return await knex('students').select('*');
};

/**
 * Retrieve a student from the database by ID.
 * @param {number} studentId - ID of the student to retrieve.
 * @returns {Promise<Object>} - Returns the student object if found, otherwise returns undefined.
 */
const getStudentById = async(studentId) => {
    return await knex('students').where({ id: studentId }).first();
};

/**
 * Update a student in the database by ID.
 * @param {number} studentId - ID of the student to update.
 * @param {Object} updatedData - Updated data for the student.
 * @returns {Promise<number>} - Returns the number of updated rows.
 */
const updateStudent = async(studentId, updatedData) => {
    return await knex('students').where({ id: studentId }).update(updatedData);
};

/**
 * Delete a student from the database by ID.
 * @param {number} studentId - ID of the student to delete.
 * @returns {Promise<number>} - Returns the number of deleted rows.
 */
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
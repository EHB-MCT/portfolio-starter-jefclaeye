const knex = require('knex')(require('../db/knexfile')['development']);
const checkProjectFields = require('./../helpers/checkProjectFields');

/**
 * Create a new project in the database.
 * @param {Object} projectData - Data for the new project.
 * @returns {Promise<Boolean|Array>} - Returns false if projectData is invalid, otherwise returns an array with the inserted IDs.
 */
const createProject = async(projectData) => {
    if (checkProjectFields(projectData.name)) {
        const res = await knex('projects').insert(projectData).returning("*");
        return res
    } else {
        return false;
    }
};

/**
 * Retrieve all projects from the database.
 * @returns {Promise<Array>} - Returns an array containing all projects.
 */
const getAllProjects = async() => {
    return await knex('projects').select('*');
};

/**
 * Retrieve a project from the database by ID.
 * @param {number} projectId - ID of the project to retrieve.
 * @returns {Promise<Object>} - Returns the project object if found, otherwise returns undefined.
 */
const getProjectById = async(projectId) => {
    return await knex('projects').where({ id: projectId }).first();
};

/**
 * Update a project in the database by ID.
 * @param {number} projectId - ID of the project to update.
 * @param {Object} updatedData - Updated data for the project.
 * @returns {Promise<number>} - Returns the number of updated rows.
 */
const updateProject = async(projectId, updatedData) => {
    return await knex('projects').where({ id: projectId }).update(updatedData);
};

/**
 * Delete a project from the database by ID.
 * @param {number} projectId - ID of the project to delete.
 * @returns {Promise<number>} - Returns the number of deleted rows.
 */
const deleteProject = async(projectId) => {
    return await knex('projects').where({ id: projectId }).del();
};

module.exports = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
};
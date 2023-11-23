const knex = require('knex')(require('../db/knexfile')['development']);
const checkProjectFields = require('./../helpers/checkProjectFields');

// Create a new project
const createProject = async(projectData) => {
    if (checkProjectFields(projectData)) {
        return await knex('projects').insert(projectData);
    } else {
        return false
    }
};

// Retrieve all projects
const getAllProjects = async() => {
    return await knex('projects').select('*');
};

// Retrieve a project by ID
const getProjectById = async(projectId) => {
    return await knex('projects').where({ id: projectId }).first();
};

// Update a project by ID
const updateProject = async(projectId, updatedData) => {
    return await knex('projects').where({ id: projectId }).update(updatedData);
};

// Delete a project by ID
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
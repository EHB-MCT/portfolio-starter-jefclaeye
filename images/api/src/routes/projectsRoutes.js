const express = require('express');
const router = express.Router();
const projects = require('./../controller/projects'); // Import your CRUD operations for projects

router.post('/', async(req, res) => {
    if (!req.body.name || !req.body.date || !req.body.info) {
        return res.status(400).json({ error: 'Failed to create project. Missing field(s)' });
    }
    try {
        const project = await projects.createProject(req.body);
        res.status(200).json(project);
    } catch (error) {
        console.error('Error creating project:', error); // Log the error for debugging
        res.status(500).json({ error: 'Failed to create project. Server error occurred.' });
    }
});




// Retrieve all projects
router.get('/', async(req, res) => {
    try {
        const allProjects = await projects.getAllProjects();
        res.json(allProjects);
    } catch (error) {
        console.error('Error retrieving projects:', error);
        res.status(500).json({ error: 'Failed to retrieve projects.' });
    }
});

// Retrieve a project by ID
router.get('/:id', async(req, res) => {
    try {
        const projectId = req.params.id;
        const project = await projects.getProjectById(projectId);
        if (!project) {
            return res.status(404).json({ error: 'Project not found.' });
        }
        res.status(200).json(project);
    } catch (error) {
        console.error('Error retrieving project:', error);
        res.status(500).json({ error: 'Failed to retrieve project.' });
    }
});

// Update a project by ID
router.put('/:id', async(req, res) => {
    const projectId = req.params.id;
    try {
        await projects.updateProject(projectId, req.body);
        res.status(204).end();
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).json({ error: 'Failed to update project.' });
    }
});

// Delete a project by ID
router.delete('/:id', async(req, res) => {
    const projectId = req.params.id;
    try {
        await projects.deleteProject(projectId);
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ error: 'Failed to delete project.' });
    }
});

module.exports = router;
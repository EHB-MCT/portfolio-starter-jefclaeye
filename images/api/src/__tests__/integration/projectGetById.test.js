const request = require('supertest');
const express = require('express');


const projects = {
    getProjectById: async(id) => {

        const mockedProjects = {
            '1': { id: '1', date: Date.now(), name: 'Project One' },
            '2': { id: '2', date: Date.now(), name: 'Project Two', },

        };
        return mockedProjects[id];
    }
};


const app = express();
app.get('/projects/:id', async(req, res) => {
    try {
        const projectId = req.params.id;
        const project = await projects.getProjectById(projectId);
        if (!project) {
            return res.status(404).json({ error: 'Project not found.' });
        }
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve project.' });
    }
});

describe('GET /projects/:id', () => {
    test('should retrieve a project by ID', async() => {
        const projectId = '1';

        const response = await request(app)
            .get(`/projects/${projectId}`)
            .expect(200);

        expect(response.body.name).toEqual('Project One');
    });

    test('should return a 404 error for non-existing project', async() => {
        const projectId = '999';

        const response = await request(app)
            .get(`/projects/${projectId}`)
            .expect(404);

        expect(response.body).toEqual({ error: 'Project not found.' });
    });

    test('should handle server error during project retrieval', async() => {

        projects.getProjectById = async() => {
            throw new Error('Some server error');
        };

        const projectId = '1';

        const response = await request(app)
            .get(`/projects/${projectId}`)
            .expect(500);

        expect(response.body).toEqual({ error: 'Failed to retrieve project.' });
    });
});
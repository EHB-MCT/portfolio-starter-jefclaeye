const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

const projectsRoutes = require('../../routes/projectsRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/projects', projectsRoutes);

beforeAll(async() => {

});

afterAll(async() => {

});

describe('POST /projects', () => {
    test('should create a new project', async() => {
        const projectData = {
            name: 'Project 1',
            date: Date.now(),
            info: 'Information about Project 1',
        };

        const response = await request(app)
            .post('/projects')
            .send(projectData)
            .expect(200);


        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);

        const firstProject = response.body[0];


        expect(firstProject).toHaveProperty('id');
        expect(firstProject.name).toBe(projectData.name);
        expect(Number(firstProject.date)).toBe(projectData.date);
        expect(firstProject.info).toBe(projectData.info);
    });


    test('should return an error if project creation fails', async() => {
        const invalidProjectData = {
            name: "",
            date: Date.now(),
            info: 'Invalid Project Data',
        };

        const response = await request(app)
            .post('/projects')
            .send(invalidProjectData)
            .expect(500);

        expect(response.body).toEqual({ error: 'Failed to create project.' });
    });
});
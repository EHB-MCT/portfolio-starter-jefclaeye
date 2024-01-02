const request = require('supertest');
const express = require('express');
const router = require('../../routes/projectsRoutes');
const projects = require('../../controller/projects');


jest.mock('../../controller/projects.js');

const app = express();
app.use(express.json());
app.use('/', router);




describe('Project routes', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });


    it('should create a new project', async() => {
        const mockProject = {
            id: 1,
            name: 'Project 1',
            date: Date.now(),
            info: 'Information about Project 1',
        };
        projects.createProject.mockResolvedValue(mockProject);

        const response = await request(app)
            .post('/')
            .send(mockProject);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockProject);
    });


    it('should retrieve all projects', async() => {
        const mockProjectsList = [];
        projects.getAllProjects.mockResolvedValue(mockProjectsList);

        const response = await request(app).get('/');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockProjectsList);
    });


    it('should retrieve a project by ID', async() => {
        const projectId = 'someId';
        const mockProject = {};
        projects.getProjectById.mockResolvedValue(mockProject);

        const response = await request(app).get(`/${projectId}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockProject);
    });


    it('should update a project by ID', async() => {
        const projectId = 'someId';
        const mockUpdatedProject = {};
        projects.updateProject.mockResolvedValue();

        const response = await request(app)
            .put(`/${projectId}`)
            .send(mockUpdatedProject);

        expect(response.status).toBe(204);
    });


    it('should delete a project by ID', async() => {
        const projectId = 'someId';
        projects.deleteProject.mockResolvedValue();

        const response = await request(app).delete(`/${projectId}`);

        expect(response.status).toBe(204);
    });
});
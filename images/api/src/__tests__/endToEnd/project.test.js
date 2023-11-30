const request = require('supertest');
const express = require('express');
const router = require('../../routes/projectsRoutes'); // Correct path to projectsRoutes file
const projects = require('../../controller/projects'); // Import your CRUD operations for projects

// Mock the projects module
jest.mock('../../controller/projects.js');

const app = express();
app.use(express.json());
app.use('/', router);

// Your Jest test cases...


describe('Project routes', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // Test for POST / - Create a new project
    it('should create a new project', async() => {
        const mockProject = {
            id: 1,
            name: 'Project 1',
            date: '2023-11-23',
            info: 'Information about Project 1',
        };
        projects.createProject.mockResolvedValue(mockProject);

        const response = await request(app)
            .post('/')
            .send(mockProject);

        expect(response.status).toBe(201);
        expect(response.body).toEqual(mockProject);
    });

    // Test for GET / - Retrieve all projects
    it('should retrieve all projects', async() => {
        const mockProjectsList = [ /* Mock projects list */ ];
        projects.getAllProjects.mockResolvedValue(mockProjectsList);

        const response = await request(app).get('/');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockProjectsList);
    });

    // Test for GET /:id - Retrieve a project by ID
    it('should retrieve a project by ID', async() => {
        const projectId = 'someId';
        const mockProject = { /* Mock project data */ };
        projects.getProjectById.mockResolvedValue(mockProject);

        const response = await request(app).get(`/${projectId}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockProject);
    });

    // Test for PUT /:id - Update a project by ID
    it('should update a project by ID', async() => {
        const projectId = 'someId';
        const mockUpdatedProject = { /* Mock updated project data */ };
        projects.updateProject.mockResolvedValue();

        const response = await request(app)
            .put(`/${projectId}`)
            .send(mockUpdatedProject);

        expect(response.status).toBe(204);
    });

    // Test for DELETE /:id - Delete a project by ID
    it('should delete a project by ID', async() => {
        const projectId = 'someId';
        projects.deleteProject.mockResolvedValue();

        const response = await request(app).delete(`/${projectId}`);

        expect(response.status).toBe(204);
    });
});
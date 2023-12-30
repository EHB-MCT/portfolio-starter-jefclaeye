const request = require('supertest');
const express = require('express');
const router = require('../../routes/studentsRoutes'); // Correct path to studentsRoutes file
const students = require('../../controller/students'); // Import your CRUD operations for students

// Mock the students module
jest.mock('../../controller/students.js');

const app = express();
app.use(express.json());
app.use('/', router);

// Your Jest test cases...


describe('Student routes', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // Test for POST / - Create a new Student
    it('should create a new student', async() => {
        const mockStudent = {
            id: 1,
            first_name: 'Ricky',
            last_name: 'Development',
            age: '88',
            email: 'TestingJest@Jest.com',
        };
        students.createStudent.mockResolvedValue(mockStudent);

        const response = await request(app)
            .post('/')
            .send(mockStudent);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockStudent);
    });

    it('should retrieve all Students', async() => {
        const mockStudentsList = [];
        students.getAllStudents.mockResolvedValue(mockStudentsList);

        const response = await request(app).get('/');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockStudentsList);
    });


    it('should retrieve a Student by ID', async() => {
        const studentId = 'someId';
        const mockStudent = {};
        students.getStudentById.mockResolvedValue(mockStudent);

        const response = await request(app).get(`/${studentId}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockStudent);
    });


    it('should update a Student by ID', async() => {
        const studentId = 'someId';
        const mockUpdatedProject = {};
        students.updateStudent.mockResolvedValue();

        const response = await request(app)
            .put(`/${studentId}`)
            .send(mockUpdatedProject);

        expect(response.status).toBe(204);
    });


    it('should delete a Student by ID', async() => {
        const studentId = 'someId';
        students.deleteStudent.mockResolvedValue();

        const response = await request(app).delete(`/${studentId}`);

        expect(response.status).toBe(204);
    });
});
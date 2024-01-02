const request = require('supertest');
const express = require('express');

let server;

const students = {
    getStudentById: async(id) => {
        const mockedStudents = {
            '1': {
                id: '1',
                first_name: 'John',
                last_name: 'Doe',
                age: 20,
                email: 'john.doe@example.com',
            },
            '2': {
                id: '2',
                first_name: 'John',
                last_name: 'Doe',
                age: 20,
                email: 'john.doe@example.com',
            },
        };
        return mockedStudents[id];
    }
};

const app = express();
app.get('/students/:id', async(req, res) => {
    try {
        const studentId = req.params.id;
        const student = await students.getStudentById(studentId);
        if (!student) {
            return res.status(404).json({ error: 'student not found.' });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve student.' });
    }
});

beforeAll(() => {
    server = app.listen(4000); // Start the Express server on port 4000 before running tests
});

afterAll((done) => {
    server.close(done); // Close the server after all tests are done
});

describe('GET /students/:id', () => {
    test('should retrieve a student by ID', async() => {
        const studentId = '1';
        const response = await request(app)
            .get(`/students/${studentId}`)
            .expect(200);

        expect(response.body.first_name).toEqual('John');
    });

    test('should return a 404 error for non-existing student', async() => {
        const studentId = '999';
        const response = await request(app)
            .get(`/students/${studentId}`)
            .expect(404);

        expect(response.body).toEqual({ error: 'student not found.' });
    });

    test('should handle server error during student retrieval', async() => {
        students.getStudentById = async() => {
            throw new Error('Some server error');
        };

        const studentId = '1';
        const response = await request(app)
            .get(`/students/${studentId}`)
            .expect(500);

        expect(response.body).toEqual({ error: 'Failed to retrieve student.' });
    });
});
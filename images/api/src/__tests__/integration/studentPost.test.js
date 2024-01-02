const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

const studentsRoutes = require('../../routes/studentsRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/student', studentsRoutes);

beforeAll(async() => {

});

afterAll(async() => {

});

describe('POST /student', () => {
    test('should create a new student', async() => {
        const studentData = {
            first_name: 'John',
            last_name: 'Doe',
            age: 20,
            email: 'john.doe@example.com'
        };

        const response = await request(app)
            .post('/student')
            .send(studentData)
            .expect(200);



    });


    test('should return an error if student creation fails', async() => {
        const invalidStudentData = {
            first_name: 'Alice',
            last_name: 'Smith',
            age: 25
        };

        const response = await request(app)
            .post('/student')
            .send(invalidStudentData)
            .expect(400);

        expect(response.body).toEqual({ error: 'Invalid student data.' });

    });


});
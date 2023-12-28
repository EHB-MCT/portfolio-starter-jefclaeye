# Portfolio

Here you will find information on the development, endpoints and use of this project.

## Purpose

This project is application written in JavaScript with an Express.js server and a MySQL database.

The Birthday API is designed to help users remember the birthdays of their friends and loved ones. Users can view upcoming birthdays and leave comments for each person to make their day extra special.

## Getting Started

To get started with the project, follow these steps:

1. Copy the `.env.template` file to a new file called `.env`.

2. Run the following command to build and start the project using Docker Compose:
   
docker-compose up --build


## Features

- **Students:**

  - Retrieve a list of students.
  - Retrieve a student by id.
  - Add a new student.
  - Update student information.
  - Delete a student.

- **Projects:**

  - Retrieve a list of projects.
  - Retrieve a project by id.
  - Add a new project.
  - Update project information.
  - Delete a project.


# Endpoints Projects


## POST Create a Project

- **Description:** Creates a new project.
- **Request Body:**
  - `name` (string): Name of the project.
  - `date` (string): Date of the project.
  - `info` (string): Additional information about the project.

## GET/api/students Retrieve All Projects

- **Description:** Retrieves all projects.

## GET/api/students/:id Retrieve a Project by ID

- **Description:** Retrieves a project by its unique ID.
- **Request Parameter:**
  - `id` (string): Unique identifier of the project.

## PATCH/api/students/:id Update a Project by ID

- **Description:** Updates a project by its unique ID.
- **Request Parameter:**
  - `id` (string): Unique identifier of the project.
- **Request Body:** Contains the fields to update in the project.

## DELETE/api/students/:id Delete a Project by ID

- **Description:** Deletes a project by its unique ID.
- **Request Parameter:**
  - `id` (string): Unique identifier of the project.


# Endpoints Students

### POST/api/projects Create a Student

- **Description:** Creates a new student.
- **Request Body:**
  - `first_name` (string): First name of the student.
  - `last_name` (string): Last name of the student.
  - `age` (number): Age of the student.
  - `email` (string): Email of the student


### GET/api/projects Retrieve All Students

- **Description:** Retrieves all students.

### GET/api/projects/:id Retrieve a Student by ID

- **Description:** Retrieves a student by their unique ID.
- **Request Parameter:**
  - `id` (string): Unique identifier of the student.

### PATCH/api/projects/:id Update a Student by ID

- **Description:** Updates a student by their unique ID.
- **Request Parameter:**
  - `id` (string): Unique identifier of the student.
- **Request Body:** Contains the fields to update in the student.

### DELETE/api/projects Delete a Student by ID

- **Description:** Deletes a student by their unique ID.
- **Request Parameter:**
  - `id` (string): Unique identifier of the student.


## License

This project is licensed under the [MIT License](LICENSE).
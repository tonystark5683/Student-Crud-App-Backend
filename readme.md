# Backend - Student Management System

This is the backend of a Student Management System API built using Node.js, Express, and MongoDB. The application exposes RESTful endpoints to manage student data, including adding, updating, deleting, and fetching student records.

## Features
- Add a new student
- Get all students
- Get a student by ID
- Update a student's information
- Delete a student

## Prerequisites

- Node.js (v16 or above)
- MongoDB (Local or Cloud Database)

## Installation

1. Clone the repository to your local machine.

2. Install dependencies by running the following command:
   - `npm install`

3. Setup Environment Variables
   - Create a `.env` file at the root of your project and add the following variables:
     - `MONGO_URI=mongodb://localhost:27017/StudentDB`
     - `PORT=3000`
     
     For production, replace `MONGO_URI` with your MongoDB cloud database URL and update the `PORT` if necessary.

4. Run the application locally:
   - For development, use the following command:
     - `npm run dev`
   - For production, use:
     - `npm start`

## Endpoints

### `POST /students`
Adds a new student to the database. The request body should contain the student's details (name, email, age, address, and password).

### `GET /students`
Fetches a list of all students in the database.

### `GET /students/:id`
Fetches a single student by their ID.

### `PUT /students/:id`
Updates an existing student's details using their ID. The request body should contain the updated student details.

### `DELETE /students/:id`
Deletes a student by their ID.



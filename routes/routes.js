const express = require('express');
const Router = express.Router();
const {
  addStudent,
  getStudent,
  getStudentById,
  updateStudent,
  deleteStudent
} = require('./../handlers/studentHandle');


Router.post('/students', async (req, res) => {
  try {
    await addStudent(req.body);
    res.status(201).send({ message: 'Student added successfully'});
  } catch (error) {
    console.error('Error adding student:', error.message);
    res.status(500).send({ error: 'Failed to add student' });
  }
});

// Get all students
Router.get('/students', async (req, res) => {
  try {
    const students = await getStudent();
    res.status(200).send(students);
  } catch (error) {
    console.error('Error fetching students:', error.message);
    res.status(500).send({ error: 'Failed to fetch students' });
  }
});


Router.get('/students/:id', async (req, res) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      return res.status(400).json({ error: 'Student ID is required' });
    }
    const student = await getStudentById(studentId);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).send(student);
  } catch (error) {
    console.error(`Error fetching student with ID ${req.params.id}:`, error.message);
    res.status(500).send({ error: 'Failed to fetch student' });
  }
});


Router.put('/students/:id', async (req, res) => {
  try {
    const studentId = req.params.id;
    const updateData = req.body;
    if (!studentId) {
      return res.status(400).send({ error: 'Student ID is required' });
    }
    await updateStudent(studentId, updateData);
    res.status(200).send({ message: 'Student updated successfully'});
  } catch (error) {
    console.error(`Error updating student with ID ${req.params.id}:`, error.message);
    res.status(500).send({ error: 'Failed to update student' });
  }
});

// Delete a student by ID
Router.delete('/students/:id', async (req, res) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      return res.status(400).send({ error: 'Student ID is required' });
    }
    await deleteStudent(studentId);
    res.status(200).send({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error(`Error deleting student with ID ${req.params.id}:`, error.message);
    res.status(500).send({ error: 'Failed to delete student' });
  }
});

module.exports = Router;

const express = require('express')

const router = express.Router()
const Workout = require('../models/workoutModel')
const requireAuth = require('../middleware/requireAuth')

const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

// Get Middleware to validate authentication
router.use(requireAuth)

// GET request
router.get('/', getWorkouts)

// GET ONE request
router.get('/:id', getWorkout)

// POST request
router.post('/', createWorkout)

// DELETE request
router.delete('/:id', deleteWorkout)

// PATCH request
router.patch('/:id', updateWorkout)

module.exports = router
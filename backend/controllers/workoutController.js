const mongoose = require('mongoose')
const Workout = require('../models/workoutModel')

// POST a workout
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body
    const emptyFields = []

    if(!title){
        emptyFields.push('title')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(!load){
        emptyFields.push('load')
    }

    if(emptyFields.length > 0){
        return res.status(400).json({ error:'Please fill in all the fields.', emptyFields})
    }

    try{
        const workout_item = await Workout.create({ title, reps, load })
        if(workout_item){
            res.status(200).json(workout_item)
        }
    } catch(err){
        res.status(400).json({'error': err.message})
    }
}

// GET all workouts
const getWorkouts = async (req, res) => {
    try{
        const workouts = await Workout.find({}).sort({createdAt: -1})
        res.status(200).json(workouts)
    } catch(err) {
        res.status(400).json({'error': err.message})
    }
    
}

// GET workout by id
const getWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(200).json({'error':'document id is not valid'})
    }

    try{
        const workout = await Workout.findById(id)
        res.status(200).json(workout)
    } catch(err){
        res.status(400).json({'error': err.message})
    }
}

// DELETE a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(200).json({'error':'document id is not valid'})
    }

    try{
        const workout = await Workout.findByIdAndDelete({_id: id})
        res.status(200).json(workout)
    } catch(err){
        res.status(400).json({'error': err.message})
    }
}

// UPDATE a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(200).json({'error':'document id is not valid'})
    }

    try{
        const workout = await Workout.findByIdAndUpdate({ _id: id }, { ...req.body })
        res.status(200).json(workout)
    } catch(err){
        res.status(400).json({'error': err.message})
    }
}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}
const mongoose = require('mongoose')

// const Schema = mongoose.Schema

// const workoutSchema = new Schema({   // this so didnt work out!
const workoutSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    },
    user_id:{
        type:String,
        required:true
    }
}, { timestamps:true })

module.exports = mongoose.model('Workout', workoutSchema)
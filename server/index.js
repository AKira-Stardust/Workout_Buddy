require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')

// Node API
const app = express()

app.use(express.json())

// Routers
app.use('/api/workouts', workoutRoutes)

// Listen on localhost if connected to db
mongoose.connect(process.env.DB_URI)
    .then( () => {
        app.listen(process.env.PORT, () => {
            console.log("Listening on port " + process.env.PORT + "...")
        })
    })
    .catch( (error) => {console.log(error)})


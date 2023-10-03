const express = require("express")
// Controller
const { userLogin, userSignup } = require("../controllers/userController")

const route = express.Router()

// login
route.post('/login', userLogin)

// signup
route.post('/signup', userSignup)

module.exports = route
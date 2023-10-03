// Model
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

// Generat JWT
const generateToken = (_id) => {
    return jwt.sign({_id}, process.env.TOKEN, { expiresIn: '2d' })
}


// login
const userLogin = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)
        const token = await generateToken(user._id)
        res.status(200).json({email, token})
    } catch(error) {
        res.status(400).json({error:error.message})
    }

}

// signup
const userSignup = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.signup(email, password) 
        const token = generateToken(user._id)
        res.status(200).json({ email, token })
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { userLogin, userSignup }
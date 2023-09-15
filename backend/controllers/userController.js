const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

// register user
// /api/users/register
// public
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body

    //validation
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('please fill out all necessary fields')
    }

    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid request')
    }
})

// user login
// /api/users/login
// public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid credentials")
    }
})


// register user
// /api/users/administer
// private
const administer = asyncHandler(async (req, res) => {
    const user = {
        id: req.user._id,
        email: req.user.email,
        name: req.user.name
    }
    res.status(200).json(user)
})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1h'})
}

module.exports = {registerUser, loginUser, administer}
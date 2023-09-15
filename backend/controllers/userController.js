const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

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

const administer = asyncHandler(async (req, res) => {
    res.send('Protected fuck')
})

const protected = asyncHandler(async (req, res) => {
    const token = req.header('Authorization')

    if(!token) {
        return res.status(401).json({message: 'There is no token'})
    }
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if(err) {
            return res.status(401).json({ message: 'Invalid token' });
    }
    const userId = await decoded.id;
    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.isAdmin) {
            res.json({ message: 'Admin route accessed' });
            } else {
                res.status(403).json({ message: 'Access denied. User is not an admin' });
            }
        } catch (error) {
            console.error('Error fetching user:', error);
            res.status(500).json({ message: 'Server error' });
        }
})
        
})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1h'})
}

module.exports = {registerUser, loginUser, administer, protected}
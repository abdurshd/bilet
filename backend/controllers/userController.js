const asyncHandler = require('express-async-handler')

const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body

    //validation
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('please fill out all necessary fields')    }
})

const loginUser = asyncHandler(async (req, res) => {
    res.send('Login user')
})

module.exports = {registerUser, loginUser}
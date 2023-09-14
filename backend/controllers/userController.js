const registerUser = (req, res) => {
    const {name, email, password} = req.body

    //validation
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('please fillo ut all fields')    }
}

const loginUser = (req, res) => {
    res.send('Login user')
}

module.exports = {registerUser, loginUser}
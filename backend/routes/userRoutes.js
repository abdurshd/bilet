 const express = require('express')
 const router = express.Router()
const {registerUser,loginUser, protected, administer} = require('../controllers/userController')


 router.post('/register', registerUser)

 router.post('/login', loginUser)

 router.get('/admin', protected, administer)

 module.exports = router
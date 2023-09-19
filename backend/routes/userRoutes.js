 const express = require('express')
 const router = express.Router()
const {registerUser,loginUser, administer, changeUsers} = require('../controllers/userController')
const {protect} = require('../midddleware/authMidlleware')


 router.post('/register', registerUser)

 router.post('/login', loginUser)

 router.get('/admin', protect, administer)

 router.put('/:id', protect, changeUsers)

 module.exports = router
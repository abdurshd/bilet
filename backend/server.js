const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./midddleware/errorMiddleware')
const connectDB = require('./db/db')

//connect to database
connectDB()

const PORT = process.env.PORT || 8000
const app = express()

app.get('/', (req, res)=> {
    res.status(200).json({message: 'Hello guyz'})
})

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
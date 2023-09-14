const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, 'Please write a name']
        },
        email: {
            type: String,
            required: [true, 'Please write an email'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Please write a password'],
            unique: true
        },
        isAdmin : {
            type: Boolean,
            required: true,
            default: false
        },
    },
        {
            timestamps: true
        }
)

module.exports = mongoose.model('User', userSchema)
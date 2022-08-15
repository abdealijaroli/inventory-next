import mongoose from 'mongoose';

const LoginForm = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('LoginForm', LoginForm);
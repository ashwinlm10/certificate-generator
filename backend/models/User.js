const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String,  required: true, unique: true},
    password: {type: String, required: true},

    //role decide which dashboard they are

    role:{
        type: String,
        enum: ['student', 'issuer'],
        default: 'student'
    }
})

// Before saving, convert password to hash
// "mypassword123" → "$2a$10$xK9..."
// So real password is NEVER stored in DB

userSchema.pre('save', async function() {
    if(!this.isModified('password')) return 
        this.password = await bcrypt.hash(this.password, 10)
    // next()
})

module.exports = mongoose.model('User', userSchema)

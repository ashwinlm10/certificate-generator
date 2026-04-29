const User = require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

//register

const register = async(req,res) => {
    try{
        const {name, email, password, role} = req.body

        //check if user exists
        const existUser = await User.findOne({ email })
        if(existUser){
            return res.status(400).json({message: "Email already exists"})
        }

        // create new user
        const user = new User({ name, email, password, role })

        //save user
        await user.save()
        return res.status(201).json({ message: "Registered successfully!" })

        } catch (error) {
            console.error("REGISTER ERROR:", error)
        return res.status(500).json({message: 'server error', error})
    }
}

//Login

const login = async(req, res) => {
    try{
        const { email , password } = req.body

        //find user
        const user = await User.findOne({ email })
        if(!user){
            return res.status(400).json({ message: 'invalid email or password'})
        }
        // Compare password
const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password!" })
    }

    // Create token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )

    return res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    })

  } catch (error) {
      console.error("LOGIN ERROR:", error)
    res.status(500).json({ message: "Server error", error })
  }
}

module.exports = { register, login }
const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
require('dotenv').config()

const app = express()

//middlewares
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err))

//routes
const authRoutes = require('./routes/authRoutes')
const certificateRoutes = require('./routes/certificateRoutes')


app.use('/api/auth', authRoutes)
app.use('/api/certificate', certificateRoutes)


const PORT = process.env.PORT

app.listen(process.env.PORT,() => {
     console.log(`server started at ${process.env.PORT}`)
    
})
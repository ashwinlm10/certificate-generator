const mongoose = require('mongoose')

const certificateSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    studentName: {
        type: String,
        required: true
    },

    assessmentName: {
        type: String,
        required: true
    },

    score: {
        type: Number,
        required: true,
    },

    totalMarks: {
        type:Number,
        required: true
    },

    passMark: {
        type: Number,
        required: true
    },

    isEligible : {
        type: Boolean,
    },

    certificateNo: {
        type: String,
        unique: true,
        // default: null,
        sparse: true,
    },

    issueDate: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('certificate', certificateSchema)


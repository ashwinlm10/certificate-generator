const Certificate = require('../models/Certificate')

// CREATE CERTIFICATE
const createCertificate = async (req, res) => {
  try {
    const { studentName, assessmentName, score, totalMarks, passMark } = req.body

    const userId = req.user.userId

    // Calculate eligibility
    const percentage = (score / totalMarks) * 100
    const isEligible = percentage >= passMark

    let certificateNo = null

    // Generate certificate number if eligible
    if (isEligible) {
      // const lastCert = await Certificate.findOne().sort({ createdAt: -1 })
      const lastCert = await Certificate.findOne().sort({ _id: -1 })

      let nextNumber = 1

      if (lastCert && lastCert.certificateNo) {
        const lastNumber = parseInt(lastCert.certificateNo.split('-').pop())
        nextNumber = lastNumber + 1
      }

      certificateNo = `CERT-2025-${String(nextNumber).padStart(5, '0')}`
    }

    // Save certificate
    const certificate = new Certificate({
      userId,
      studentName,
      assessmentName,
      score,
      totalMarks,
      passMark,
      isEligible,
      certificateNo
    })

    await certificate.save()

    return res.status(201).json(certificate)

  } catch (error) {
    res.status(500).json({ message: "Server error", error })
  }
}


// GET CERTIFICATE
const getCertificate = async (req, res) => {
  try {
    const userId = req.user.userId

    const User = require('../models/User')
    const user = await User.findById(userId)

    // console.log('User name from DB:', user.name)

    const certificate = await 
    Certificate.findOne({ 
      studentName: user.name 
    })
    

    // console.log('Certificate found:', certificate)

    if (!certificate) {
      return res.status(404).json({ 
        message: "No certificate found" 
      })
    }

    return res.status(200).json(certificate)

  } catch (error) {
    res.status(500).json({ 
      message: "Server error", error 
    })
  }
}

module.exports = { createCertificate, getCertificate }
import { useState } from "react"
import { createCertificate } from '../services/api'
import { useNavigate } from 'react-router-dom'

function Issuer() {

  const [studentName, setstudentName] = useState('')
  const [assessmentName, setassessmentName] = useState('')
  const [score, setscore] = useState('')
  const [totalMarks, settotalMarks] = useState('')
  const [passMark, setpassMark] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token')

      const response = await createCertificate({
        studentName,
        assessmentName,
        score,
        totalMarks,
        passMark
      }, token)

      console.log(response.data)
      alert('Certificate created!')

    } catch (error) {
      console.log(error)
      alert('Failed to create certificate')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#0f0c29] to-[#1a1a3e] flex items-center justify-center">

      <div
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 w-[500px] shadow-2xl"
        style={{ animation: 'fadeInUp 0.8s ease forwards' }}
      >

        <h1 className="text-2xl font-bold text-white text-center mb-2">
          Issuer Dashboard
        </h1>

        <p className="text-center text-gray-400 text-sm mb-6">
          Issue a new certificate
        </p>

        {/* Inputs */}
        <input
          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-3 rounded-lg mb-4 outline-none focus:border-[#b8750a]"
          placeholder="Student Name"
          onChange={(e) => setstudentName(e.target.value)}
        />

        <input
          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-3 rounded-lg mb-4 outline-none focus:border-[#b8750a]"
          placeholder="Assessment Name"
          onChange={(e) => setassessmentName(e.target.value)}
        />

        <input
          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-3 rounded-lg mb-4 outline-none focus:border-[#b8750a]"
          placeholder="Score"
          onChange={(e) => setscore(e.target.value)}
        />

        <input
          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-3 rounded-lg mb-4 outline-none focus:border-[#b8750a]"
          placeholder="Total Marks"
          onChange={(e) => settotalMarks(e.target.value)}
        />

        <input
          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-3 rounded-lg mb-4 outline-none focus:border-[#b8750a]"
          placeholder="Pass Mark %"
          onChange={(e) => setpassMark(e.target.value)}
        />

        {/* Create */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#b8750a] text-white p-3 rounded-lg font-bold hover:bg-yellow-700 cursor-pointer transition-all duration-300 hover:scale-105 mt-2"
          style={{ animation: 'glow 2s ease-in-out infinite' }}
        >
          Create Certificate
        </button>

        {/* Logout */}
        <button
          onClick={() => {
            localStorage.clear()
            navigate('/login')
          }}
          className="w-full bg-white/10 text-white p-3 rounded-lg font-bold hover:bg-white/20 cursor-pointer transition-all duration-300 mt-2 border border-white/20"
        >
          Logout
        </button>

      </div>
    </div>
  )
}

export default Issuer
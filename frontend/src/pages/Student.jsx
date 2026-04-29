import React, { useEffect, useRef, useState } from 'react'
import CertificateTemplate from '../components/CertificateTemplate'
import { getCertificate } from '../services/api'
import html2canvas from 'html2canvas'
import { useNavigate } from 'react-router-dom'
import jsPDF from 'jspdf'

function Student() {

  const [studentName, setstudentName] = useState('')
  const [score, setscore] = useState('')
  const [assessmentName, setassessmentName] = useState('')
  const [certificateNo, setcertificateNo] = useState('')
  const [date, setdate] = useState('')

  const certRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    getCertificate(token)
      .then(res => {
        setstudentName(res.data.studentName)
        setscore(res.data.score)
        setassessmentName(res.data.assessmentName)
        setcertificateNo(res.data.certificateNo)

        setdate(
          new Date(res.data.issueDate).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })
        )
      })
      .catch(err => console.log(err))

  }, [])

  const downloadPNG = async () => {
    const canvas = await html2canvas(certRef.current)
    const link = document.createElement("a")
    link.download = "certificate.png"
    link.href = canvas.toDataURL()
    link.click()
  }

  const downloadPDF = async () => {
    const canvas = await html2canvas(certRef.current)
    const imgData = canvas.toDataURL()
    const pdf = new jsPDF('landscape')
    const width = pdf.internal.pageSize.getWidth()
    const height = pdf.internal.pageSize.getHeight()
    pdf.addImage(imgData, 'PNG', 0, 0, width, height)
    pdf.save('certificate.pdf')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#0f0c29] to-[#1a1a3e] p-6 flex flex-col items-center">

      {/* Certificate */}
      <div
        className="flex justify-center items-center w-full mt-10"
        style={{ animation: 'fadeInUp 1s ease forwards' }}
      >
        <div className="overflow-x-auto">
          <CertificateTemplate
            ref={certRef}
            studentName={studentName}
            score={score}
            assessmentName={assessmentName}
            certificateNo={certificateNo}
            date={date}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="max-w-5xl mx-auto flex gap-4 justify-center flex-wrap mt-6">

        <button
          onClick={downloadPNG}
          className="bg-[#1a2d5a] text-white px-6 py-3 rounded-full font-bold hover:bg-blue-900 transition-all duration-300 hover:scale-105 border border-[#b8750a]"
        >
          Download PNG
        </button>

        <button
          onClick={downloadPDF}
          className="bg-[#b8750a] text-white px-6 py-3 rounded-full font-bold hover:bg-yellow-700 transition-all duration-300 hover:scale-105"
          style={{ animation: 'glow 2s ease-in-out infinite' }}
        >
          Download PDF
        </button>

        <button
          onClick={() => {
            localStorage.clear()
            navigate('/login')
          }}
          className="bg-white/10 text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-all duration-300 border border-white/20"
        >
          Logout
        </button>

      </div>

    </div>
  )
}

export default Student
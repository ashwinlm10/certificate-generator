import { forwardRef } from 'react'
import logo from '../assets/logo.png'
import signature from '../assets/signature.png'
import seal from '../assets/seal.png'

const CertificateTemplate = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-[900px] h-[600px] bg-[#f5f0e8] border-8 border-[#1a2d5a] p-10 mx-auto"
    >
      {/* Inner Gold Border */}
      <div className="absolute inset-3 border-2 border-[#b8975a] pointer-events-none"></div>

      {/* Logo */}
      <img
        src={logo}
        className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
      />

      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2 
      text-9xl text-gray-200 opacity-10 
      -rotate-12 pointer-events-none 
      select-none">
        CERTIFIED
      </div>

      {/* Title */}
      <h1 className="text-center text-[#1a2d5a] text-3xl font-bold tracking-widest">
        CERTIFICATE OF ACHIEVEMENT
      </h1>

      {/* Subtitle */}
      <p className="text-center text-gray-500 text-sm italic mt-4">
        This is to proudly certify that
      </p>

      {/* Student Name */}
      <p className="text-center text-4xl font-bold text-[#1a2d5a] border-b-2 border-[#1a2d5a] pb-2 mx-16">
        {props.studentName}
      </p>

      <p className="text-center text-gray-600 text-sm mt-4">
        has successfully completed the assessment
      </p>

      {/* Assessment Name */}
      <p className="text-center text-[#b8750a] font-bold text-lg">
        {props.assessmentName}
      </p>

      <p className="text-center text-gray-600 text-sm">
        with a score of
      </p>

      {/* Score */}
      <p className="text-center text-[#b8750a] font-bold text-xl">
        {props.score}
      </p>

      {/* Bottom Section */}
      <div className="flex justify-between absolute bottom-10 left-10 right-10 text-sm">

        {/* LEFT → Seal + Certificate No */}
        <div className="flex flex-col items-center">
          <img
            src={seal}
            className="w-16 h-16"
          />
          <p className="mt-2 text-xs text-gray-600">
            {props.certificateNo}
          </p>
        </div>

        {/* RIGHT → Date + Signature */}
        <div className="text-right">
          <p className="text-xs text-gray-600 mb-1">
            {props.date}
          </p>
          <img
            src={signature}
            className="w-40 h-10 ml-auto"
          />
          <p className="text-xs text-gray-500 mt-1">
            Authorized Signatory
          </p>
        </div>

      </div>
    </div>
  )
})

export default CertificateTemplate
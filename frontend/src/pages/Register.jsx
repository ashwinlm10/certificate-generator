import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../services/api'
import logo from '../assets/logo.png'

function Register() {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [role, setrole] = useState('')

  const navigate = useNavigate()

  const handleRegisten = async () => {
    try {
      await registerUser({ name, email, password, role })
      navigate('/login')
    } catch (error) {
      alert('Registration failed!')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#0f0c29] to-[#1a1a3e] flex items-center justify-center">

      <div
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 w-96 shadow-2xl"
        style={{ animation: 'fadeInUp 0.8s ease forwards' }}
      >

        {/* Logo
        <img
          src={logo}
          alt="logo"
          className="w-16 h-16 mx-auto mb-4 rounded-full object-cover border-2 border-[#b8750a]"
          style={{ animation: 'float 3s ease-in-out infinite' }}
        /> */}

        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Register
        </h1>

        {/* Inputs */}
        <input
          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-3 rounded-lg mb-4 outline-none focus:border-[#b8750a]"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />

        <input
          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-3 rounded-lg mb-4 outline-none focus:border-[#b8750a]"
          type="email"
          placeholder="Enter your E-mail"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />

        <input
          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-3 rounded-lg mb-4 outline-none focus:border-[#b8750a]"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        {/* Select */}
        <select
  className="w-full bg-white/10 border border-white/20 text-white p-3 rounded-lg mb-4 outline-none focus:border-[#b8750a]"
  value={role}
  onChange={(e) => setrole(e.target.value)}
>
  <option value="" className="text-black">Select Role</option>
  <option value="student" className="text-black">Student</option>
  <option value="issuer" className="text-black">Issuer</option>
</select>

        {/* Button */}
        <button
          className="w-full bg-[#1a2d5a] text-white p-3 rounded-lg font-bold hover:bg-blue-900 cursor-pointer mb-4 transition-all duration-300 hover:scale-105 border border-[#b8750a]"
          onClick={handleRegisten}
        >
          Register
        </button>

        {/* Bottom */}
        <p className="text-center text-sm text-gray-400 mt-2">
          Already have an account?{" "}
          <span
            className="text-[#b8750a] cursor-pointer font-bold hover:underline"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  )
}

export default Register
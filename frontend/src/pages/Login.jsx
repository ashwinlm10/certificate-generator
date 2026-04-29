import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../services/api'
import logo from '../assets/logo.png'

function Login() {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await loginUser({ email, password })

      // save token
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('role', response.data.user.role)
      localStorage.setItem('name', response.data.user.name)

      // navigate based on role
      if (response.data.user.role === 'student') {
        navigate('/student')
      } else {
        navigate('/issuer')
      }

    } catch (error) {
      alert('Login failed!')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#0f0c29] to-[#1a1a3e] flex items-center justify-center">

      <div
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 w-96 shadow-2xl"
        style={{ animation: 'fadeInUp 0.6s ease forwards' }}
      >

        {/* Logo
        <img
          src={logo}
          alt="logo"
          className="w-16 h-16 mx-auto mb-4 rounded-full object-cover border-2 border-[#b8750a]"
          style={{ animation: 'float 3s ease-in-out infinite' }}
        /> */}

        {/* Title */}
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Login
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-3 rounded-lg mb-4 outline-none focus:border-[#b8750a]"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter the password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-3 rounded-lg mb-4 outline-none focus:border-[#b8750a]"
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-[#b8750a] text-white p-3 rounded-lg font-bold hover:bg-yellow-700 cursor-pointer mb-4 transition-all duration-300 hover:scale-105"
          style={{ animation: 'glow 2s ease-in-out infinite' }}
        >
          Login
        </button>

        {/* Bottom text */}
        <p className="text-center text-sm text-gray-400 mt-2">
          Don't have an account?{" "}
          <span
            onClick={() => navigate('/register')}
            className="text-[#b8750a] cursor-pointer font-bold hover:underline"
          >
            Register
          </span>
        </p>

      </div>
    </div>
  )
}

export default Login
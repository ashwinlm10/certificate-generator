import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#0f0c29] to-[#1a1a3e] flex flex-col items-center justify-center p-10">

      {/* Hero Section */}
      <div className="text-center mb-12">

        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="w-20 h-20 mx-auto mb-6 rounded-full object-cover border-4 border-[#b8750a]"
          style={{ animation: 'float 3s ease-in-out infinite' }}
        />

        {/* Title */}
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          <span className="shimmer">Certificate</span> Generator
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-center text-lg mb-8 max-w-md mx-auto">
          Create, manage, and download certificates instantly with a secure and modern system
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-16 justify-center flex-wrap">
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-3 bg-[#1a2d5a] text-white rounded-full font-bold hover:bg-blue-900 transition-all duration-300 hover:scale-105 border border-[#b8750a]"
          >
            Login as Student
          </button>

          <button
            onClick={() => navigate('/login')}
            className="px-8 py-3 bg-[#b8750a] text-white rounded-full font-bold hover:bg-yellow-700 transition-all duration-300 hover:scale-105"
            style={{ animation: 'glow 2s ease-in-out infinite' }}
          >
            Login as Issuer
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">

        {/* Card 1 */}
        <div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-[#b8750a]"
          style={{ animation: 'fadeInUp 0.8s ease forwards' }}
        >
          <div className="text-4xl mb-4">🎓</div>
          <h3 className="text-[#b8750a] font-bold text-lg mb-2">
            Generate Certificate
          </h3>
          <p className="text-gray-400 text-sm">
            Easily create professional certificates in seconds
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-[#b8750a]"
          style={{ animation: 'fadeInUp 0.8s ease forwards' }}
        >
          <div className="text-4xl mb-4">🔐</div>
          <h3 className="text-[#b8750a] font-bold text-lg mb-2">
            Secure & Verified
          </h3>
          <p className="text-gray-400 text-sm">
            Authentication ensures certificates are valid and protected
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-[#b8750a]"
          style={{ animation: 'fadeInUp 0.8s ease forwards' }}
        >
          <div className="text-4xl mb-4">📥</div>
          <h3 className="text-[#b8750a] font-bold text-lg mb-2">
            Download Instantly
          </h3>
          <p className="text-gray-400 text-sm">
            Export certificates as PNG or PDF in one click
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;
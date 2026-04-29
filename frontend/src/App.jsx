// import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import Issuer from './pages/Issuer'
import Student from './pages/Student'
import Home from './pages/Home'
import Register from './pages/Register'
import ProtectedRoute from'./components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        {/* <Route path="/register" element={<Register />}/> */}
        {/* <Route path="/register" element={<Register />}/> */}
        
        <Route path="/student" element={
            <ProtectedRoute allowedRole="student">
              <Student />
            </ProtectedRoute>
  }/>
      <Route path="/issuer" element={
          <ProtectedRoute allowedRole="issuer">
            <Issuer />
      </ProtectedRoute>
}/>
       

      </Routes>      
    </BrowserRouter>
  )
}

export default App


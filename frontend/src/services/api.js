import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:5000'
})

// Register
export const registerUser = (data) => {
  return API.post('/api/auth/register', data)
}

// Login
export const loginUser = (data) => {
  return API.post('/api/auth/login', data)
}

// Create Certificate
export const createCertificate = (data, token) => {
  return API.post('/api/certificate/create', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

// Get Certificate
export const getCertificate = (token) => {
  return API.get('/api/certificate/get', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
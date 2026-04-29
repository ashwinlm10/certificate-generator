// This is like a SECURITY GUARD for pages
// If no token → send to login page
// If wrong role → send to login page



import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children, allowedRole}) => {
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')

    //no token = no login
    if(!token) return <Navigate to='/' />

    //wrong role = not allowed
    if(allowedRole && role !== allowedRole){
    return <Navigate to='/' />
    }
    //All good = show the page
    return children
}
export default ProtectedRoute
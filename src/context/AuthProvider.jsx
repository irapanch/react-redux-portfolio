import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')
    const navigate = useNavigate() 
    const login = name => {
        setUser(name)
        
    }
    const logout = () => {
        setUser('')
        toast.success('Logout is done')
        navigate('/')
    }
    const isLoggedIn = Boolean(user)
    const value = {
        login,
        logout,
        isLoggedIn,
        user,
    }
  return (
    <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
  )
}

export default AuthProvider
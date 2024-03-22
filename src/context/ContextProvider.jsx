import React, { useState } from 'react'

export const MyContext = React.createContext()

const ContextProvider = ({children}) => {
  const [userName, setUsername] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const login =({ name, email })=>{
    setUsername(name)
    setUserEmail(email)
  }
  const logout = () => {
    setUsername('')
    setUserEmail('')
  }
    const valueForContext = {
        user: {
            name: userName,
            email: userEmail,
        },
        login,
        logout,
        isLoggedIn: Boolean(userName),
    }
  return (
    <MyContext.Provider value={valueForContext}>{children}</MyContext.Provider>
  )
}

export default ContextProvider
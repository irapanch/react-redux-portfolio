import React, { useState } from 'react'
import { createContext } from 'react'

export const ThemeContext = createContext()

const ThemeProviderContext = ({children}) => {
    const [theme, setTheme] = useState('light')
    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    const value = {
      theme,
      changeTheme,
    }
  return (
    <ThemeContext.Provider value={value}>
        {children}
        </ThemeContext.Provider>)
}

export default ThemeProviderContext
import React, { createContext, useState } from 'react'

export const HoverContext = createContext()

export const HoverProvider = ({ children }) => {
  const [hover, setHover] = useState('')

  const removeHover = () => {
    setHover('')
  }

  const value = {
    hover,
    setHover,
    removeHover,
  }

  return (
    <HoverContext.Provider value={value}>
      {children}
    </HoverContext.Provider>
  )
}

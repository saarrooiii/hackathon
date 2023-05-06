import React, { useContext } from 'react'
import { HoverContext } from '../contexts/hover-context'

export const useHover = () => {
  const context = useContext(HoverContext)

  if (!context) {
    throw new Error('useStorage must be used within a StorageProvider')
  }

  return context
}

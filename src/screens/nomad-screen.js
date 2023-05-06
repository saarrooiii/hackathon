import React from 'react'
import { SearchingForScreenComponent } from '../components/searching-for'

const NomadScreen = () => {
  return (
    <SearchingForScreenComponent 
      selected={[
        'salud',
        'paisajes',
        'wifi',
      ]}
    />
  )
}

export default NomadScreen
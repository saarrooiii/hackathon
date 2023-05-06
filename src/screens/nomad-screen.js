import React from 'react'
import { SearchingForScreenComponent } from '../components/searching-for'

const NomadScreen = () => {
  return (
    <SearchingForScreenComponent 
      selected={[
        'alojamiento',
        'paisajes',
        'wifi',
      ]}
    />
  )
}

export default NomadScreen
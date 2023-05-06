import React from 'react'
import { SearchingForScreenComponent } from '../components/searching-for'

const TouristScreen = () => {
  return (
    <SearchingForScreenComponent 
      selected={[
        'paisajes',
        'historia',
        'animales',
        'gastronomia',
      ]}
    />
  )
}

export default TouristScreen
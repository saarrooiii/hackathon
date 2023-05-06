import React from 'react'
import { SearchingForScreenComponent } from '../components/searching-for'

const PartyBoyScreen = () => {
  return (
    <SearchingForScreenComponent 
      selected={[
        'fiestas-de-pueblo',
        'eventos-culturales',
        'gastronomia',
      ]}
    />
  )
}

export default PartyBoyScreen
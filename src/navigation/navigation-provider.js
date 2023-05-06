import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

export const NavigationProvider = ({ children }) => {
  const prefixes = []
  const config = {
    initialRouteName: 'home',
    screens: {
      'home': '',
      'nomad': 'nomada-digital/',
      'tourist': 'turista-rural/',
      'party-boy': 'joven-fiestero/',
      'other': 'otro/',
      'map-list': 'mapa/',
      'comarca-detail': 'comarcas/:comarca',
    },
  }
  const linking = {
    prefixes: prefixes,
    config: config,
  }

  return (
    <NavigationContainer linking={linking}>
      {children}
    </NavigationContainer>
  )
}

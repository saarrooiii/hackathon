import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

export const NavigationProvider = ({ children }) => {
  const prefixes = []
  const config = {
    initialRouteName: 'home',
    screens: {
      'home': '',
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

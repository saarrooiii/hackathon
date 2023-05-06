import React from 'react'
import { MD3LightTheme as DefaultTheme, Provider } from 'react-native-paper'
import { blue200, green50, blue500, green600, green900, gray400, gray50, gray600, gray900, red50, red600, red900, white, green500, gray200 } from '../constants/colors'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,

    primary: '#05fbbd', //gray900,
    onPrimary: gray900, // white,
    primaryContainer: green50,
    onPrimaryContainer: green900,

    background: white,
    onBackground: gray900,
    surface: white,
    onSurface: gray900,

    surfaceVariant: white,
    onSurfaceVariant: gray600,
    outline: gray400,

    error: red600,
    onError: white,
    errorContainer: red50,
    onErrorContainer: red900,

  },
}

export const PaperProvider = ({ children }) => {
  return (
    <Provider theme={theme}>
      {children}
    </Provider>
  )
}

import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationProvider } from './src/navigation/navigation-provider'
import { Screens } from './src/navigation/screens'
import { NativeWindStyleSheet } from "nativewind"
import { PaperProvider } from './src/contexts/paper-context'
import { HoverProvider } from './src/contexts/hover-context'

NativeWindStyleSheet.setOutput({
  default: "native",
})

export default function App() {

  return (
    <PaperProvider>
      <NavigationProvider>
        <HoverProvider>
          <StatusBar style="auto" />
          <Screens />
        </HoverProvider>
      </NavigationProvider>
    </PaperProvider>
  )
}

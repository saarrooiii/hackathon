import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/home-screen'

const Stack = createNativeStackNavigator()

export const Screens = () => {
  const screenOptions = {
    headerShown: false,
  }

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="home" options={{ title: 'title-placeholder' }} component={HomeScreen} />
    </Stack.Navigator>
  )
}

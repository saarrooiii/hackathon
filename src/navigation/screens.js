import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/home-screen'
import NomadScreen from '../screens/nomad-screen'
import TouristScreen from '../screens/tourist-screen'
import PartyBoyScreen from '../screens/party-boy-screen'

const Stack = createNativeStackNavigator()

export const Screens = () => {
  const screenOptions = {
    headerShown: false,
  }

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="home" options={{ title: 'Comarca.es' }} component={HomeScreen} />
      <Stack.Screen name="nomad" options={{ title: 'Comarca.es | Nómada digital' }} component={NomadScreen} />
      <Stack.Screen name="tourist" options={{ title: 'Comarca.es | Turista rural' }} component={TouristScreen} />
      <Stack.Screen name="party-boy" options={{ title: 'Comarca.es | Joven fiestero' }} component={PartyBoyScreen} />
    </Stack.Navigator>
  )
}

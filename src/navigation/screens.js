import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/home-screen'
import NomadScreen from '../screens/nomad-screen'
import TouristScreen from '../screens/tourist-screen'
import PartyBoyScreen from '../screens/party-boy-screen'
import MapListScreen from '../screens/map-list-screen'
import OtherScreen from '../screens/other-screen'
import ComarcaDetailScreen from '../screens/comarca-detail-screen'

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
      <Stack.Screen name="other" options={{ title: 'Comarca.es | Otro'}} component={OtherScreen} />
      <Stack.Screen name="map-list" options={{ title: 'Comarca.es | Mapa' }} component={MapListScreen} />
      <Stack.Screen name="comarca-detail" options={{ title: 'Comarca.es | Comarca' }} component={ComarcaDetailScreen} />
    </Stack.Navigator>
  )
}

import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { TopNavigationBar } from '../components/navigation-bar'
import { ScreenWrapper } from '../components/screen-wrapper'
import { gray900 } from '../constants/colors'

const AIPanel = () => {
  return (
    <View className="mx-auto w-full lg:max-w-7xl my-8 sm:my-24">{/* sm:my-48 */}
      <View className="flex-row w-full items-center justify-between pb-4">
        <Text className="text-3xl font-semibold">Explícale a nuestra IA qué estás buscando</Text>
        <Button className="rounded-full" icon="magnify" mode="contained" onPress={() => {navigation.navigate('map-list')}}>Buscar</Button>
      </View>
      <TextInput theme={{ colors: { primary: gray900} }} label="Yo estoy buscando..." mode="outlined" multiline="true" numberOfLines={5} />
    </View>
  )
}

const OtherScreen = () => {
  return (
    <ScreenWrapper styleName={{ View: 'bg-white' }}>
      <TopNavigationBar />

      <ScrollView className="p-4">
        <AIPanel />
      </ScrollView>
      
    </ScreenWrapper>
  )
}

export default OtherScreen
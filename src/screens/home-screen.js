import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { ScreenWrapper } from '../components/screen-wrapper'
import { TopNavigationBar } from '../components/navigation-bar'
import { Hoverable } from 'react-native-web-hooks'

const ActionItem = (props) => {
  // TODO: Hoverable
  const { label, icon, callToAction, ...rest } = props
  
  return (
    <Hoverable>
      {isHovered => (
        <View className={`rounded-lg p-8 items-center justify-center space-y-4 ${isHovered && 'bg-gray-100'}`}>
          <Image className={`w-24 h-24 ${isHovered && 'scale-105'}`} source={require(`../../assets/img/${icon}.png`)} />
          <Text className={`text-xl font-semibold ${isHovered ? 'text-gray-900' : 'text-gray-900'}`}>{label}</Text>
        </View>
      )}
    </Hoverable>
  )
}

const ActionPanel = () => {
  return (
    <View className="mx-auto w-full h-full max-h-96 max-w-2xl lg:max-w-7xl p-4 sm:px-12 sm:py-24 my-8 sm:my-48 flex-row items-center justify-evenly border border-gray-200 rounded-lg">
      <ActionItem label="Soy nómada digital" icon="nomada-digital" callToAction={undefined} />
      <ActionItem label="Soy turista rural" icon="turista-rural" callToAction={undefined} />
      <ActionItem label="Soy un joven fiestero" icon="joven-fiestero" callToAction={undefined} />
    </View>
  )
}

const HomeScreen = () => {
  return (
    <ScreenWrapper styleName={{ View: 'bg-white' }}>
      <TopNavigationBar />

      <ScrollView className="py-4">
        <ActionPanel />
      </ScrollView>
      
    </ScreenWrapper>
  )
}

export default HomeScreen
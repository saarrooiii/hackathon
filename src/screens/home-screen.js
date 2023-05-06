import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { ScreenWrapper } from '../components/screen-wrapper'
import { TopNavigationBar } from '../components/navigation-bar'
import { Hoverable } from 'react-native-web-hooks'
import { Link } from '../components/link'

const Item = (props) => {
  const { label, icon, screen, ...rest } = props
  
  return (
    <Hoverable>
      {isHovered => (
        <Link to={{ screen: screen }} className={`rounded-lg m-4 p-8 items-center justify-center space-y-4 ${isHovered && 'bg-gray-100'}`}>
          <Image className={`w-24 h-24 ${isHovered && 'scale-105'}`} source={require(`../../assets/img/${icon}.png`)} />
          <Text className={`text-xl font-semibold text-center ${isHovered ? 'text-gray-900' : 'text-gray-900'}`}>{label}</Text>
        </Link>
      )}
    </Hoverable>
  )
}

const Panel = () => {
  return (
    <View className="mx-auto w-full lg:max-w-7xl my-8 sm:my-48">{/* sm:my-48 */}
      <Text className="text-3xl font-semibold pb-4">¿Tu quién eres?</Text>
      <View className="p-4 sm:px-12 sm:py-24 border border-gray-200 rounded-lg flex sm:flex-row items-center justify-evenly flex-wrap">
        <Item label="Soy un nómada digital" icon="nomada-digital" screen="nomad" />
        <Item label="Soy un turista rural" icon="turista-rural" screen="tourist" />
        <Item label="Soy un joven fiestero" icon="joven-fiestero" screen="party-boy" />
        <Item label="No lo sé" icon="otro" screen="other" />
      </View>
    </View>
  )
}

const HomeScreen = () => {
  return (
    <ScreenWrapper styleName={{ View: 'bg-white' }}>
      <TopNavigationBar />

      <ScrollView className="p-4">
        <Panel />
      </ScrollView>
      
    </ScreenWrapper>
  )
}

export default HomeScreen
import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { ScreenWrapper } from '../components/screen-wrapper'
import { TopNavigationBar } from '../components/navigation-bar'
import { Hoverable } from 'react-native-web-hooks'
import { Link } from '../components/link'


const SelectableItem = (props) => {
  const { label, icon, screen, selected: isSelected, ...rest } = props
  
  return (
    <Hoverable>
      {isHovered => (
        <Link to={{ screen: screen }} className={`w-48 h-48 m-8 rounded-lg p-8 items-center justify-center space-y-6 ${isHovered && 'bg-gray-100'}`}>
          <Image className={`w-12 h-12 ${isHovered && 'scale-105'}`} source={require(`../../assets/img/${icon}.png`)} />
          <Text className={`text-xl font-semibold text-center ${isHovered ? 'text-gray-900' : 'text-gray-900'}`}>{label}</Text>
        </Link>
      )}
    </Hoverable>
  )
}

const Panel = () => {
  const [items, setItems] = useState()

  const updateItems = (item) => {
    setItems(_items => {
      if (_items.includes(item)) {
        // TODO
      }
    })
  }

  return (
    <View className="mx-auto w-full lg:max-w-7xl my-8 sm:my-24">
      <Text className="text-3xl font-semibold pb-4">¿Qué estás buscando?</Text>
      <View className="box-border p-4 sm:p-6 border border-gray-200 rounded-lg flex sm:flex-row sm:flex-wrap items-center justify-evenly">
        <SelectableItem label="Salud" icon="salud" />
        <SelectableItem label="Fiestas de pueblo" icon="fiestas-de-pueblo" />
        <SelectableItem label="Eventos culturales" icon="eventos-culturales" />
        <SelectableItem label="Gastronomía" icon="gastronomia" />
        <SelectableItem label="Paisajes" icon="paisajes" />
        <SelectableItem label="WIFI" icon="wifi" />
        <SelectableItem label="Historia" icon="historia" />
        <SelectableItem label="Animales" icon="animales" />
      </View>
    </View>
  )
}

const NomadScreen = () => {
  return (
    <ScreenWrapper styleName={{ View: 'bg-white' }}>
      <TopNavigationBar />

      <ScrollView className="p-4">
        <Panel />
      </ScrollView>
      
    </ScreenWrapper>
  )
}

export default NomadScreen
import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { ScreenWrapper } from '../components/screen-wrapper'
import { Hoverable } from 'react-native-web-hooks'
import { TopNavigationBar } from './navigation-bar'
import { Button } from 'react-native-paper'

const SelectableItem = (props) => {
  const { label, item, items, setItems, ...rest } = props

  const onPress = () => {
    setItems((_items) => {
      console.log(_items)
      if (_items.includes(item)) {
        return _items.filter((_item) => {return _item !== item})
      } else {
        return [..._items, item]
      }
    })
  }
  
  return (
    <Hoverable>
      {isHovered => (
        <Pressable onPress={onPress} className={`w-48 h-48 m-8 rounded-lg p-8 items-center justify-center space-y-6 ${isHovered && 'bg-gray-100'} ${items.includes(item) && 'bg-gray-100 border-2 border-gray-900'}`}>
          <Image className={`w-12 h-12 ${isHovered && 'scale-105'}`} source={require(`../../assets/img/${item}.png`)} />
          <Text className={`text-xl font-semibold text-center ${isHovered ? 'text-gray-900' : 'text-gray-900'}`}>{label}</Text>
        </Pressable>
      )}
    </Hoverable>
  )
}

const Panel = (props) => {
  const { selected } = props
  const [items, setItems] = useState(selected || [])

  return (
    <View className="mx-auto w-full lg:max-w-7xl my-8 sm:my-24">
      <Text className="text-3xl font-semibold pb-4">¿Qué estás buscando?</Text>
      <View className="box-border p-4 sm:p-6 border border-gray-200 rounded-lg flex sm:flex-row sm:flex-wrap items-center justify-evenly">
        <SelectableItem items={items} setItems={setItems} label="Alojamiento" item="alojamiento" />
        <SelectableItem items={items} setItems={setItems} label="Fiestas de pueblo" item="fiestas-de-pueblo" />
        <SelectableItem items={items} setItems={setItems} label="Eventos culturales" item="eventos-culturales" />
        <SelectableItem items={items} setItems={setItems} label="Gastronomía" item="gastronomia" />
        <SelectableItem items={items} setItems={setItems} label="Paisajes" item="paisajes" />
        <SelectableItem items={items} setItems={setItems} label="WIFI" item="wifi" />
        <SelectableItem items={items} setItems={setItems} label="Historia" item="historia" />
        <SelectableItem items={items} setItems={setItems} label="Animales" item="animales" />
      </View>
      <View className="flex-row items-center justify-end pt-6">
        <Button className="rounded-full" labelStyle={{ fontWeight: 500, fontSize: 24 }} contentStyle={{ flexDirection: 'row-reverse', padding: '12px' }} icon="arrow-right" mode="contained" onPress={() => {}}>Buscar</Button>
      </View>
    </View>
  )
}

export const SearchingForScreenComponent = (props) => {
  const { selected } = props

  return (
    <ScreenWrapper styleName={{ View: 'bg-white' }}>
      <TopNavigationBar />

      <ScrollView className="p-4">
        <Panel selected={selected} />
      </ScrollView>
      
    </ScreenWrapper>
  )
}

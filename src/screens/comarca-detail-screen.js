import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ScreenWrapper } from '../components/screen-wrapper'
import { TopNavigationBar } from '../components/navigation-bar'

const ComarcaDetail = () => {
  return (
    <View className="lg:flex-1 lg:self-start lg:w-[50%] p-4 sm:px-0 lg:py-0 space-y-4 mr-2">

      <View className="space-y-2">
        <Text className="text-3xl font-semibold text-gray-900">
          Comarcas Placeholder
        </Text>

      </View>

      <View className="flex sm:flex-row items-center justify-evenly flex-wrap">
        <Text>características...</Text>
      </View>
    </View>
  )
}

const ComarcaMap = () => {
  return (
    <View className="flex-1 lg:w-[50%] pb-4 lg:pb-0 lg:ml-2">
      <View className="max-h-[600px] relative rounded-xl border border-gray-200 w-full flex-1 aspect-square aspect-w-1 aspect-h-1">
        <View className="w-full h-full bg-gray-200 rounded-lg"></View>
      </View>
    </View>
  )
}


const ComarcaDetailScreen = () => {
  return (
    <ScreenWrapper styleName={{ View: 'bg-white' }}>
      <TopNavigationBar />

      <ScrollView>
        <View className="mx-auto w-full lg:max-w-7xl my-8 lg:my-24 flex-col-reverse sm:flex lg:flex-row lg:space-x-8 p-4">

          <ComarcaDetail />
          <ComarcaMap />

        </View>
      </ScrollView>

    </ScreenWrapper>
  )
}

export default ComarcaDetailScreen
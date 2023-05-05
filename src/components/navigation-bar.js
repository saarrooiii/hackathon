import { View, Text, Image } from 'react-native'
import React from 'react'
import { Hoverable } from 'react-native-web-hooks'
import { Link } from './link'
import { ImageLogo } from './logo'

export const TopNavigationBar = () => {
  return (
    <View className="bg-white border-b border-gray-200 w-full">
      <View className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <View className="flex-row justify-between items-center">

          <Hoverable>
            {isHovered => (
              <Link to={{ screen: 'home' }} className={`p-2 flex-row space-x-4 justify-center items-center rounded-lg ${isHovered && 'scale-105 bg-gray-50'}`}>
                <ImageLogo className="w-12 h-12" />
                <Text className="text-xl font-semibold">Comarca</Text>
              </Link>
            )}
          </Hoverable>

          <Hoverable>
            {isHovered => (
              <Link to={{ screen: 'home' }} className={`p-2 rounded-lg ${isHovered && 'scale-105 bg-gray-50'}`}>
                <Image className="w-12 h-12 rounded-full" source={require('../../assets/img/profile-pic-placeholder.png')} />
              </Link>
            )}
          </Hoverable>

        </View>
      </View>
    </View>
  )
}

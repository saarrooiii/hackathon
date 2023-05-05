import { SafeAreaView, View } from 'react-native'
import React from 'react'

export const ScreenWrapper = (props) => {
  const { children, styleName={ SafeAreaView: '', View: '' } } = props

  return (
    <SafeAreaView className={`bg-white h-full w-full ${styleName.SafeAreaView}`}>
      <View className={`bg-gray-100 h-full w-full overflow-hidden min-w-[320px] ${styleName.View}`}>
        {children}
      </View>
    </SafeAreaView>
  )
}

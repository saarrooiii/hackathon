import React from 'react'
import { Image } from 'react-native'

export const ImageLogo = (props) => {

  return (
    <Image
      source={require('../../assets/img/tmp-logo.png')}
      {...props}
    />
  )
}

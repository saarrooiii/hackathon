import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScreenWrapper } from '../components/screen-wrapper'
import { TopNavigationBar } from '../components/navigation-bar'
import { useRoute } from '@react-navigation/native'
import { comarcas as mockComarcas } from '../mock/comarcas'
import { Hoverable } from 'react-native-web-hooks'
import { Link } from '../components/link'
import { useHover } from '../hooks/use-hover'

const CaracteristicaItem = (props) => {
  const { item } = props

  const { hover, setHover, removeHover } = useHover()

  return (
    <Hoverable onHoverIn={() => {setHover(item.caracteristica)}} onHoverOut={removeHover}>
      {isHovered => (
        <View className={`rounded-lg my-4 p-8 ${isHovered && 'bg-gray-100'} ${hover === item.caracteristica && 'bg-gray-100'} `}>
        <View className="flex-row items-center">
          <Image 
            source={require(`../../assets/img/${item.caracteristica}.png`)}
            className={`w-12 h-12 mr-4 ${isHovered && 'scale-105'}`}
          />{/* TODO fix: hover scale 105 */}
          <Hoverable>
            {isHovered => (
              <Link to={{ screen: '' }}>
                <Text className={`text-xl font-semibold ${isHovered ? 'text-blue-500' : 'text-gray-900'} `}>{item.nombre}</Text>
              </Link>
            )}
          </Hoverable>
        </View>
        <Text className="pt-4 text-base text-gray-500">{item.descripcion}</Text>
      </View>
      )}
    </Hoverable>
  )
}

const ComarcaDetail = (props) => {
  const { comarca } = props

  return (
    <View className="lg:flex-1 lg:self-start lg:w-[50%] p-4 sm:px-0 lg:py-0 space-y-4 mr-2">

      <View className="space-y-2">
        <Text className="text-3xl font-semibold text-gray-900 pb-2">
          Comarca {comarca.label}
        </Text>
        {comarca.descripcion.map((item, i) => (
          <CaracteristicaItem key={i} item={item} />
        ))}
      </View>

    </View>
  )
}

const CaracteristicaMapItem = (props) => {
  const { caracteristica } = props
  const { hover, setHover, removeHover } = useHover()

  const [top, setTop] = useState('')
  const [left, setLeft] = useState('')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setTop(`${Math.round(Math.random() * 60 + 20)}%`)
    setLeft(`${Math.round(Math.random() * 60 + 20)}%`)
  }, [])

  return (
    <Hoverable onHoverIn={() => {setHover(caracteristica)}} onHoverOut={removeHover}>
      {isHovered => (
        <View style={{ positon: 'absolute', top: top, left: left }} className={`w-12 h-12 absolute ${isHovered && 'scale-110' } ${hover === caracteristica && 'scale-110'} `}>
          <Image
            className="w-full h-full object-cover rounded-xl"
            source={require(`../../assets/img/${caracteristica}.png`)}
          />
        </View>
      )}
    </Hoverable>
  )
}

const ComarcaMap = (props) => {
  const { comarca } = props

  return (
    <View className="flex-1 lg:w-[50%] pb-4 lg:pb-0 lg:ml-2">
      <View className="max-h-[600px] relative rounded-xl border border-gray-200 w-full flex-1 aspect-square aspect-w-1 aspect-h-1 overflow-hidden">
        <Image
          source={require('../../assets/img/mapa-zoom.png')}
          className="w-full h-full object-cover"
        />
        {comarca.caracteristicas.map((caracteristica, i) => (
          <CaracteristicaMapItem key={i} caracteristica={caracteristica} />
        ))}
      </View>
    </View>
  )
}


const ComarcaDetailScreen = () => {
  const route = useRoute()

  const id = route.params.id

  const comarca = mockComarcas.find(comarca => comarca.id === id)

  return (
    <ScreenWrapper styleName={{ View: 'bg-white' }}>
      <TopNavigationBar />

      <ScrollView>
        <View className="mx-auto w-full lg:max-w-7xl my-8 lg:my-24 flex-col-reverse sm:flex lg:flex-row lg:space-x-8 p-4">

          <ComarcaDetail comarca={comarca} />
          <ComarcaMap comarca={comarca} />

        </View>
      </ScrollView>

    </ScreenWrapper>
  )
}

export default ComarcaDetailScreen
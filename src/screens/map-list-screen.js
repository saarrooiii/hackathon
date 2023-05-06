import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScreenWrapper } from '../components/screen-wrapper'
import { useRoute } from '@react-navigation/native'
import { TopNavigationBar } from '../components/navigation-bar'
import { Hoverable } from 'react-native-web-hooks'
import { Link } from '../components/link'
import { comarcas as mockComarcas } from '../mock/comarcas'
import { useHover } from '../hooks/use-hover'

const PinMapa = (props) => {
  const { id } = props
  const { hover, setHover, removeHover } = useHover()

  return (
    <Hoverable onHoverIn={() => {setHover(id)}} onHoverOut={removeHover}>
      {isHovered => (
        <Link to={{ screen: 'comarca-detail', params: { id: id } }} className={`w-12 h-12 ${isHovered && 'scale-110' } ${hover === id && 'scale-110'} `}>
          <Image
            className="w-full h-full object-cover rounded-xl"
            source={require('../../assets/img/pin-mapa.png')}
          />
        </Link>
      )}
    </Hoverable>
  )
}

const Map = (props) => {
  const { comarcas } = props

  return (
    <View className="flex-1 lg:w-[50%] pb-4 lg:pb-0 lg:ml-2">
      <View className="max-h-[600px] relative rounded-xl border border-gray-200 w-full flex-1 aspect-square aspect-w-1 aspect-h-1">
        <Image
          source={require('../../assets/img/mapa.png')}
          className="w-full h-full"
          style={{ resizeMode: 'contain' }}
        />
        {comarcas.map((comarca, i) => (
          <View key={i} className={`absolute ${comarca.styleName}`}>
            <PinMapa id={comarca.id} />
          </View>
        ))}
      </View>
    </View>
  )
}

const ComarcaItem = (props) => {
  const { comarca } = props

  const { hover, setHover, removeHover } = useHover()

  return (
    <View className="my-1">
      <Hoverable onHoverIn={() => {setHover(comarca.id)}} onHoverOut={removeHover}>
        {isHovered => (
          <Link to={{ screen: 'comarca-detail', params: { id: comarca.id} }} className={`w-48 h-48 m-8 p-2 rounded-lg items-center justify-center space-y-6 ${isHovered && 'bg-gray-100'} ${hover === comarca.id && 'bg-gray-100'} `}>
            <Image className={`w-12 h-12 ${isHovered && 'scale-105'}`} source={require(`../../assets/img/${comarca.image}.png`)} />
            <Text className="text-xl font-semibold text-center text-gray-900">Comarca {comarca.label}</Text>
          </Link>
        )}
      </Hoverable>
    </View>
  )
}

const ComarcaList = (props) => {
  const { comarcas } = props

  return (
    <View className="lg:flex-1 lg:self-start lg:w-[50%] p-4 sm:px-0 lg:py-0 space-y-4 mr-2">

      <View className="space-y-2">
        <Text className="text-3xl font-semibold text-gray-900">
          {/* Abre tu mente. Hay vida más allá de la ciudad. */}
          Comarcas recomendaas para tí
        </Text>
        {/*
        <Text className="text-xl font-semibold text-gray-500">
          Comarcas para tí
        </Text>
        */}
      </View>
      
      <View className="flex sm:flex-row items-center justify-evenly flex-wrap">
        {comarcas.map((comarca, i) => (
          <ComarcaItem key={i} comarca={comarca} />
        ))}
      </View>
    </View>
  )
}

const MapListScreen = () => {
  const [comarcas, setComarcas] = useState([])

  useEffect(() => {
    const fetchComarcas = () => {
      const _comarcas = mockComarcas.filter(comarca => Math.random() < 0.66)
      setComarcas(_comarcas)
    }

    fetchComarcas()
  }, [])

  return (
    <ScreenWrapper styleName={{ View: 'bg-white' }}>
      <TopNavigationBar />

      <ScrollView>
        <View className="mx-auto w-full lg:max-w-7xl my-8 lg:my-24 flex-col-reverse sm:flex lg:flex-row lg:space-x-8 p-4">

          <ComarcaList comarcas={comarcas} />
          <Map comarcas={comarcas} />

        </View>
      </ScrollView>

    </ScreenWrapper>
  )
}

export default MapListScreen

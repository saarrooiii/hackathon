import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScreenWrapper } from '../components/screen-wrapper'
import { useRoute } from '@react-navigation/native'
import { TopNavigationBar } from '../components/navigation-bar'
import { Hoverable } from 'react-native-web-hooks'
import { Link } from '../components/link'
import { comarcas as mockComarcas } from '../mock/comarcas'

const PinMapa = (props) => {
  const { hover, setHover } = props

  return (
    <Hoverable onHoverIn={() => {setHover('1')}} onHoverOut={() => {setHover('')}}>
      {isHovered => (
        <View className={`w-12 h-12 ${isHovered && 'scale-110' } ${hover === '1' && 'scale-110'} `}>
          <Image
            className="w-full h-full object-cover rounded-xl"
            source={require('../../assets/img/pin-mapa.png')}
          />
        </View>
      )}
    </Hoverable>
  )
}

const Map = (props) => {
  const { hover, setHover } = props
  const route = useRoute()
  
  const requirements = route.params.requirements // TODO fix: split by spaces and make into list

  return (
    <View className="flex-1 lg:w-[50%] pb-4 lg:pb-0 lg:mr-4">
      <View className="relative rounded-xl border border-gray-200 w-full h-full flex-1 aspect-square aspect-w-1 aspect-h-1">
        <Image
          source={require('../../assets/img/mapa.png')}
          className="w-full h-full"
          style={{ resizeMode: 'contain' }}
        />
        <View className="absolute top-[16%] left-[36%]">
          <PinMapa hover={hover} setHover={setHover} />
        </View>
        <View className="absolute top-[40%] left-[50%]">
          <PinMapa hover={hover} setHover={setHover} />
        </View>
        <View className="absolute top-[55%] left-[40%]">
          <PinMapa hover={hover} setHover={setHover} />
        </View> 
        <View className="absolute top-[25%] left-[70%]">
          <PinMapa hover={hover} setHover={setHover} />
        </View> 
        <View className="absolute top-[39%] left-[87%]">
          <PinMapa hover={hover} setHover={setHover} />
        </View> 
      </View>
    </View>
  )
}

const ComarcaItem = (props) => {
  const { label, hover, setHover } = props

  return (
    <View className="my-1 mr-auto">
      <Hoverable onHoverIn={() => {setHover('1')}} onHoverOut={() => {setHover('')}}>
        {isHovered => (
          <Link to={{ screen: '' }} className={`p-4 rounded-lg ${isHovered && 'bg-gray-50'} ${hover === '1' && 'bg-gray-50'} `}>
            <Text className={`text-xl font-semibold ${isHovered ? 'text-gray-900' : 'text-gray-500'}`}>Comarca {label}</Text>
          </Link>
        )}
      </Hoverable>
    </View>
  )
}

const ComarcaList = (props) => {
  const { comarcas, hover, setHover } = props

  return (
    <View className="lg:flex-1 lg:self-start lg:w-[50%] p-4 sm:px-0 lg:py-0 space-y-4">
      <Text className="text-3xl font-semibold text-gray-900 pb-2">
        Comarcas para tí
      </Text>
      <Text className="text-xl font-semibold text-gray-500">
        Abre tu mente. Hay vida más allá de la ciudad.
      </Text>
      <View>
        {comarcas.map((comarca, i) => (
          <ComarcaItem key={i} comarca={comarca} hover={hover} setHover={setHover} />
        ))}
      </View>
    </View>
  )
}

const MapListScreen = () => {
  const route = useRoute()

  const [hover, setHover] = useState('')
  const [comarcas, setHovers] = useState([])

  useEffect(() => {
    const fetchComarcas = () => {
      let _requirements = route?.params?.requirements?.split("%20")
      const requirements = _requirements.filter(requirement => requirement.length > 1 )
      console.log('requirements: ' + requirements)
  
      const comarcaMatchesRequirements = (comarca) => {
        let contains = true
        for (let requirement in requirements) {
          if (comarca.caracteristicas.includes(requirement)) {
            contains = false
          }
        }
        return contains
      }
  
      const _comarcas = mockComarcas.filter(comarca => comarcaMatchesRequirements(comarca))
      console.log('comarcas: ' + JSON.stringify(_comarcas))
      setHovers(_comarcas)
    }

    fetchComarcas()
  }, [])

  return (
    <ScreenWrapper styleName={{ View: 'bg-white' }}>
      <TopNavigationBar />

      <ScrollView>
        <View className="mx-auto w-full lg:max-w-7xl my-8 lg:my-24 flex-col-reverse sm:flex lg:flex-row lg:space-x-8 p-4">

          <ComarcaList hover={hover} setHover={setHover} comarcas={comarcas} />
          <Map hover={hover} setHover={setHover} comarcas={comarcas} />

        </View>
      </ScrollView>

    </ScreenWrapper>
  )
}

export default MapListScreen

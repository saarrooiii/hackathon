import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { Button, HelperText, TextInput } from 'react-native-paper'
import { TopNavigationBar } from '../components/navigation-bar'
import { ScreenWrapper } from '../components/screen-wrapper'
import { gray900 } from '../constants/colors'

const x = "sk-orsKZ6E3xznL0Fc0"
const y = "Ktt0T3BlbkFJQQ3Q"
const z = "L0fjzIoxVQ88de7i"

axios.defaults.headers.common['Authorization'] = `Bearer ${x}${y}${z}`

const AIPanel = () => {
  const navigation = useNavigation()
  
  const [text, setText] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isSubmited, setIsSubmited] = useState(false)

  const askChatGPT = async () => {
    setIsSubmited(true)
    const data = {
      "model": "text-davinci-003",
      "prompt": `basado en la siguiente data en formato JSON: [{\"id\":\"1\",\"label\":\"Vallesol\",\"image\":\"vallesol\",\"caracteristicas\":[\"alojamiento\",\"gastronomia\",\"paisajes\",\"animales\",\"fiestas-de-pueblo\",\"Casa Rural La Monta\u00F1a\",\"Fiesta de San Juan\",\"Restaurante El Roble\",\"Picos de Europa\",\"Oso pardo\"]},{\"id\":\"2\",\"label\":\"Marcastillo\",\"image\":\"marcastillo\",\"caracteristicas\":[\"alojamiento\",\"paisajes\",\"wifi\",\"fiestas-de-pueblo\",\"gastronomia\",\"Hotel Rural El Encinar\",\"Parque Nacional de Caba\u00F1eros\",\"Biblioteca P\u00FAblica\",\"Fiesta de San Juan\",\"Restaurante El Mes\u00F3n\"]},{\"id\":\"3\",\"label\":\"Tierrahonda\",\"image\":\"tierrahonda\",\"caracteristicas\":[\"alojamiento\",\"gastronomia\",\"paisajes\",\"animales\",\"Casa Rural La Monta\u00F1a\",\"Restaurante El Roble\",\"Picos de Europa\",\"Oso pardo\"]},{\"id\":\"4\",\"label\":\"Llanomar\",\"image\":\"llanomar\",\"caracteristicas\":[\"alojamiento\",\"paisajes\",\"wifi\",\"fiestas-de-pueblo\",\"gastronomia\",\"Hotel Rural El Encinar\",\"Parque Nacional de Caba\u00F1eros\",\"Biblioteca P\u00FAblica\",\"Fiesta de San Juan\",\"Restaurante El Mes\u00F3n\"]},{\"id\":\"5\",\"label\":\"Montecor\",\"image\":\"montecor\",\"caracteristicas\":[\"alojamiento\",\"paisajes\",\"wifi\",\"fiestas-de-pueblo\",\"gastronomia\"]}] quiero saber cual comarca me recomendarias sin que me menciones la palabra JSON: ${text}`,
      "max_tokens": 500,
      "temperature": 0
    }

    setIsLoading(true)
    try {
      const response = await axios.post('https://api.openai.com/v1/completions', data)
      console.log(response)
      setResponse(response.data.choices[0].text)
    } catch (error) {
      console.log(error)
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View className="mx-auto w-full lg:max-w-7xl my-8 sm:my-24">{/* sm:my-48 */}

      <View className="flex-row w-full items-center justify-between pb-4">
        <Text className="text-3xl font-semibold">Explícale a nuestra IA qué estás buscando</Text>
        <Button className="rounded-full" icon="robot" mode="contained" onPress={askChatGPT}>Preguntar</Button>
      </View>

      <View>
        <TextInput onChangeText={setText} theme={{ colors: { primary: gray900} }} label="Yo estoy buscando..." mode="outlined" maxLength={64} />
        <HelperText type="info" visible className="text-right text-base">
          {text.length} / 64
        </HelperText>
      </View>

      {isSubmited && (
        <View className="flex sm:flex-row justify-start">
          <View className="p-2 flex space-y-2 items-center justify-start text-center">
            <View className="w-16 h-16 rounded-full overflow-hidden border border-gray-200">
              <Image
                source={require('../../assets/img/openai-logo.png')}
                className="w-full h-full object-cover"
              />
            </View>
            <Text className="text-lg font-semibold text-gray-900">ChatGPT</Text>
          </View>
          {isLoading ? (
            <Text className="sm:pl-8 pt-8 text-lg text-gray-500 text-justify">Procesando petición...</Text>
          ) : (
            <>
              {error
                ? <Text className="sm:pl-8 pt-8 text-lg text-red-500 text-justify">Ha habido un error. Por favor, inténtalo de nuevo más tarde.</Text>
                : (
                  <>
                    <Text className="sm:pl-8 pt-8 text-lg text-gray-500 text-justify">{response || '¡Estoy aquí para ayudarte!'}</Text>
                    <View className="pl-6 flex-row items-center justify-end pt-6">
                      <Button className="rounded-full" labelStyle={{ fontWeight: 500, fontSize: 24 }} contentStyle={{ flexDirection: 'row-reverse', padding: '12px' }} icon="arrow-right" mode="contained" onPress={() => {navigation.navigate('map-list')}}>Siguiente</Button>
                    </View>
                  </>
                )
              }
            </>
          )}
        </View>
      )}
    </View>
  )
}

const OtherScreen = () => {
  return (
    <ScreenWrapper styleName={{ View: 'bg-white' }}>
      <TopNavigationBar />

      <ScrollView className="p-4">
        <AIPanel />
      </ScrollView>
      
    </ScreenWrapper>
  )
}

export default OtherScreen
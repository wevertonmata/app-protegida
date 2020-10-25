import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import {Video} from 'expo-av'

import styles from './styles'
import Estilo from '../../components/Estilo'

const comoajudar = () => {
  const navigator = useNavigation()

  function handleNavigateBack(){
    navigation.goBack()
  }
  
  return (
    <SafeAreaView style={Estilo.window}>
      <View style={Estilo.container}>

        <View style={styles.AreaText}>
            <TouchableOpacity onPress={handleNavigateBack}>
                    <Icons name="chevron-left" size={40} color="#000"  />
            </TouchableOpacity> 
            <Text style={styles.Text}>COMO POSSO AJUDAR?</Text>
        </View>
        
        <View style={styles.AreaSubText}> 
          <Text style={styles.Text}>GUIA INICIAL</Text>
        </View> 
        <View style={styles.AreaVideo}>
          <Video source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} 
              rate={1.0} isMuted={true} resizeMode="cover" shouldPlay  isLooping
              style={styles.Video}
          />
        </View>

        <View style={styles.AreaSubText}> 
          <Text style={styles.Text}>PERGUNTAS FREQUENTES</Text>
        </View> 

        <View style={styles.Ask}>
          <TouchableOpacity style={styles.ButtomAsk} onPress={() => 'Hallo'}>
              <Text style={styles.TitleAsk}>Como devo agir em um chamado?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtomAsk} onPress={() => 'Hallo'}>
              <Text style={styles.TitleAsk}>Como vou saber a localização da vitima?</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default comoajudar;
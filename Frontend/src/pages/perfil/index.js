import React,{useState} from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, Image } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles'
import Estilo from '../../components/Estilo'
import we from '../../assets/img/we.jpg'

const perfil = () => {
  const navigator = useNavigation()

  const [nome, setNome] = useState("Weverton Ryan R. Mata");
  const [email, setEmail] = useState("Pexie@123.com");
  const [celphone, setCelphone] = useState("(31) 98612-5073");
  

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
            <Text style={styles.Text}>EDITAR PERFIL</Text>
        </View>

        <View style={styles.AreaPhoto}>
            <Image source={we} style={styles.img} resizeMethod='auto'  />
            <TouchableOpacity onPress={ () => 'oi'} style={styles.camera}>
                    <Icons name="camera" size={40} color="#000"  />
            </TouchableOpacity> 
        </View>

        <View style={styles.data}>
          <View style={styles.campo}>
            <Text style={styles.title}>Nome:</Text>
            <Text style={styles.valor}>{nome}</Text>
            <TouchableOpacity onPress={ () => 'oi'} >
                    <Icons name="edit" size={25} color="#000"  />
            </TouchableOpacity> 
          </View>

          <View style={styles.campo}>
            <Text style={styles.title}>Email:</Text>
            <Text style={styles.valor}>{email}</Text>
            <TouchableOpacity onPress={ () => 'oi'} >
                    <Icons name="edit" size={25} color="#000"  />
            </TouchableOpacity> 
          </View>

          <View style={styles.campo}>
            <Text style={styles.title}>Celular:</Text>
            <Text style={styles.valor}>{celphone}</Text>
            <TouchableOpacity onPress={ () => 'oi'}>
                    <Icons name="edit" size={25} color="#000"  />
            </TouchableOpacity> 
          </View>

          <View style={styles.campo}>
            <Text style={styles.title}>Senha:</Text>
            <Text style={styles.valor}>**********</Text>
            <TouchableOpacity onPress={ () => 'oi'}>
                    <Icons name="edit" size={25} color="#000"  />
            </TouchableOpacity> 
          </View>
          
        </View>
      </View>
    </SafeAreaView>
  )
}

export default perfil;
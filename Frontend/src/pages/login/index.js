import React, { Component, useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, SafeAreaView, View, TouchableOpacity, TextInput} from 'react-native'
import Icons from 'react-native-vector-icons/Feather';


import styles from './styles'
import Estilo from '../../components/Estilo'

const login = () => {
    const navigation = useNavigation()

    const [email, setEmail] = useState('');   
    const [password, setPassword] = useState('');

    function handleNavigateBack(){
        navigation.goBack()
    }


    return (
        <SafeAreaView style={Estilo.window}>
            <View style={Estilo.container}>
                <View style={styles.top}>
                    <TouchableOpacity onPress={handleNavigateBack}>
                            <Icons name="chevron-left" size={60} color="#000"  />
                    </TouchableOpacity> 
                    <Text style={Estilo.title}>LOGIN</Text>
                </View>

                <View style={styles.medium}>
                    <View style={styles.TextPadding}>
                    <TextInput style={Estilo.TextInput} placeholder="Email..." onChangeText={email  => setEmail(email)} value={email} />
                    </View>
                    <View style={styles.TextPadding}>
                        <TextInput style={Estilo.TextInput} placeholder="Senha..." secureTextEntry={true} onChangeText={password  => setPassword(password)} value={password} />
                    </View>
                    <View style={styles.TextPadding}>
                        <TouchableOpacity style={Estilo.ButtomBlack} onPress={() => navigation.navigate('Feed')}>
                            <Text style={Estilo.ButtomTitleBlack}>Próximo</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.AreaSubTitle}  >
                        <TouchableOpacity style={Estilo.SubTitle} onPress={() => navigation.navigate('App')}>
                            <Text style={Estilo.TextSubTitle}>Esqueci Minha Senha</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>  
    )
}

export default login;
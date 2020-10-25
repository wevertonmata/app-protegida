import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, SafeAreaView,  } from 'react-native'
import {Video} from 'expo-av'

import play from '../../assets/video/Protegida_white.mp4'
import styles from './styles'
import Estilo from '../../components/Estilo'

export default class main extends Component {
    render() {
        return (
            <SafeAreaView style={Estilo.container}>

                <View style={styles.AreaText}>
                    <Text style={styles.Text}>BEM VINDO AO PROTEGIDA</Text>
                </View>

                <View  style={styles.PosImg}>
                    <Video source={play} rate={1.0} isMuted={true}
                        resizeMode="cover" shouldPlay  isLooping
                        style={{ width: 300, height: 300}}
                    />
                </View>

                <View style={styles.AreaButtomBlack} >
                    <TouchableOpacity style={Estilo.ButtomBlack} onPress={() => this.props.navigation.navigate('login')}>
                        <Text style={Estilo.ButtomTitleBlack}>Logar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.AreaButtomWhite}>
                    <TouchableOpacity style={Estilo.ButtomWhite} onPress={() => this.props.navigation.navigate('register')}>
                        <Text style={Estilo.ButtomTitleWhite}>Registrar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.AreaSubTitle}  >
                    <TouchableOpacity style={Estilo.SubTitle} onPress={() => "Oi"}>
                            <Text style={Estilo.TextSubTitle}>Termos de Uso</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        )
    }
}

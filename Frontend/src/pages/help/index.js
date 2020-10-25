import React, { Component } from 'react'
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native'
import Icons from 'react-native-vector-icons/Feather';
import {Video} from 'expo-av'

import play from '../../assets/video/Protegida_white.mp4'
import styles from './styles'
import Estilo from '../../components/Estilo'

export default class index extends Component {
    render() {
        return (
            <SafeAreaView style={Estilo.window}>
                <View style={Estilo.container}>
                    <View style={styles.background}>
                        <View style={styles.ViewTitle}>
                            <Text style={styles.title}>ALERTAR SEUS CONTATOS</Text>
                        </View>
                        <View style={styles.ViewButtom}>
                            <TouchableOpacity style={styles.Buttom}>  
                                <Video source={play} rate={1.0} isMuted={true}
                                    resizeMode="cover" shouldPlay  isLooping
                                    style={{ width: 400, height: 400, marginLeft:30}}
                                />
                                <View style={styles.ViewButtomTitle}>
                                    <Text style={styles.titleButtom}>CLIQUE  </Text>
                                    <Icons name="alert-circle" size={25} color="red"/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

import React, { Component } from 'react'
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import Protegida from './../../assets/img/team.png'

import styles from './styles'
import Estilo from '../../components/Estilo'

const Contats = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={Estilo.window}>
            <View style={Estilo.container}>
                <View style={styles.AreaTop}>
                    <View  style={styles.PosImg}>
                        <Image source={Protegida} style={styles.img} />
                    </View>
                    <Text style={Estilo.title}>Jane</Text>
                </View>

                <View style={styles.AreaButtomBlack} >
                    <TouchableOpacity style={Estilo.ButtomBlack} onPress={() => navigation.navigate('list_conts')}>
                        <Text style={Estilo.ButtomTitleBlack}>Lista de Contatos</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.AreaButtomWhite}>
                    <TouchableOpacity style={Estilo.ButtomWhite} onPress={() => navigation.navigate('register')}>
                        <Text style={Estilo.ButtomTitleWhite}>Editar Perfil</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.AreaButtomBlack} >
                    <TouchableOpacity style={Estilo.ButtomBlack} onPress={() => navigation.navigate('login')}>
                        <Text style={Estilo.ButtomTitleBlack}>Rastrear Interprete</Text>
                    </TouchableOpacity>
                </View>
            
            </View>
        </SafeAreaView>
    )
}

export default Contats;
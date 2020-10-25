import React, { useState } from 'react'
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native'
import Icons from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import Protegida from './../../assets/img/team.png'
import Bond from '../bond'

import styles from './styles'
import Estilo from '../../components/Estilo'


const list_conts = () => {
    const navigator = useNavigation()
    
    const [showAddList, setShowAddList] = useState(false);

    function handleNavigateBack(){
        navigation.goBack()
    }

    return (
        <SafeAreaView style={Estilo.window}>
            <View style={Estilo.container}>  
                <Bond isVisible={showAddList} onCancel={() => setShowAddList(false)} />
                <View style={styles.AreaText}>
                    <TouchableOpacity onPress={handleNavigateBack}>
                            <Icons name="chevron-left" size={40} color="#000"  />
                    </TouchableOpacity> 
                    <Text style={styles.Text}>CONTATOS VINCULADOS</Text>
                </View>

                <View style={styles.add}>
                    <TouchableOpacity style={Estilo.ButtomBlack} onPress={() => setShowAddList(true) }>
                            <Text style={Estilo.ButtomTitleBlack}>Vincular mais contato</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.centerCard}>
                    <View style={styles.card}>
                            <View  style={styles.PosImg}>
                                <Image source={Protegida} style={styles.img} />
                            </View>
                            <View style={styles.text}>
                                <Text style={styles.name}>Weverton Ryan </Text>
                                <Text style={styles.number}>(31) 98612-5073</Text>   
                            </View>
                            <TouchableOpacity style={styles.littleButtom} onPress={() => navigator.navigate('login')}>
                                <Text style={styles.littleButtomTitle}>ALERTAR</Text>
                            </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                            <View  style={styles.PosImg}>
                                <Image source={Protegida} style={styles.img} />
                            </View>
                            <View style={styles.text}>
                                <Text style={styles.name}>Weverton Ryan </Text>
                                <Text style={styles.number}>(31) 98612-5073</Text>   
                            </View>
                            <TouchableOpacity style={styles.littleButtom} onPress={() => navigator.navigate('login')}>
                                <Text style={styles.littleButtomTitle}>ALERTAR</Text>
                            </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                            <View  style={styles.PosImg}>
                                <Image source={Protegida} style={styles.img} />
                            </View>
                            <View style={styles.text}>
                                <Text style={styles.name}>Weverton Ryan </Text>
                                <Text style={styles.number}>(31) 98612-5073</Text>   
                            </View>
                            <TouchableOpacity style={styles.littleButtom} onPress={() => navigator.navigate('login')}>
                                <Text style={styles.littleButtomTitle}>ALERTAR</Text>
                            </TouchableOpacity>
                    </View>

                </View>

            </View>
        </SafeAreaView>
    )
}

export default list_conts
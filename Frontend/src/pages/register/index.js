import React, { Component, useState, useEffect } from 'react'
import { Text, SafeAreaView, View, TextInput, TouchableOpacity, CheckBox } from 'react-native'
import Icons from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import styles from './styles'
import Estilo from '../../components/Estilo'


const register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [checked, setChecked] = useState('first');
    const [checkbox, setCheckbox] = useState(false);

    const navigation = useNavigation()

    function validPhone (phone) {
        var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
        return regex.test(phone);
    }
    
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
                    <Text style={Estilo.title}>REGISTRO</Text>
                </View>

                <View style={styles.medium}>
                    <TextInput style={Estilo.TextInput} placeholder="Nome..." onChangeText={name  => setName(name)} value={name} />
                    <TextInput style={Estilo.TextInput} placeholder="Email..." onChangeText={email  => setEmail(email)} value={email} />
                    <TextInput style={Estilo.TextInput} placeholder="(31) 98858-8787" onChangeText={number  => setNumber(number)} value={number} />
                    <TextInput style={Estilo.TextInput} placeholder="Senha..." secureTextEntry={true} onChangeText={pass => setPassword(pass)} value={password} />
                    <TextInput style={Estilo.TextInput} placeholder="Confirmação Senha..." secureTextEntry={true} onChangeText={ pC => setPasswordConfirm(pC)} value={passwordConfirm} />
                    <View style={styles.radio}>
                        <RadioButton
                            value="first"
                            status={ checked === 'first' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('first')}
                            color="black"
                        />
                        <Text style={styles.TextRadio}>Voluntário</Text>
                        <RadioButton
                            value="second"
                            status={ checked === 'second' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('second')}
                            color="black" 
                        />
                        <Text style={styles.TextRadio}>Protegida</Text>
                    </View>
                </View>

                <View style={styles.bottom}>
                    <TouchableOpacity style={Estilo.ButtomBlack} onPress={() => this.props.navigation.navigate('login')}>
                        <Text style={Estilo.ButtomTitleBlack}>Próximo</Text>
                    </TouchableOpacity>
                    <View style={styles.AreaSubTitle}  >
                        <CheckBox
                            disabled={false}
                            value={checkbox}
                            onValueChange={(check) => setCheckbox(check)}
                        />
                    
                        <TouchableOpacity style={Estilo.SubTitle} onPress={() => "Termos aqui"}>
                            <Text style={Estilo.TextSubTitle}>Aceitar termos de uso</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                
            </View>
        </SafeAreaView>
    )

}

export default register
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    AreaText: {
        marginLeft: 32,
        marginTop: 50,
      },
    Text: {
      width: 350,
      height: 90,
      fontSize: 20,
      lineHeight: 42,
      textAlign: 'center',
      color: '#000000',
      position: "absolute",
      fontWeight: 'bold',
    },
    add: {
      marginTop: 25,
      justifyContent: 'center',
      alignItems: 'center'

    },
    centerCard: {
      alignItems: 'center'
    },
    card: {
      marginTop: 20,
      width: 350,
      height: 130,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#000',
    },
    littleButtom:{
      width: 200,
      height: 50,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: 'transparent',
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 140, 
      marginTop:0
    },
    littleButtomTitle:{
      fontWeight: 'bold',
      fontSize: 15,
      lineHeight: 15,
      color: '#fff',
      alignItems: 'center'
    }, 
    img: {
      width: 141/2,
      height: 145/2,
    },
    PosImg: {
      marginLeft: 20
    },
    name: {
      lineHeight: 40,
      fontWeight: 'bold',
      fontSize: 20,
      color: "gray"
    },
    number:{
      marginTop: -10,
      lineHeight: 40,
      fontWeight: 'bold',
      fontSize: 15,
      color: "gray",
    },
    text:{
      position:'absolute',
      marginLeft: 170,
      justifyContent:  'center',
      alignItems: 'center',
    }
});


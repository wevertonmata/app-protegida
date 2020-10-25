import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
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
    AreaPhoto: {
      alignItems: 'center',
      marginTop: 20
    },
    img:{
      width: 200,
      height: 200,
      borderRadius: 100,
    },
    camera: {
      marginTop: 10
    },
    data: {
      margin: 25,
    },
    campo:{
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 50
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginRight: 10
    },
    valor:{
      fontSize: 20,
      color: 'gray',
      marginRight: 10
    }
})

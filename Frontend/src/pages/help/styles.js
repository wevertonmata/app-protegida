import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    ViewButtom:{

        marginTop: 100
    },
    Buttom: {
        alignItems: 'center',
        shadowColor: 'tomato',
    },
    ViewTitle:{
        position: 'relative',
        marginTop: 50,
        // borderBottomWidth: 2
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    titleButtom:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    ViewButtomTitle: {
        flexDirection: 'row',
        width: 120,
        height: 40,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'red',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    }
});

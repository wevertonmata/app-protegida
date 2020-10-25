import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    top: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'baseline',
        justifyContent: 'flex-start',
        marginLeft: 0,
        marginTop: 70
    },
    medium: {
        flex: 6,

        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 10
    },

    bottom: {
        flex:3,
        alignItems: 'center',
    },
    AreaSubTitle: {
        marginTop: 17,
        flexDirection: 'row'
      },
      AreaButtomBlack: {
        position: "relative",
        marginLeft: 35,
        marginTop: 120,
      },
      radio: {
          flexDirection: 'row',
          justifyContent: "space-between"
      },
      TextRadio:{
        fontSize: 20,
        fontWeight: 'bold'
      }
})

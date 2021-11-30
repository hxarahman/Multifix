import { Platform, StyleSheet } from "react-native";
import { DIMENTIONS } from "../../constants";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: DIMENTIONS.height,
    },
    keyboardScrollView: {
      width: DIMENTIONS.width, 
      height: DIMENTIONS.height
    },
    logoContainer: {
      width: DIMENTIONS.width,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 200,
      height: 200,
    },
    logoText: {
      fontSize: Platform.OS === 'ios' ? 35 : 30,
      fontFamily: 'Nexa-Bold',
      marginTop: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      letterSpacing: 5,
      color: '#383838',
    },
    cardHeader: {
      fontSize: 25,
      fontFamily: 'Nexa-Bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    card: {
      width: DIMENTIONS.width,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      paddingVertical: 80,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    btnLarge: {
      height: 60,
      width: '80%',
      backgroundColor: '#fed700',
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    btnLargeTxt: {
      textAlign: 'center',
      fontFamily: 'Nexa-Bold',
      fontSize: 20,
      marginRight: 5,
    },
    link: {
      fontFamily: 'Nexa-Bold',
      fontSize: 15,
      marginTop: 20,
      color: '#4D8FAC',
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
    },
    label: { 
      fontSize: 15, 
      fontFamily: 'Nexa-Bold' 
    },
    input: {
      width: '80%',
      marginBottom: 5,
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      paddingVertical: 5,
      fontSize: 15,
      fontFamily: 'Nexa-Bold',
    },
    errors: {
      fontSize: 15,
      fontFamily: 'Nexa-Bold',
      color: 'red',
      marginBottom: 12,
    },
    message: {
      fontSize: 15,
      fontFamily: 'Nexa-Bold',
      color: 'black',
      marginBottom: 12,
    },
    authBtns: {
      flexDirection: 'row',
      marginTop: 25,
    },
    facebook: {
      width: 100,
      borderRadius: 5,
    },
    google: {
      width: 100,
      borderRadius: 5,
    },
    apple: {
      backgroundColor: 'black',
      width: 100,
      borderRadius: 5,
    },
  });
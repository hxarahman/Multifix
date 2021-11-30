import { StyleSheet } from "react-native";
import { DIMENTIONS } from "../../constants";

export const styles = StyleSheet.create({
    checkoutContainer:{ 
        width: '100%', 
        height: 60, 
        flexDirection: 'row', 
        position: 'absolute', 
        bottom: 0, 
        backgroundColor: '#fff' 
    },
    subtotalContainer:{ 
        width: '70%', 
        backgroundColor: '#e91e632e', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    subtotal:{ 
        fontSize: 16, 
        color: '#e91e63', 
        fontWeight: '600' 
    },
    checkout:{ 
        width: '30%', 
        backgroundColor: '#e91e63', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },

    modal: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        backgroundColor: 'white', 
        width: '80%', 
        height: 400, 
    },

    container: {
        backgroundColor: 'white',
        height: DIMENTIONS.height - 220,
    },
    backTextWhite: {
        color: '#FFF',
        fontSize: 18
    },
    rowFront: {
        backgroundColor: '#fff',
        padding: 15
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 150,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
});

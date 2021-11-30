import { Platform, StyleSheet } from "react-native";
import { DIMENTIONS } from "../../constants";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    leftView: {
        width: DIMENTIONS.width * 0.25,
        height: DIMENTIONS.height,
    },
    rightView: {
        width: DIMENTIONS.width * 0.75,
        height: DIMENTIONS.height,
    },
    categories: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: DIMENTIONS.width * 0.25,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: '#aaaaaa',
        borderStyle: 'solid'
    },
    icons: {
        width: 40,
        height: 40,
        marginBottom: 5
    },
    listView: {
        marginLeft: 15, 
        flexDirection: 'row', 
        alignItems: 'center', 
        borderBottomColor: 'black', 
        borderBottomWidth: 1,
        borderBottomColor: '#aaaaaa',
        paddingVertical:15
    },
    listIconView: {
        flex: 1,
        flexDirection: 'row-reverse'
    },
    listIcons: {
        color: '#e91e63',
        fontSize: 15,
        marginRight: 10
    },
    listText: {
        color: 'black',
        fontSize: 15,
    }
});
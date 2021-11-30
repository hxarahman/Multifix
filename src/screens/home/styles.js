import { StyleSheet } from "react-native";
import { DIMENTIONS } from "../../constants";

export const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#fff',
        height:DIMENTIONS.height
    },
    /*-- Header --*/
    header: {
        height: 75,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    appNameContainer: {
        width: '35%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appName: {
        fontSize: 25,
        fontFamily: 'Nexa-Bold',
        color: '#393939'
    },
    searchBtnContainer: {
        width: '65%',
        height: '100%',
    },
    searchBtn: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center',
    },
    search: {
        position:'relative',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '90%',
        borderColor: '#aaaaaa',
        borderWidth: 1,
        borderRadius: 25,
        padding: 5,
        justifyContent: 'center',
        alignItems:'center',
    },
    search_text: {
        fontSize: 15,
        marginLeft: 10,
        color: '#aaaaaa',
    },
    /*-- Slides --*/
    wrap: {
        width: DIMENTIONS.width,
        height: DIMENTIONS.height * 0.13,
        padding: 0,
        margin: 0,
    },
    wrapDot: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    dotActive: {
        margin: 3,
        color: '#e91e63',
        fontSize: 10,
    },
    dot: {
        margin: 3,
        color: '#6c757d',
        fontSize: 10,
    },

    catBoxContainer: {
        padding: 15,
        paddingTop: 20,
        backgroundColor: '#fff',
    },
    catBox: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: '#aaaaaa',
        borderRadius: 5,
    },
    catBoxButtons: {
        width: '33.333333%',
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#aaaaaa',
        paddingRight: 5,
        paddingLeft: 5,
    },
    catBoxIcons: {
        width: '80%',
        height: 80,
    },
    catBoxFooter: {
        width: '100%',
        padding: 20,
        borderWidth: 0.5,
        borderColor: '#aaaaaa',
    },
    catBoxFooterText: {
        fontSize: 16,
        color: '#e91e63',
    },
});
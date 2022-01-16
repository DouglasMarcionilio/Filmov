import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');
const style = StyleSheet.create({
    containerView: {
        width: width,
        height: height,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems:'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    modalSize:{
        height: height * 0.8,
        width: width * 0.95,
        backgroundColor: 'black',
        borderRadius: 15
    },
    imgBgView:{
        height: '30%',
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgSupBG: {
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgPoster: {
        height: '95%',
        width: '35%',
        backgroundColor: 'black',
        borderRadius: 10,
        shadowColor: 'white',
        elevation: 10,

    },
    poster: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    viewTitle: {
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    movieTitle:{
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        flexWrap: 'wrap',
    },
    overviewView: {
        height: '35%',
        width: '100%',
        paddingLeft: 8,
        paddingRight: 8,
    },
    overviewText: {
        color: 'white',
    },
    viewDataContainer: {
        flexDirection: 'row',
        width: '100%',
        height: '20%',
        alignContent: 'space-around',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10,
        marginBottom: 10
    },
    viewDataColumn: {
        width: '49%',
        height: '98%',
        alignContent: 'space-around',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    dataSingular: {
        width: '98%',
        height: '49%',
        flexDirection: 'row',
    },
    closeButtonView: {
        backgroundColor: 'red',
        flex: 1,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    IconView: {
        height: '100%',
        width: '20%',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    twoDataView: {
        width: '80%',
        height: '100%',
        alignContent: 'space-around',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    nameDataView: {
        height: '48.5%',
        width: '99%',
        justifyContent: 'flex-end',
    },
    valueDataView: {
        height: '48.5%',
        width: '99%',
        justifyContent: 'flex-start',
    },
    dataText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 13,
    },
    valueText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 12,
    },

});

export default style;
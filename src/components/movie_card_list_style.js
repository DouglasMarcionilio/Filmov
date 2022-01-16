import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';


const {width} = Dimensions.get('window');
const styleMovieCard = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
    },
    cardOut: {
        width: width / 2,
        height: width * 0.75,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    cardMovie: {
        width: width / 2.1,
        height: width * 0.72,
        alignItems: 'center',
        
    },
    imgPostView: {
        height: '85%',
        width: '100%',
    },
    imgPost: {
        height: '100%',
        width: '100%',
    },
    tituloview: {
        height: '25%',
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        
    },
    tituloFilme: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
        flexWrap: 'wrap',
        textAlign: 'center',
    }
});

export default styleMovieCard;
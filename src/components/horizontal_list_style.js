import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';


const {width} = Dimensions.get('window');
const styleHorizontalList =StyleSheet.create({
    container: {
        width, 
        height: width / 1.7, 
        alignItems: 'center',
    },
    movieCard: {
        width: width * .98,
        height: width / 1.7 - 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 6,
        marginBottom: 6,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    moviePoster: {
        width: width * .4,
        height: width / 1.8
    },
    movieData: {
        flexDirection: 'column',
        marginLeft: 7,
        marginTop: 1,

    },
    tituloFilme: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        flexWrap: 'wrap',
    },
    viewDescricao: {
        width: width * .559,
        height: width / 2.5,
        marginRight: 10,
        flexShrink: 1,
    },
    viewTitulo: {
        width: width * .559,
        marginRight: 10,
        flexShrink: 1,
    },
    descricaoFilme: {
        color: 'white',
    }
});

export default styleHorizontalList;
import React from 'react';
import { StyleSheet } from 'react-native';

const styleHome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    principaisText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
    },
    listRowView: {
        width: '100%',
        height: '30%',

    },
    listMovieRow: {
        flex: 1,
        backgroundColor: 'blue',
    },
    loading: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignContent:'center',
        alignItems: 'center',
    }
});

export default styleHome;

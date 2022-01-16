import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');
const styleSearchBar = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: ' 97%',
        height: width * .15,
        marginTop: 15,
        marginBottom: 5,
        alignSelf: 'center',
        borderRadius: 10,
    },
    input: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 10,
    }
});

export default styleSearchBar;
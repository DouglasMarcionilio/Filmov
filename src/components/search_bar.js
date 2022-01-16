import React from 'react';
import {TextInput, View} from 'react-native';
import styleSearchBar from './search_bar_style';

class SearchBar extends React.Component{
    render(){
        return (
            <View style={styleSearchBar.container}>
                <TextInput placeholder='Buscar'  placeholderTextColor='black' style={styleSearchBar.input}/>
            </View>
        );
    }
}

export default SearchBar;
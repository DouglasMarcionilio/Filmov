import React from 'react';
import { FlatList, View, Text, Dimensions, Image, ImageBackground } from 'react-native';
import styleHorizontalList from './horizontal_list_style';
import {baseImageUrl} from '../services/api';



class HorizontalList extends React.Component{
    render(){
        return <FlatList
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false} 
            data={this.props.obj}
            renderItem={({item}) => (
                <ImageBackground style={styleHorizontalList.container}
                    source={{uri: baseImageUrl + item.backdrop_path}}
                    blurRadius={10}
                >
                    <this.FilmeCard dados={item}/>
                </ImageBackground>
            )}
        />
    }

    FilmeCard(dados){
        var imageUrl= baseImageUrl + dados.dados.poster_path;
        return (
            <View style={styleHorizontalList.movieCard}>
                <View style={styleHorizontalList.moviePoster}>
                    <Image source={{ uri: imageUrl}} style={styleHorizontalList.moviePoster}/>
                </View>
                <View style={styleHorizontalList.movieData}>
                        <View style={styleHorizontalList.viewTitulo}>
                            <Text style={styleHorizontalList.tituloFilme}>{dados.dados.title}</Text>
                        </View>
                        <View style={styleHorizontalList.viewDescricao}>
                            <Text style={styleHorizontalList.descricaoFilme}>{dados.dados.overview.slice(0, 240)}...</Text>
                        </View>
                        <View style={styleHorizontalList.viewTitulo}>
                            <Text style={styleHorizontalList.descricaoFilme}>IMDB: {dados.dados.vote_average}</Text>
                        </View>
                        
                </View>
            </View>
        );
    }
}

export default HorizontalList;
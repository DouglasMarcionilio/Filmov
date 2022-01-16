import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styleMovieCard from './movie_card_list_style';
import {baseImageUrl} from '../services/api';
import Details from '../screens/details';

class MovieCardList extends React.Component{

    constructor(){
        super();
        this.onPressed = this.onPressed.bind(this);
    }

    state = {
        modalVisible: false,
        idClickedItem: 0,
    }

    onPressed = (idItem) =>{
        this.setState({
            modalVisible: !this.state.modalVisible,
            idClickedItem: idItem
        });
    };

    onPressedClose = () => {
        this.setState({
            modalVisible: !this.state.modalVisible,
            idClickedItem: 0
        });
    }

    render(){
        return (
            <View style={styleMovieCard.container}>
                <FlatList 
                    nestedScrollEnabled={true}
                    scrollEnabled={false}
                    pagingEnabled={false}
                    data={this.props.obj}
                    numColumns={2}
                    renderItem={({item}) => (
                        <View style={styleMovieCard.cardOut}>
                            <TouchableOpacity
                                onPress={() => this.onPressed(item.id)}
                            >
                                <this.MovieCard dados={item}/> 
                            </TouchableOpacity>
                        </View>
                    )}
                
                />
                <Details showModal={this.state.modalVisible} closeModal={this.onPressedClose} id={this.state.idClickedItem}/>
            </View>
        );
    }

    

    MovieCard(dados){
        var imageUrl= baseImageUrl + dados.dados.poster_path;
        return (
            <View  style={styleMovieCard.cardMovie}>
                <View style={styleMovieCard.imgPostView}>
                    <Image source={{ uri: imageUrl}} style={styleMovieCard.imgPost}/>
                </View>
                <View style={styleMovieCard.tituloview}>
                    <Text style={styleMovieCard.tituloFilme}>{dados.dados.title}</Text>
                </View>
            </View >
        );
    }
}


export default MovieCardList;
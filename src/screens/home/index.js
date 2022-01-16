import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, FlatList, ScrollView, LogBox, ActivityIndicator} from 'react-native';
import HorizontalList from '../../components/horizontal_list';
import MovieCard from '../../components/movie_card_list';
import SearchBar from '../../components/search_bar';
import styleHome from './style';;
import styleSearchBar from '../../components/search_bar_style';
import {api, apiKey, popularMovieUrl, topRatedUrl, apiSearch, searchFinal, search} from '../../services/api'
import MovieCardList from '../../components/movie_card_list';


class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state ={
            topMovies: [],
            allMovies: [],
            numPageM: 1,
            searchInput: '',
        }
        LogBox.ignoreLogs(["VirtualizedLists should never be nested", "Possible Unhandled Promise Rejection"]);
    }

    

    async componentDidMount(){
        await this.getApi();
    }

    async getApi(){
        const response = await api.get(popularMovieUrl);
        const reponseAllMovies = await api.get(topRatedUrl + this.state.numPageM);
        this.setState({
            topMovies: response.data.results,
            allMovies: response.data.results,
        });
    }

    async moreMovies(){
        this.setState({
            numPageM: this.state.numPageM + 1
        });
        const responseP = await api.get(topRatedUrl + this.state.numPageM);
        this.setState({
            allMovies: [...this.state.allMovies, ...responseP.data.results]
        });
    }

    isCloseToBottom({layoutMeasurement, contentOffset, contentSize}){
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - 5;
    }

    async searchMovie(){
        const response = await apiSearch.get(this.state.searchInput + searchFinal);
        this.setState({
            allMovies: response.data.results,
        });
        console.log('finalizou editing');
    }

    async changeText(value){
        this.setState({
            searchInput: value
        });
        if(value === ''){
            this.getApi();
        }else{
            const response = await apiSearch.get(value + searchFinal);
            this.setState({
                allMovies: response.data.results,
            });
            console.log(mudou);
        }
        
    }

    render(){
        if(this.state.topMovies.length === 0 ){
            this.getApi();
            return (
                <View style={styleHome.loading}>
                    <ActivityIndicator size='large' color='red' />
                </View>
            );
        } else {
            if(this.state.searchInput === ''){
                const dados = [this.state.topMovies[0], this.state.topMovies[1], this.state.topMovies[2],];
                const dadosAllM = this.state.allMovies.filter( function(el) {
                    return dados.indexOf(el) < 0;
                });
                return (
                    <View style={styleHome.container}>
                        <ScrollView 
                            nestedScrollEnabled={true}
                            onScroll={({nativeEvent}) => {
                                if(this.isCloseToBottom(nativeEvent)){
                                    this.moreMovies();
                                }
                            }}                        
                        >
                            <View style={styleSearchBar.container}>
                                <TextInput 
                                    placeholder='Buscar' 
                                    placeholderTextColor='black' 
                                    style={styleSearchBar.input}
                                    onChangeText={(value) => this.changeText(value)}
                                    onSubmitEditing={this.searchMovie}
                                />
                            </View>
                            <Text style={styleHome.principaisText}>Em Destaque</Text>
                            <View>
                                <HorizontalList obj={dados}/>
                            </View>
                            <Text style={styleHome.principaisText}>Todos os filmes</Text>
                            <View>
                                <MovieCardList obj={dadosAllM}/>
                            </View>
                        </ScrollView>
                        
                    </View>
                );
            } else {
                const dadosAllM = this.state.allMovies;
                return (
                    <View style={styleHome.container}>
                        <ScrollView 
                            nestedScrollEnabled={true}
                            onScroll={({nativeEvent}) => {
                                if(this.isCloseToBottom(nativeEvent)){
                                    this.moreMovies();
                                }
                            }}                        
                        >
                            <View style={styleSearchBar.container}>
                                <TextInput 
                                    placeholder='Buscar' 
                                    placeholderTextColor='black' 
                                    style={styleSearchBar.input}
                                    onChangeText={(value) => this.changeText(value)}
                                    onSubmitEditing={this.searchMovie}
                                />
                            </View>
                            <Text style={styleHome.principaisText}>Busca: </Text>
                            <View>
                                <MovieCardList obj={dadosAllM}/>
                            </View>
                        </ScrollView>
                        
                    </View>
                );
            }
            
        }
        
    }

    
}

export default HomeScreen;
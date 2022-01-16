import React from "react";
import { Modal, Text, View, TouchableOpacity, ImageBackground, Image } from "react-native";
import HorizontalList from "../../components/horizontal_list";
import style from "./style";
import MovieCardList from "../../components/movie_card_list";
import { api, urlById, baseImageUrl } from "../../services/api";
import  Icon  from "react-native-vector-icons/Ionicons";

class Details extends React.Component{

    constructor(){
        super();
    }

    closeModal = () => {
        this.setState({
            movieDetail: '' 
        });
        this.props.closeModal?.();
    }

    state = {
        movieDetail: '',
    }

    async getDetailMovieData(){
        const response = await api.get(urlById(this.props.id));
        this.setState({
            movieDetail: response.data
        });
    }

    render(){
        if(this.state.movieDetail === ''){
            this.getDetailMovieData();
            return <Text>Carregando</Text>
        }else{
            const poster = baseImageUrl + this.state.movieDetail.poster_path;
            const backdrop = baseImageUrl + this.state.movieDetail.backdrop_path;
            return (
                <Modal
                visible={this.props.showModal}
                transparent={true}
                animationType="fade"
                >
                    <View style={style.containerView}>
                        <View style={style.modalSize}>
                            <View style={style.imgBgView}>
                                <ImageBackground source={{uri: backdrop}} style={style.imgSupBG} blurRadius={10}>
                                    <View style={style.imgPoster}>
                                        <Image source={{uri: poster}} style={style.poster} />
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={style.viewTitle}>
                                <Text style={style.movieTitle}>
                                    {this.state.movieDetail.title}
                                </Text>
                            </View>
                            <View style={style.overviewView}>
                                <Text style={style.overviewText}>
                                    {this.state.movieDetail.overview}
                                </Text>
                            </View>
                            {/* container de todos os dados */}
                            <View style={style.viewDataContainer}>
                                {/* primeira coluna de dados */}
                                    <View style={style.viewDataColumn}>
                                        {/* container do dado */}
                                        <View style={style.dataSingular}>
                                            {/* container do icone dentro do dado */}
                                            <View style={style.IconView}>
                                                <Icon name="star" size={25} color={"white"} />
                                            </View>
                                            {/* container coluna do nome e valor */}
                                            <View style={style.twoDataView}>
                                                {/* container do nome */}
                                                <View style={style.nameDataView}>
                                                    <Text style={style.dataText}>AVALIAÇÃO IMDB</Text>
                                                </View>
                                                {/* container do valor */}
                                                <View style={style.valueDataView}>
                                                    <Text style={style.valueText}>{this.state.movieDetail.vote_average}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={style.dataSingular}>
                                            {/* container do icone dentro do dado */}
                                            <View style={style.IconView}>
                                                <Icon name="videocam" size={25} color={"white"} />
                                            </View>
                                            {/* container coluna do nome e valor */}
                                            <View style={style.twoDataView}>
                                                {/* container do nome */}
                                                <View style={style.nameDataView}>
                                                    <Text style={style.dataText}>GÊNERO</Text>
                                                </View>
                                                {/* container do valor */}
                                                <View style={style.valueDataView}>
                                                    <Text style={style.valueText}>{this.state.movieDetail.genres[0].name}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    {/* primeira coluna de dados */}
                                    <View style={style.viewDataColumn}>
                                        {/* container do dado */}
                                        <View style={style.dataSingular}>
                                            {/* container do icone dentro do dado */}
                                            <View style={style.IconView}>
                                                <Icon name="calendar" size={25} color={"white"} />
                                            </View>
                                            {/* container coluna do nome e valor */}
                                            <View style={style.twoDataView}>
                                                {/* container do nome */}
                                                <View style={style.nameDataView}>
                                                    <Text style={style.dataText}>LANÇAMENTO</Text>
                                                </View>
                                                {/* container do valor */}
                                                <View style={style.valueDataView}>
                                                    <Text style={style.valueText}>21-07-2021</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={style.dataSingular}>
                                            {/* container do icone dentro do dado */}
                                            <View style={style.IconView}></View>
                                            {/* container coluna do nome e valor */}
                                            <View style={style.twoDataView}>
                                                {/* container do nome */}
                                                <View style={style.nameDataView}></View>
                                                {/* container do valor */}
                                                <View style={style.nameDataView}></View>
                                            </View>
                                        </View>
                                    </View>
                            </View>
                            <TouchableOpacity style={style.closeButtonView}
                                onPress={this.closeModal} 
                            >
                                <Icon name="close" size={30} color={'white'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            );
        }
        
    }
}

export default Details;
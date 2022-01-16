
import axios from "axios";

//Exemplo de requisição API pt br: https://api.themoviedb.org/3/movie/76341?api_key=d1b3dbc18fb3881fb32fa3f8c838f775&language=pt-BR
//url image: https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
const baseAPIUrl = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'd1b3dbc18fb3881fb32fa3f8c838f775';
const popularMovieUrl = 'popular?api_key='+ apiKey +'&language=pt-BR&page=1';
const topRatedUrl = 'top_rated?api_key='+ apiKey +'&language=pt-BR&page=';
const search = 'https://api.themoviedb.org/3/search/movie?query=';
const searchFinal = '&api_key='+apiKey+'&language=pt-BR&page=1&include_adult=false';

const urlById = (id) => {
    return baseAPIUrl + id + '?api_key=' + apiKey +'&language=pt-BR';
}

const apiSearch = axios.create({
    baseURL: search
});

const api = axios.create({
    baseURL: baseAPIUrl
});

export {api, apiKey, popularMovieUrl, baseImageUrl, topRatedUrl, urlById, apiSearch, searchFinal, search};
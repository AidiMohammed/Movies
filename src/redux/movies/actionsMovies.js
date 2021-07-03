import {
    MOVIES_LOAD,
    MOVIES_SUCESS,
    MOVIES_ERROR,
    GET_MOVIE,
    REST_STATE} from './actionsTypes';
import axios from 'axios';

//--------------- actions
export const moviesAPILoad = () =>
{
    return{
        type: MOVIES_LOAD
    }
}

export const moviesSucess = movies =>
{
    return{
        type: MOVIES_SUCESS,
        paylod: movies
    }
}

export const moviesError = error =>
{
    return{
        type: MOVIES_ERROR,
        paylod: error
    }
}

export const getMovie = movie =>
{
    return{
        type: GET_MOVIE,
        paylod: movie
    }
}

export const resetState = () =>{
    return{
        type: REST_STATE
    }
}

//------------------------ dispatchers

export const GetTrending = (time_window,num_page) =>
{

    return dispatch =>
    {
        dispatch(moviesAPILoad());

        const api_key= 'c3e344079e651daccf822dba7e739968';

        axios.get(`https://api.themoviedb.org/3/trending/movie/${time_window}?api_key=${api_key}&page=${num_page}&language=fr`)
            .then(res =>{
                dispatch(moviesSucess(res.data.results))
            })
            .catch(err => {
                console.error(err.message)
                dispatch(moviesError(err.message))
            })
    }
}

export const GetPopular = (num_page) =>
{
    return dispatch =>
    {
        dispatch(moviesAPILoad())
        const api_key= 'c3e344079e651daccf822dba7e739968';

        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${num_page}&language=fr`)
        .then(res => {
            dispatch(moviesSucess(res.data.results))
        })
        .catch(err => dispatch(moviesError(err.message)))
    }
}

export const GetTopRated = (num_page) =>
{
    return dispatch =>
    {
        dispatch(moviesAPILoad())
        const api_key= 'c3e344079e651daccf822dba7e739968';

        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=${num_page}&language=fr`)
        .then(res => {
            dispatch(moviesSucess(res.data.results))
        })
        .catch(err => dispatch(moviesError(err.message)))
    }
}

export const GetUpComing = (num_page) =>
{
    return dispatch =>
    {
        dispatch(moviesAPILoad())
        const api_key= 'c3e344079e651daccf822dba7e739968';

        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=${num_page}&language=fr`)
        .then(res => {
            dispatch(moviesSucess(res.data.results))
        })
        .catch(err => dispatch(moviesError(err.message)))
    }
}

export const GetNowPlaying = (num_page) =>
{
    return dispatch =>
    {
        dispatch(moviesAPILoad())
        const api_key= 'c3e344079e651daccf822dba7e739968';

        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=${num_page}&language=fr`)
        .then(res => {
            dispatch(moviesSucess(res.data.results))
        })
        .catch(err => dispatch(moviesError(err.message)))
    }
}

export const GetMovie = (id) =>
{
    
    return dispatch =>{
        
        dispatch(moviesAPILoad())
        const api_key = 'c3e344079e651daccf822dba7e739968';

        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=fr`)
        .then(res => {
            dispatch(getMovie(res.data))
        }).catch(err => dispatch(moviesError(err.message)))
            
    }
}

export const RestState = () =>{
    return dispatch =>{
        dispatch(resetState());
    }
}
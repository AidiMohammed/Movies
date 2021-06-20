import {LOAD_TVSHOW,SUCCESS_TVSHOW,ERROR_TVSHOW,GET_TVSHOW} from './actionsTypes'
import axios from 'axios'

const loadAPITVShow = () =>
{
    return{
        type: LOAD_TVSHOW
    }
}


const successTVShow = tvshows =>
{
    return{
        type: SUCCESS_TVSHOW,
        paylod: tvshows
    }
}


const errorTVShow = error =>
{
    return{
        type: ERROR_TVSHOW,
        paylod: error
    }
}


const TVShow = tvshow =>
{
    return{
        type: GET_TVSHOW,
        paylod: tvshow
    }
}

//dispatchers
/*
    - il faut mettre à jour cette partie de code 
    - je dois mettre tout dans un seul dispatcheur
*/
export const AiringToDay = page_num =>
{
    return dispatch =>{
        dispatch(loadAPITVShow())

        const api_Key = 'c3e344079e651daccf822dba7e739968';
        
        axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${api_Key}&language=en-US&page=${page_num}`)
            .then(res => dispatch(successTVShow(res.data.results)))
            .catch(err => dispatch(errorTVShow(err.message)))
    }
}
export const onTheAir = page_num =>
{
    return dispatch =>{
        dispatch(loadAPITVShow())

        const api_Key = 'c3e344079e651daccf822dba7e739968';
        
        axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_Key}&language=en-US&page=${page_num}`)
            .then(res => dispatch(successTVShow(res.data.results)))
            .catch(err => dispatch(errorTVShow(err.message)))
    }
}
export const popular = page_num =>
{
    return dispatch =>{
        dispatch(loadAPITVShow())

        const api_Key = 'c3e344079e651daccf822dba7e739968';
        
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${api_Key}&language=en-US&page=${page_num}`)
            .then(res => dispatch(successTVShow(res.data.results)))
            .catch(err => dispatch(errorTVShow(err.message)))
    }
}
export const topRated = page_num =>
{
    return dispatch =>{
        dispatch(loadAPITVShow())

        const api_Key = 'c3e344079e651daccf822dba7e739968';
        
        axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${api_Key}&language=en-US&page=${page_num}`)
            .then(res => dispatch(successTVShow(res.data.results)))
            .catch(err => dispatch(errorTVShow(err.message)))
    }
}
export const GetTVShow = tv_id =>
{
    return dispatch => {
        dispatch(loadAPITVShow());

        const api_Key = 'c3e344079e651daccf822dba7e739968';
        
        axios.get(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=${api_Key}`)
            .then(res => dispatch(TVShow(res.data)))
            .catch(err => dispatch(errorTVShow(err.message)))
    }
}
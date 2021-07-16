import axios from 'axios';
import {
    SET_DETAILS,
    LODING,
    RESET_STATE,
    AUTHENTICATION,
    LISTS_CREATED,
    DELET_LIST,
    CREAT_NEW_LIST,
    GET_FAVORITES_MOVIES,
    REMOVE_MOVIE_FROM_FAVORITES_MOVIES} from './actionsTypes';

//***************** Actions ***************** 

const Action_resetState = () =>
{
    return{
        type: RESET_STATE
    }
}

export const Action_loding = () =>
{
    return{
        type: LODING
    }
}

const Action_setDetails = data =>
{
    return{
        type: SET_DETAILS,
        paylod: data
    }
}

const Action_authentication = data =>
{
    return{
        type: AUTHENTICATION,
        paylod: data
    }
}

const Action_getListesCreated = data =>
{
    return{
        type: LISTS_CREATED,
        paylod: data
    }
}

const Action_deletListe = listID =>
{
    return{
        type: DELET_LIST,
        paylod: listID
    }
}

const Action_CreatedNewList = data =>
{
    return{
        type: CREAT_NEW_LIST,
        paylod: data
    }
}

const Action_GetFavoritesMovies = data => {
    return{
        type: GET_FAVORITES_MOVIES,
        paylod: data
    }
}

const Action_RemoveMovieFromFavortiesMovies = movie_id =>
{
    return{
        type: REMOVE_MOVIE_FROM_FAVORITES_MOVIES,
        paylod: movie_id
    }
}

//***************** Dispatch ***************** 

export const DispatchResetState = () =>
{
    return dispatch =>{
        dispatch(Action_resetState());
    }
}

export const DispatchLoding = () =>
{
    return dispatch =>
    {
        dispatch(Action_loding());
    }
}

export const DispatchAuthentication = (sessionUser) => 
{
    return dispatch => dispatch(Action_authentication(sessionUser))
}


export const DispatchSetDetails = data =>
{
    return dispatch => dispatch(Action_setDetails(data))
} 

export const DispatchGetListsCreated = (accountID,sessionID) =>
{
    return dispatch => 
    {
        dispatch(Action_loding())

        axios.get(`https://api.themoviedb.org/3/account/${accountID}/lists?api_key=c3e344079e651daccf822dba7e739968&language=fr&session_id=${sessionID}&page=1`)
        .then(res => dispatch(Action_getListesCreated(res.data.results)))
        .catch(err => console.error(err.message))
    }
}

export const DispatchDeletList = (listID,session_id) =>
{
    return dispatch =>
    {

        dispatch(Action_deletListe(listID));
        axios.delete(`https://api.themoviedb.org/3/list/${listID}?api_key=c3e344079e651daccf822dba7e739968&session_id=${session_id}`)
        .then(res => 
        {
            dispatch(Action_deletListe(listID));
        })
        .catch(err => console.error("ERR Action delet dispatch : ",err));

    }
}

export const DispatchCreatedNewList = data => 
{
    return dispatch => 
    {
        const requestBody = {
            "name": data.name,
            "description": data.desc,
            "language": data.language
        }
        axios.post(`https://api.themoviedb.org/3/list?api_key=c3e344079e651daccf822dba7e739968&session_id=${data.session_id}`,requestBody)
            .then(res => {
                const newList = {
                    description: data.desc,
                    favorite_count: 0,
                    id: res.data.list_id,
                    iso_639_1: data.language,
                    item_count: 0,
                    list_type: "movie",
                    name: data.name,
                    poster_path: null
                }
                dispatch(Action_CreatedNewList(newList));
            })
            .catch(err => console.error("ERR created new list: ",err.message))
    } 
}

export const DispatchGetFavoritesMovies = (session_id,account_id) =>
{
    return dispatch =>{
        axios.get(`https://api.themoviedb.org/3/account/${account_id}/favorite/movies?api_key=c3e344079e651daccf822dba7e739968&session_id=${session_id}&language=en-US&sort_by=created_at.asc&page=1`)
            .then(res => {
                dispatch(Action_GetFavoritesMovies(res.data.results))
            })
            .catch(err => console.error("ERR : ",err.message))
    }
}

export const DispatchRemoveMovieFromFavortiesMovies = movie_id =>
{
    return dispatch =>{
        dispatch(Action_RemoveMovieFromFavortiesMovies(movie_id))
    }
}
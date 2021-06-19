import {
    MOVIES_LOAD,
    MOVIES_SUCESS,
    MOVIES_ERROR} from './actionsTypes';
import axios from 'axios';

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

export const GetTrending = (time_window) =>
{
    console.log("Get trending Movies window time : ",time_window)
    return dispatch =>{
        dispatch(moviesAPILoad());
        const api_key= 'c3e344079e651daccf822dba7e739968';

        axios.get(`https://api.themoviedb.org/3/trending/movie/${time_window}?api_key=${api_key}`)
            .then(res =>{
                dispatch(moviesSucess(res.data.results))
            })
            .catch(err => {
                console.error(err.message)
                dispatch(moviesError(err.message))
            })
    }
}
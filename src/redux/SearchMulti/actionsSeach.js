import axios from 'axios';
import {SEARCH_ERROE,SEARCH_LODING,SEARCH_SUCCESS} from './actionsTypes';

export const searchLoading = () =>
{
    return{
        type: SEARCH_LODING
    }
}

export const searchSeccess = result =>
{
    return{
        type: SEARCH_SUCCESS,
        paylod: result
   }
}

export const searchError = error =>
{
    return{
        type: SEARCH_ERROE,
        paylod: error
    }
}

export const onSerachString = (stringSearch,page_num) =>
{
    return dispatch => {
        dispatch(searchLoading())
        const api_key= 'c3e344079e651daccf822dba7e739968';
        
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&query=${stringSearch}&page=${page_num}&include_adult=false`)
            .then(res => dispatch(searchSeccess(res.data.results)))
            .catch(err => dispatch(searchError(err.message)))
    }
}
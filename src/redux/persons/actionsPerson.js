import {
    PERSON_ERROR,
    PERSON_LOAD,
    PERSON_SUCSSE} from './actionsTypes';
import axios from 'axios';

export const personAPILoad = () =>
{
    return{
        type: PERSON_LOAD
    }
}

export const personSucsse = persons =>
{
    return{
        type: PERSON_SUCSSE,
        paylod: persons 
    }
}

export const personError = error =>
{
    return{
        type: PERSON_ERROR,
        paylod: error
    }
}

export const GetPopularPerson = (page_num) =>
{
    return dispatch =>
    {
        dispatch(personAPILoad());

        console.log("Get popular person");

        const api_Key = 'c3e344079e651daccf822dba7e739968';

        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${api_Key}&language=en-US&page=${page_num}`)
            .then(res => {
                dispatch(personSucsse(res.data.results));
            })
            .catch(err => {
                dispatch(personError(err.message));
            })
    }
}
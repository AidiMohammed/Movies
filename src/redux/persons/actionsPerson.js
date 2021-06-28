import {
    PERSON_ERROR,
    PERSON_LOAD,
    PERSON_SUCSSE,
    GET_PERSON,
    GET_CREWS,
    GET_CASTS} from './actionsTypes';
import axios from 'axios';

const api_Key = 'c3e344079e651daccf822dba7e739968';

//actions

export const personAPILoad = () =>
{
    return{
        type: PERSON_LOAD
    }
}

export const personsSucsse = persons =>
{
    return{
        type: PERSON_SUCSSE,
        paylod: persons 
    }
}

export const personSucsse = person =>
{
    return{
        type: GET_PERSON,
        paylod: person
    }
}

export const personError = error =>
{
    return{
        type: PERSON_ERROR,
        paylod: error
    }
}

export const casts = casts =>
{
    return{
        type: GET_CASTS,
        paylod: casts
    }
}

export const crews = crews =>
{
    return{
        type: GET_CREWS,
        paylod: crews
    }
}

//dispatchers

export const GetPopularPerson = (page_num) =>
{
    return dispatch =>
    {
        dispatch(personAPILoad());

        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${api_Key}&language=en-US&page=${page_num}`)
            .then(res => dispatch(personsSucsse(res.data.results)))
            .catch(err => dispatch(personError(err.message)))
    }
}
export const GetPerson = person_id =>
{
    return dispatch =>
    {
        dispatch(personAPILoad())

        axios.get(`https://api.themoviedb.org/3/person/${person_id}?api_key=${api_Key}`)
            .then(res => dispatch(personSucsse(res.data)))
            .catch(err => dispatch(personError(err.message)))
    }
}

export const GetCastsAndCrews = movie_id =>
{
    return dispatch =>
    {
        dispatch(personAPILoad())

        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${api_Key}&language=en-US`)
            .then(res => {
                    console.log(res.data.cast)
                    dispatch(casts(res.data.cast));
                    dispatch(crews(res.data.crew));
                })
            .catch(err => dispatch(personError("Get Casts And Crews (catch)",err.message)))
    }
}
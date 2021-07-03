import axios from 'axios'
import {IS_LOGIN,GET_DETAILS,LODING} from './actionsTypes'

export const islogin = () =>
{
    return{
        type: IS_LOGIN
    }
}

export const loding = () =>
{
    return{
        type: LODING
    }
}

export const getDetails = data =>
{
    return{
        type: GET_DETAILS,
        paylod: data
    }
}

export const IsLogin = () =>
{
    return dispatch =>
    {
        dispatch(islogin());
    }
}

export const Loding = () =>
{
    return dispatch =>
    {
        dispatch(loding());
    }
}

export const GetDetails = session_id =>
{
    return dispatch =>
    {
        dispatch(loding());

        axios.get(`https://api.themoviedb.org/3/account?api_key=c3e344079e651daccf822dba7e739968&session_id=${session_id}`)
            .then(res => {
                dispatch(getDetails(res.data))
                console.log("RES DATA : ",res.data)
            })
            .catch(err => console.error(err.message))

    }
}
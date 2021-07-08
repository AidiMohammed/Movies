import axios from 'axios';
import {SET_DETAILS,LODING,RESET_STATE,AUTHENTICATION} from './actionsTypes';

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

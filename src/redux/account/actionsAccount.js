import {IS_LOGINE} from './actionsTypes'

export const islogine = () =>
{
    return{
        type: IS_LOGINE
    }
}

export const IsLogine = () =>
{
    return dispatch =>
    {
        dispatch(islogine);
    }
}
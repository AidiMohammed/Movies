import {PERSON_LOAD,PERSON_SUCSSE,PERSON_ERROR} from './actionsTypes';

const initState = {
    isLoading: false,
    persons: [],
    error: ""
}

const reducerPersons = (state = initState,action) => 
{
    switch (action.type)
     {
        case PERSON_LOAD:
            return{
                ...state,
                isLoading: true,
                persons: [],
                error: ""
            }
        case PERSON_SUCSSE:
            return{
                ...state,
                isLoading: false,
                persons: action.paylod,
                error: ""
            }
        case PERSON_ERROR:
            return{
                ...state,
                isLoading: false,
                persons: [],
                error: action.paylod
            }

        default: return state;
    }
} 

export default reducerPersons;
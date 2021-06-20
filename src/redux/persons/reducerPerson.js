import {PERSON_LOAD,PERSON_SUCSSE,PERSON_ERROR,GET_PERSON} from './actionsTypes';

const initState = {
    isLoading: false,
    persons: [],
    person: {},
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
        case GET_PERSON:
            return{
                ...state,
                isLoading: false,
                person: action.paylod,
                error: ""
            }

        default: return state;
    }
} 

export default reducerPersons;
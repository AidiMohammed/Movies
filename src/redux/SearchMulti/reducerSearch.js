import {SEARCH_ERROE,SEARCH_SUCCESS,SEARCH_LODING} from './actionsTypes'

const initState = {
    isloading: false,
    results: [],
    error: ""
}

const reducerSearch = (state= initState,action) =>
{
    switch (action.type) 
    {
        case SEARCH_LODING:
            return{
                ...state,
                isloading: true,
                error:""
            }
        case SEARCH_SUCCESS:
            return{
                ...state,
                isloading: false,
                results: action.paylod,
                error:""
            }
        case SEARCH_ERROE:
            return{
                ...state,
                isloading: false,
                results: [],
                error: action.paylod
            }
    
        default: return state
    }
} 

export default reducerSearch;
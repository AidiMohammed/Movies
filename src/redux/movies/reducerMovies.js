import {
    MOVIES_LOAD,
    MOVIES_SUCESS,
    MOVIES_ERROR} from './actionsTypes'

const initState = {
    isLoading: false,
    movies: [],
    error: ''
}

const reducerMovies = (state= initState,action) =>
{
    switch (action.type) 
    {
        case MOVIES_LOAD:
            return{
                    ...state,
                    isLoading: true,
                    movies: [],
                    error: ""
                }
            
        case MOVIES_SUCESS:
            return{
                    ...state,
                    isLoading: false,
                    movies: action.paylod,
                    error: ""
                }
            
        case MOVIES_ERROR:
            return{
                    ...state,
                    isLoading: false,
                    movies: [],
                    error: action.paylod
                }
        default: return state;
    }
} 

export default reducerMovies;
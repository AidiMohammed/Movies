import {
    MOVIES_LOAD,
    MOVIES_SUCESS,
    MOVIES_ERROR,
    GET_MOVIE} from './actionsTypes'

const initState = {
    isLoading: false,
    movies: [],
    movie: {},
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
                    error: "",
                    movie: {}
                }
            
        case MOVIES_SUCESS:
            return{
                    ...state,
                    isLoading: false,
                    movies: action.paylod,
                    error: "",
                    movie: {}
                }
            
        case MOVIES_ERROR:
            return{
                    ...state,
                    isLoading: false,
                    movies: [],
                    error: action.paylod,
                    movie: {}
                }
        case GET_MOVIE:
            {
                return{
                ...state,
                isLoading: false,
                movie: action.paylod,
                error: ""
                }
            }
        default: return state;
    }
} 

export default reducerMovies;
import {
    MOVIES_LOAD,
    MOVIES_SUCESS,
    MOVIES_ERROR,
    GET_MOVIE,
    REST_STATE} from './actionsTypes'

const initState = {
    isLoading: false,
    movies: [],
    movie: {},
    error: '',
    page_num: 1
}

const reducerMovies = (state= initState,action) =>
{
    switch (action.type) 
    {
        case MOVIES_LOAD:
            return{
                    ...state,
                    isLoading: true,
                    error: "",
                    movie: {}
                }
            
        case MOVIES_SUCESS:
            {
                const newListesMovies = [...state.movies,...action.paylod]
            return{
                    ...state,
                    isLoading: false,
                    movies: newListesMovies,
                    error: "",
                    movie: {},
                    page_num: state.page_num+1
                }
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
            return{
                    ...state,
                    isLoading: false,
                    movie: action.paylod,
                    error: ""
                }
        case REST_STATE:
            return{
                isLoading: false,
                movies: [],
                movie: {},
                error: "",
                page_num: 1
            }
        default: return state;
    }
} 

export default reducerMovies;
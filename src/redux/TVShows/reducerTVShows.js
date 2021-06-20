import {ERROR_TVSHOW,LOAD_TVSHOW,SUCCESS_TVSHOW,GET_TVSHOW} from './actionsTypes';

const initState = {
    isLoading: false,
    TVShows: [],
    TVShow: {},
    error: ""
}

const reducerTVShow = (state = initState,action) =>
{
    switch (action.type)
    {
        case LOAD_TVSHOW:
            return{
                ...state,
                isLoading: true,
                TVShows: [],
                error: "",
                TVShow: {}
            }
        case SUCCESS_TVSHOW:
            return{
                ...state,
                isLoading: false,
                TVShows: action.paylod,
                error: "",
                TVShow: {}
            }
        case GET_TVSHOW:
            return{
                ...state,
                isLoading: false,
                TVShows: [],
                error: "",
                TVShow: action.paylod
            }
        case ERROR_TVSHOW:
            return{
                ...state,
                isLoading: true,
                TVShows: [],
                error: action.paylod,
                TVShow: {}
            }
    
        default: return state;
    }
}
export default reducerTVShow;
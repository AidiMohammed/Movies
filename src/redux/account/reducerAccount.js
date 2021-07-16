import { loding } from './actionsAccount'
import {LODING,
        SET_DETAILS,
        RESET_STATE,
        AUTHENTICATION,
        LISTS_CREATED,
        DELET_LIST,
        CREAT_NEW_LIST,
        GET_FAVORITES_MOVIES,
        REMOVE_MOVIE_FROM_FAVORITES_MOVIES} from './actionsTypes'

const initState = {
    loding: false,
    islogin: false,
    createdLists: [],
    detailsAccount: {avatar:
                    {gravatar: {hash: undefined},
                    tmdb: {avatar_path: undefined}},
                    id: undefined,
                    include_adult: undefined,
                    iso_639_1: undefined,
                    iso_3166_1: undefined,
                    name: undefined,
                    username: undefined
                },
    favoriteMovies: {},
    favoriteTVShows: {},
    ratedMovies: {},
    ratedTVShows: {},
    ratedTVEpisodes: {},
    movieWatchList: {},
    TVShowWatchList: {},
    detailsList: {},
    session_id: {}
}

const reducerAccount = (state = initState, action) =>
{
    switch (action.type) {        
        case SET_DETAILS:
            return{
                ...state,
                detailsAccount: action.paylod,
                loding: false
            }
        case LODING:
            return{
                ...state,
                loding: true
            }
        case AUTHENTICATION:
            return{
                ...state,
                islogin: action.paylod.success,
                session_id: action.paylod.session_id,
            }
        case LISTS_CREATED:
            return{
                ...state,
                createdLists: action.paylod,
                loding: false
            }
        case DELET_LIST:
            {

                const newList = state.createdLists.filter((list) => list.id !== action.paylod && list)
                console.log("new list : ",newList)
                return {
                    ...state,
                    createdLists: newList
                }
            }
        case CREAT_NEW_LIST:
            return{
                ...state,
                createdLists: [...state.createdLists,action.paylod]
            }
        case GET_FAVORITES_MOVIES:
            return{
                ...state,
                favoriteMovies: action.paylod
            }

        case REMOVE_MOVIE_FROM_FAVORITES_MOVIES:
            {
                const newListFavorites = state.favoriteMovies.filter(movie => movie.id !== action.paylod && movie)
                return{
                    ...state,
                    favoriteMovies: newListFavorites
                }
            }

        case RESET_STATE:
            return state = initState

        default: return state;
    }
}

export default reducerAccount;
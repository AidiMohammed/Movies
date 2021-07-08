import { loding } from './actionsAccount'
import {LODING,SET_DETAILS,RESET_STATE,AUTHENTICATION} from './actionsTypes'

const initState = {
    loding: false,
    islogin: false,
    createdLits: [],
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
        case RESET_STATE:
            return state = initState

        default: return state;
    }
}

export default reducerAccount;
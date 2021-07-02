import {IS_LOGINE} from './actionsTypes'

const initState = {
    islogin: false,
    createdLits: [],
    detailsAccount: {},
    favoriteMovies: {},
    favoriteTVShows: {},
    ratedMovies: {},
    ratedTVShows: {},
    ratedTVEpisodes: {},
    movieWatchList: {},
    TVShowWatchList: {}
}

const reducerAccount = (state = initState, action) =>
{
    switch (action.type) {
        case IS_LOGINE:
            return{
                ...state,
                islogin: !state.islogin
            }
    
        default: return state;
    }
}

export default reducerAccount;
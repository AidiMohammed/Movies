import {IS_LOGIN,LODING,GET_DETAILS} from './actionsTypes'

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
        case IS_LOGIN:
            {
                console.log("**** toggle islogin ****")
                return{
                    ...state,
                    islogin: !state.islogin
                }
            }
        case GET_DETAILS:
            return{
                ...state,
                detailsAccount: action.paylod
            }
        default: return state;
    }
}

export default reducerAccount;
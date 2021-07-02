import {combineReducers} from 'redux';
import reducerMovies from './movies/reducerMovies';
import reducerPersons from './persons/reducerPerson';
import reducerTVShow from './TVShows/reducerTVShows';
import reducerSearch from './SearchMulti/reducerSearch'
import reducerAccount from './account/reducerAccount'

export default combineReducers({
    moviesModules: reducerMovies,
    personModules: reducerPersons,
    TVShowsModules: reducerTVShow,
    searchModules: reducerSearch,
    acountModules: reducerAccount
})
import {combineReducers} from 'redux';
import reducerMovies from './movies/reducerMovies';
import reducerPersons from './persons/reducerPerson';
import reducerTVShow from './TVShows/reducerTVShows';

export default combineReducers({
    moviesModules: reducerMovies,
    personModules: reducerPersons,
    TVShowsModules: reducerTVShow
})
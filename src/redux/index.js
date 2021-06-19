import {combineReducers} from 'redux';
import reducerMovies from './movies/reducerMovies';
import reducerPersons from './persons/reducerPerson';

export default combineReducers({
    moviesModules: reducerMovies,
    personModules: reducerPersons
})
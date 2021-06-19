import {combineReducers} from 'redux';
import reducerMovies from './movies/reducerMovies';

export default combineReducers({
    moviesModules: reducerMovies
})
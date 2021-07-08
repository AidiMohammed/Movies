import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Movie from './Movie';
import '../../styles/components/movie/movies.css';
import {GetTrending}from '../../redux/movies/actionsMovies'

function Movies(props) 
{
    const dispatch = useDispatch();
    const {isLoading,movies,page_num} = useSelector(state => state.moviesModules);

    return (
        <div className="content-movies">
            {movies.map((movie,index) => <Movie key ={index} movie={movie}/>)}
        </div>
    )
}

export default Movies;

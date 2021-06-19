import React,{useEffect} from 'react';
import Movies from '../../components/Movies/Movies';
import {useDispatch} from 'react-redux';
import {GetTopRated} from '../../redux/movies/actionsMovies'

function TopRatedMovies() 
{
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetTopRated(1));
    })

    return (
        <div>
            <h1>Top Rated Movies</h1>
            <Movies />
        </div>
    )
}

export default TopRatedMovies

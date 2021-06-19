import React,{useEffect} from 'react';
import Movies from '../../components/Movies/Movies';
import {useDispatch} from 'react-redux';
import {GetNowPlaying} from '../../redux/movies/actionsMovies'

function NowPlayingMovies() 
{
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetNowPlaying(1));
    })

    return (
        <div>
            <h1>now playing Movies</h1>
            <Movies />
        </div>
    )
}

export default NowPlayingMovies
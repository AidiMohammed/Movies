import React,{useEffect} from 'react';
import Movies from '../../components/Movies/Movies';
import {useDispatch} from 'react-redux';
import {GetNowPlaying} from '../../redux/movies/actionsMovies'
import '../../styles/pages/movie/nowPlaying.css'

function NowPlayingMovies() 
{
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetNowPlaying(1));
    })

    return (
        <div>
            <div className="titel-page">
                <h1>Filmes <span>Du moment</span></h1>    
            </div>
            <Movies />
        </div>
    )
}

export default NowPlayingMovies
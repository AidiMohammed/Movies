import React,{useEffect} from 'react';
import Movies from '../../components/Movies/Movies';
import {useDispatch} from 'react-redux';
import {GetTopRated} from '../../redux/movies/actionsMovies'
import '../../styles/pages/movie/topRated.css'

function TopRatedMovies() 
{
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetTopRated(1));
    })

    return (
        <div>
            <div className="titel-page">
                <h1>Filmes <span>Mieux Notés</span></h1>
            </div>
            <Movies />
        </div>
    )
}

export default TopRatedMovies

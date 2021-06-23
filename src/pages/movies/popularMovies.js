import React,{useEffect} from 'react'
import Movies from '../../components/Movies/Movies'
import {useDispatch} from 'react-redux'
import {GetPopular} from "../../redux/movies/actionsMovies"
import '../../styles/pages/movie/popular.css'

function PopularMovies() 
{
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(GetPopular(1));
    })

    return (
        <div>
            <div className="titel-page">
                <h1>Filmes <span>Populaires</span> </h1>    
            </div>
            <Movies />
        </div>
    )
}

export default PopularMovies;

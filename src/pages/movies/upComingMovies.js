import React,{useEffect} from 'react';
import Movies from '../../components/Movies/Movies';
import {useDispatch} from 'react-redux';
import {GetUpComing} from '../../redux/movies/actionsMovies' 
import '../../styles/pages/movie/upComing.css'

function UpComingMovies() 
{
    const dispatche = useDispatch()

    useEffect(() =>{
        dispatche(GetUpComing(1))
    })

    return (
    <div className="content-pages">
        <h1>Filmes <span>À venir</span></h1>
        <Movies />
    </div>
    )
}

export default UpComingMovies

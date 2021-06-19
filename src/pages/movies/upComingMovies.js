import React,{useEffect} from 'react';
import Movies from '../../components/Movies/Movies';
import {useDispatch} from 'react-redux';
import {GetUpComing} from '../../redux/movies/actionsMovies' 

function UpComingMovies() 
{
    const dispatche = useDispatch()

    useEffect(() =>{
        dispatche(GetUpComing(1))
    })

    return (
        <div>
            <h1>up Coming Movies</h1>   
            <Movies />
        </div>
    )
}

export default UpComingMovies

import React,{useEffect} from 'react'
import Movies from '../../components/Movies/Movies'
import {useDispatch} from 'react-redux'
import {GetPopular} from "../../redux/movies/actionsMovies"

function PopularMovies() 
{
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetPopular(1));
    })

    return (
        <div>
            <h1>popular Movies</h1>
            <Movies />
        </div>
    )
}

export default PopularMovies;

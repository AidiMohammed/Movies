import React from 'react'
import {useSelector} from 'react-redux'
import Movie from './Movie'
import '../../styles/components/movie/movies.css'


function Movies() 
{
    const {isLoading,movies,error} = useSelector(state => state.moviesModules)
    return (
        <div className="content-movies">
            {
                movies.length !== 0  ? movies.map(movie => <Movie movie={movie}/>) 
                : 
                <div className="center-lds">
                    <div className="lds-roller">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>                   
                </div>

                //movies.length !==0 ? <Movie movie={movies[0]}/> : null//c'est juste pour un test
            }
        </div>
    )
}

export default Movies

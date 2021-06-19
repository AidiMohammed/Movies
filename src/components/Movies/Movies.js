import React from 'react'
import {useSelector} from 'react-redux'

import Movie from './Movie'

function Movies() 
{
    const {isLoading,movies,error} = useSelector(state => state.moviesModules)
    return (
        <div style={{background:"rgb(200,200,200)",width:"450px"}} className="content-movies">
            <h1>Movies <span>Contaier</span></h1>
            {
                movies.length !== 0  ? movies.map(movie => <Movie movie={movie}/>) : null
            }
        </div>
    )
}

export default Movies

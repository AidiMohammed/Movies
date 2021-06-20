import React from 'react'
import {Link} from 'react-router-dom'

function Movie(props) 
{
    //console.log(props.movie)

    const {
        adult,
        backdrop_path,
        genre_ids,
        id,
        media_type,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        video,
        vote_average,
        vote_count
    } = props.movie;

    return (
        <div>
            <Link to={`/Movies/movieDetails/${id}`}>Movie title : {original_title}</Link>
        </div>
    )
}

export default Movie

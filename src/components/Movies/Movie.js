import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/components/movie/movie.css'

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
        <div className="content-movie">
            <Link to={`/Movies/movieDetails/${id}`}>
                <div className="container">
                    <img className="img-content" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
                    <p className="title">{original_title}</p>
                </div>
                
            </Link>
        </div>
    )
}

export default Movie

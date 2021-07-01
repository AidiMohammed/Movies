import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/components/movie/movie.css'

function Movie(props) 
{
    //console.log(props.movie)
    if(props.movie.length != 0)
        var {
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
            {
                (props.movie.length !== 0) ? 
                            <Link className="link" to={`/Movies/movieDetails/${id}`}>
                                <img className="img-content" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
                                <h3 className="title">{original_title}</h3>
                            </Link> :
                            null
            }

        </div>
    )
}

export default Movie

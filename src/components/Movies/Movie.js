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
        <div>
            <Link to={`/Movies/movieDetails/${id}`}>
                <div className="movie-card">
                    <div className="info-section">
                        <div className="movie-header">
                            <img className="locandina" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
                            <h1 className="title-movie">{original_title}</h1>
                            <h4 className="release-date">{release_date}</h4>
                            <span className="minutes">117 min</span>
                            <p className="type">ACTION,CRIME, FANTASY</p>
                        </div>
                        <div className="movie-desc">
                            <p className="text">{overview}</p>
                        </div>
                        <div className="movie-social">
                            <ul>
                                <li><i class="fa fa-share-alt" aria-hidden="true"></i></li>
                                <li><i class="fa fa-heart" aria-hidden="true"></i></li>
                                <li><i class="fa fa-comment" aria-hidden="true"></i></li>
                            </ul>
                        </div>
                    </div>
                    <img class="blur-back bright-back" src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}/>
                </div>
            </Link>
        </div>
    )
}

export default Movie

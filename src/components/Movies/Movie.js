import React,{useEffect,useState,Fragment} from 'react'
import {Link} from 'react-router-dom'
import '../../styles/components/movie/movie.css'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import ActionsListe from './ActionsListe' 

function Movie(props) 
{

    const {islogin} = useSelector(state => state.acountModules)
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
        } = props.movie;//data from api

    const ActionListe = islogin && <ActionsListe movie_id = {id}/>

    return (

        <div className="content-movie">
            {
                (props.movie.length !== 0) ? 
                            <Fragment>
                                <Link className="link" to={`/Movies/movieDetails/${id}`}>
                                    <img className="img-content" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
                                    <h3 className="title">{original_title}</h3>
                                </Link>
                                {ActionListe}
                                </Fragment>
                            :
                            null
            }

        </div>
    )
}

export default Movie

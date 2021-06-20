import React from 'react'
import {Link} from 'react-router-dom'

function TVShow(props) 
{
    console.log(props.data)

    const {
        backdrop_path,
        first_air_date,
        genre_ids,
        id,
        name,
        origin_country,
        original_language,
        original_name,
        overview,
        popularity,
        poster_path,
        vote_average,
        vote_count} = props.data

    return (
        <div>
            <Link to ={`/TV/TVShowDetailes/${id}`}><p>name : <span>{name}</span></p></Link>
        </div>
    )
}

export default TVShow

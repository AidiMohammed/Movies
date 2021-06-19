import React from 'react'

function Movie(props) 
{
    console.log(props.movie)

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
            Movie title : {original_title}
        </div>
    )
}

export default Movie

import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {GetMovie} from '../../redux/movies/actionsMovies'

function MovieDetails(props) 
{
    const {movie,error} = useSelector(state => state.moviesModules);
    const {
        adult,
        backdrop_path,
        belongs_to_collection,
        budget,
        genres,
        homepage,
        id,
        imdb_id,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        production_companies,
        production_countries,
        release_date,
        revenue,
        runtime,
        spoken_languages,
        status,
        tagline,
        title,
        video,
        vote_average,
        vote_count
        } = useSelector(state => state.moviesModules.movie);
        
    const dispatch = useDispatch();
    useEffect(() =>
    {
        const {id} = props.match.params;
        console.log("ID : ",id);
        dispatch(GetMovie(id))
    },[])

    return (
        <div>
            <h1>Details movie </h1>
            <p>{overview}</p>
        </div>
    )
}

export default MovieDetails

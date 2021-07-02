import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {GetMovie} from '../../redux/movies/actionsMovies'
import {GetCastsAndCrews} from '../../redux/persons/actionsPerson'
import '../../styles/pages/movie/movieDetails.css'
import CastsAndCrews from '../../components/Persons/CastsAndCrews';
function MovieDetails(props) 
{
    const dispatch = useDispatch();

    const {movie,error,isLoading} = useSelector(state => state.moviesModules);
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
        
    useEffect(async() =>
    {
        const {id} = props.match.params;
        dispatch(GetMovie(id));
        dispatch(GetCastsAndCrews(id));
        
    },[])
    return (
        <div className="content-pages">
            <div className="content-wrapper">
                <div className="card">
                    <img className="img-backdrop" src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={original_title} />
                    <div className="text-wrapper">
                        <h2 className="title-movie">{original_title}</h2>
                        <div className="realase-date">{release_date}</div>
                        <div className="overview">
                            <p className="overview-text">{overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails

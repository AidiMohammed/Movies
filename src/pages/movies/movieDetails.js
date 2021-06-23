import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {GetMovie} from '../../redux/movies/actionsMovies'
import '../../styles/pages/movie/movieDetails.css'

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
    
    const yer = release_date;
        
    useEffect(async() =>
    {
        const {id} = props.match.params;
        dispatch(GetMovie(id));
    },[])

    return (
        <div className="container-movieDetails">
            {console.log(useSelector(s => s.moviesModules.movie))}
            <div className="box back-drop back-drop-content">
                <div className="title-section">
                    <h1 className="title">{original_title} <span> ({release_date}) </span> </h1>
                    <div className="runtime-genres">
                        <h3 className="runtime">{runtime} min</h3>
                        {
                            (genres !== undefined) ? genres.map(genre => <span className="genres" key = {genre.id}>{genre.name}</span> ) : null
                        }
                    </div>
                    
                </div>
                <div className="overviwe-section">
                    <h3>Overview </h3>
                    <p>{overview}</p>
                </div>
                <div className="social-section">

                </div>
            </div>
            <img className="box back-drop" src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={'movie title : ',title} />       
            <div className="box info-section">info section</div>
            <div className="box cast-section">cast section</div>
            <div className="box crew-section">crew section</div>
            <div className="box foter-section">foter section</div>
        </div>
    )
}

export default MovieDetails

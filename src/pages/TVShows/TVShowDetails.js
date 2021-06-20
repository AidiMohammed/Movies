import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { GetTVShow } from '../../redux/TVShows/actionsTVShows';

function TVShowDetails(props) 
{
    const dispatch = useDispatch()
    const {TVShow} = useSelector(state => state.TVShowsModules);
    const {
        backdrop_path,
        created_by,
        episode_run_time,
        first_air_date,
        genres,
        homepage,
        id,
        in_production,
        languages,
        last_air_date,
        last_episode_to_air,
        name,
        networks,
        next_episode_to_air,
        number_of_episodes,
        number_of_seasons,
        origin_country,
        original_language,
        original_name,
        overview,
        popularity,
        poster_path,
        production_companies,
        production_countries,
        seasons,
        spoken_languages,
        status,
        tagline,
        type,
        vote_average,
        vote_count,
    } = TVShow;

    useEffect(() => 
    {
        const {id} = props.match.params
        dispatch(GetTVShow(id))
    },[])

    return (
        <div>
            {console.log(TVShow)}
            <p>TV Show Details</p>  <span>name : {name}</span>
        </div>
    )
}

export default TVShowDetails

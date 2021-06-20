import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {AiringToDay}from '../../redux/TVShows/actionsTVShows'
import TVShowsComponent from '../../components/TVShow.js/TVShows';

function AiringToDayTV() 
{
    const dispatch = useDispatch();
    const TVShows = useSelector(state => state.TVShowsModules);

    useEffect(() =>{
        dispatch(AiringToDay(1));
    },[])

    return (
        <div>
            {console.log(TVShows)}
            airing to day
            {<TVShowsComponent />}
        </div>
    )
}

export default AiringToDayTV

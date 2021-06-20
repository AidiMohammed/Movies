import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { popular } from '../../redux/TVShows/actionsTVShows';
import TVShowsComponent from '../../components/TVShow.js/TVShows';

function PopularTV() 
{
    const dispatch= useDispatch();
    const TVShows = useSelector(state => state.TVShowsModules);

    useEffect(() =>{
        dispatch(popular(1));
    },[])

    return (
        <div>
            {console.log(TVShows)}
            popular
            <TVShowsComponent />
        </div>
    )
}

export default PopularTV

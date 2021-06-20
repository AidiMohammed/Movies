import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { topRated } from '../../redux/TVShows/actionsTVShows';
import TVShowsComponent from '../../components/TVShow.js/TVShows';

function TopRatedTV() 
{

    const dispatch = useDispatch();
    const TVShows = useSelector(state => state.TVShowsModules)

    useEffect(() => {
        dispatch(topRated(1))
    },[])

    return (
        <div>
            {console.log(TVShows)}
            top Rated
            <TVShowsComponent />
        </div>
    )
}

export default TopRatedTV

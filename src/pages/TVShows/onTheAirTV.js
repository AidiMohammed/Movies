import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { onTheAir } from '../../redux/TVShows/actionsTVShows';
import TVShowsComponent from '../../components/TVShow.js/TVShows';

function OnTheAirTV() 
{
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(onTheAir(1))
    },[])

    return (
        <div>
            on the air
            {<TVShowsComponent />}
        </div>
    )
}

export default OnTheAirTV

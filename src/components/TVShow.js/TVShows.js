import React,{useEffect} from 'react'
import TVShow from './TVShow'
import {useSelector} from 'react-redux'

function TVShows() 
{
    const {TVShows} = useSelector(state => state.TVShowsModules)

    return (
        <div>
            TVShows
            {TVShows.map(item => <TVShow data = {item}/>)}
        </div>
    )
}

export default TVShows

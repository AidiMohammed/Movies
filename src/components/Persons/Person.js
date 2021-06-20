import React from 'react';
import {Link} from 'react-router-dom'

function Person(props)
{
    console.log(props.movie)

    const {
        adult,
        gender,
        id,
        known_for,
        known_for_department,
        name,
        popularity,
        profile_path
     } = props.movie;

    return (
        <div style={{background:"rgb(180,180,180)"}}>
            <Link to={`/Person/personDetails/${id}`}>name : {name}</Link> 
        </div>
    )
}

export default Person

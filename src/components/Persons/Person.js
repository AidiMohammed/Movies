import React from 'react';

function Person(props)
{
    console.log(props.movie)

    const {
        adult,
        gender,
        known_for,
        known_for_department,
        name,
        popularity,
        profile_path
     } = props.movie;

    return (
        <div style={{background:"rgb(180,180,180)"}}>
            name : {name}
        </div>
    )
}

export default Person

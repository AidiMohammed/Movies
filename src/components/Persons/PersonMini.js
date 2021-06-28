import React from 'react'
import '../../styles/components/person/personMini.css'

function PersonMini(props) 
{
    const {
        adult,
        credit_id,
        department,
        gender,
        id,
        job,
        known_for_department,
        name,
        original_name,
        character,
        popularity,
        profile_path,
    } = props.details;

    const mouseHover = (e) =>
    {
        const Name = e.target.nextElementSibling.style;
        Name.opacity = "1";
        Name.transform = "translateY(0%)";
    }

    function handleMouseDown(e)
    {
        console.log(e.target)
    }

    const mouseOut = e =>
    {
        const Name = e.target.nextElementSibling.style;
        Name.opacity = "0";
        Name.transform = "translateY(250%)";
        e.target.nextElementSibling.removeEventListener("mouseHover",handleMouseDown,false)
    }

    return (
        <div className="container-person">
            {
                (profile_path !== null) ? <img name={name} onMouseOver={mouseHover} onMouseLeave={mouseOut} className="img-profil" src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={original_name} /> :
                <i onMouseOver={mouseHover} onMouseLeave={mouseOut} class="fas fa-user-circle img-notfound"></i>
            }
            
            <h4 className="name">{name} <br /><span className="character">({character}{job})</span></h4>
        </div>
    )
}

export default PersonMini

import React from 'react'
import {useSelector} from 'react-redux'
import PersonMini from './PersonMini'
import '../../styles/components/person/castsAndCrews.css'

function CastsAndCrews(props) 
{
    const casts = useSelector(state => state.personModules.casts);
    const crews = useSelector(state => state.personModules.crews);

    return (
        <div className="container-CastAndCrews">
            {
                (props.type === "casts") ? casts.map((cast,index) => <PersonMini key={index} details={cast}/>) : crews.map((crew,index) => <PersonMini key={index}  details={crew}/>)
            }
        </div>
    )
}

export default CastsAndCrews

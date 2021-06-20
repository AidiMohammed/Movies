import React from 'react';
import {useSelector} from 'react-redux'
import Person from './Person'

function Persons() 
{
    const {isLoading,persons,error} = useSelector(state => state.personModules)

    return (
        <div>
            <h1 style={{background:"rgb(200,200,200)"}}>Persons</h1>
                {
                    (persons.length !== 0 ) ? persons.map(movie => <Person key={movie.id} movie={movie}/>) : null
                }
        </div>
    )
}

export default Persons

import React,{useEffect} from 'react';
import {useDispatch,useSelector}from 'react-redux';
import {GetPerson} from '../../redux/persons/actionsPerson'

function PersonDetails(props) 
{
    const {
        adult,
        also_known_as,
        biography,
        birthday,
        deathday,
        gender,
        homepage,
        id,
        imdb_id,
        known_for_department,
        name,
        place_of_birth,
        popularity,
        profile_path} = useSelector(state => state.personModules.person); 
    const dispatch = useDispatch();

    useEffect(()=> 
    {
        const id = props.match.params.id
        dispatch(GetPerson(id))
    },[])

    return (
        <div>
            <h3> name : {name}</h3>
            <br />
            <h3> biography :{biography}</h3>
        </div>
    )
}

export default PersonDetails

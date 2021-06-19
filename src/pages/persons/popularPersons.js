import React,{useEffect} from 'react'
import Persons from '../../components/Persons/Persons';
import {useDispatch,useSelector} from 'react-redux';
import {GetPopularPerson} from '../../redux/persons/actionsPerson'

function PopularPersons() 
{
    const dispatch = useDispatch();
    const {isLoading,persons,error} = useSelector(state => state.personModules);

    useEffect(() =>
    {
        console.log(isLoading,persons,error);
        dispatch(GetPopularPerson(1))
    },[])

    return (
        <div style={{background:"rgb(150,150,150)"}}>
           <h1>Popular Persons</h1>
           {
               <Persons />
           }
        </div>
    )
}

export default PopularPersons

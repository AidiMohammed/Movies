import React,{useState,useEffect} from 'react';
import Movies from '../components/Movies/Movies';
import {GetTrending} from '../redux/movies/actionsMovies'
import {useDispatch,useSelector}from 'react-redux'
import '../styles/pages/home.css';

function Home() 
{
    const dispatch = useDispatch();
    const {isLoading,error} = useSelector(state => state.moviesModules)
    const [isDayTrending,setIsDayTrending] = useState(true);

    useEffect(() => 
    {
        if(isLoading )//ici pour desactiver les bouton au moment de connection à l'api
            if(isDayTrending)
                document.getElementById("Week").setAttribute("disabled",null);
            else 
                document.getElementById("Day").setAttribute("disabled",null);
        else
            {
                document.getElementById("Day").removeAttribute("disabled");
                document.getElementById("Week").removeAttribute("disabled");
            }

    }, [isLoading]);

    useEffect(() => 
    {
        const btnDay = document.querySelector('#Day');
        const btnWeek = document.querySelector('#Week');

        if(isDayTrending)
            {   
                btnDay.classList.add('button-down');
                btnWeek.classList.remove('button-down');
                dispatch(GetTrending('day'));
            }
            else
            {
                btnWeek.classList.add('button-down');
                btnDay.classList.remove('button-down');
                dispatch(GetTrending('week'));
            }
        
    }, [isDayTrending]);

    const toggleChoicePeriod = (e) =>
    {
        if(e.target.id === "Day")
            setIsDayTrending(true);

        else if(e.target.id === "Week")
            setIsDayTrending(false);

        else
            console.error(e.target.id);
    }

    return (
        <div className="content-home">
            <div className="content-choice-periode">
                <h1>Flimes en <span>Tendances</span> </h1>
                <div className="group-button">
                    <button className="action-button shadow animate blue" onClick={toggleChoicePeriod} id="Day" >Aujourd'hui</button>
                    <button className="action-button shadow animate blue " onClick={toggleChoicePeriod} id="Week">Cette semaine</button>                    
                </div>
            </div>
            <Movies />
        </div>
    )
}

export default Home

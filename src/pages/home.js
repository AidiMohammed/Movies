import React,{useState,useEffect} from 'react';
import Movies from '../components/Movies/Movies';
import {GetTrending} from '../redux/movies/actionsMovies'
import {useDispatch,useSelector}from 'react-redux'


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
                btnDay.style.background= "red";
                btnDay.style.color = "Azure";

                btnWeek.style.background = "Azure";
                btnWeek.style.color = "black";

                dispatch(GetTrending('day'));
            }
            else
            {
                btnDay.style.background= "Azure";
                btnDay.style.color = "black";

                btnWeek.style.background = "red";
                btnWeek.style.color = "Azure";

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
            <h1>Flimes en <span>Tendances</span> </h1>

            <button onClick={toggleChoicePeriod} id="Day" style={{margin:"15px",width:"150px"}} >Aujourd'hui</button>
            <button onClick={toggleChoicePeriod} id="Week" style={{width:"150px"}}>Cette semaine</button>
            
            <div className="content-listes">
                <Movies />
            </div>
        </div>
    )
}

export default Home

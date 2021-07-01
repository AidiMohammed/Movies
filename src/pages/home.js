import React,{useState,useEffect} from 'react';
import Movies from '../components/Movies/Movies';
import {GetTrending,RestState} from '../redux/movies/actionsMovies'
import {useDispatch,useSelector}from 'react-redux'
import '../styles/pages/home.css';

function Home() 
{
    const dispatch = useDispatch();
    const {isLoading,error,page_num} = useSelector(state => state.moviesModules)
    const [isDayTrending,setIsDayTrending] = useState(true);
    //const [state,setState] =useState({page_num: 1})

    useEffect(() =>{
        if(isLoading)
            if(isDayTrending)
                document.querySelector('#Week').classList.add('btn-deactivate');
            else
                document.querySelector('#Day').classList.add('btn-deactivate');
        else
        {
            document.querySelector('#Week').classList.remove('btn-deactivate')
            document.querySelector('#Day').classList.remove('btn-deactivate')
        }
    },[isLoading])

    useEffect(()=>{
        const btnDay = document.querySelector("#Day");
        const btnWeek = document.querySelector("#Week");

        if(isDayTrending)
        {
            btnDay.classList.add('btn-active');
            btnWeek.classList.remove('btn-active');
            dispatch(RestState());
            dispatch(GetTrending('day',1));
        }
        else if(!isDayTrending)
        {
            btnWeek.classList.add('btn-active');
            btnDay.classList.remove('btn-active');
            dispatch(RestState());
            dispatch(GetTrending("week",1));
        }
        else
            console.error("ERR")
    },[isDayTrending])
    
    const toggleChoicePeriod =e =>
    {
        if(e.target.id === "Day")
            setIsDayTrending(true);

        else if(e.target.id === "Week")
            setIsDayTrending(false);
        else
            console.error(e.target.id);
    }

    const nextpage = () =>{
        console.log("More movies",page_num);
        dispatch(GetTrending('day',page_num))
    }

    return (
        <div className="content-pages">
            <div className="content-home">
                <div className="header-home">
                    <h1 className="title-page">Filmes en tendance</h1>
                    <div className="container-buttons">
                        <button id="Day" onClick={toggleChoicePeriod} className="btn ">Aujourd'hui</button>
                        <button id="Week" onClick={toggleChoicePeriod} className="btn ">Cette semaine</button>                              
                    </div>
                </div>
                <Movies/>    
            </div>
            {
                (!isLoading) ? <div className="content-home"><button className="btn btn-showMore" onClick={nextpage}>Afficher Plus ...</button></div>
                :
                <div className="content-home"><div className="content"><div className="lds-roller content-pages"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></div>
            }
        </div>
    )
}

export default Home

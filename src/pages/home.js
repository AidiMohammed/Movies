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

    return (
        <div className="content-pages">
            <div className="content-home">
                <div className="header-home">
                    <h1 className="title-page">Filmes en tendance</h1>
                    <div className="container-buttons">
                        <button className="btn btn-1 btn-active">Aujourd'hui</button>
                        <button className="btn btn-2">Cette semaine</button>                        
                    </div>
                </div>
                <Movies/>    
            </div>
        </div>
    )
}

export default Home

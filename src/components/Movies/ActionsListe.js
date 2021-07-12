import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import RatedStarts from './helpers/RatedStarts'
import AddToList from './helpers/AddToList'

function ActionsListe(props) 
{
    const {movie_id} =props;

    const [statesAccount,setStatesAccount] = useState({
        favorite: undefined,
        id: undefined,
        rated: {value: undefined},
        watchlist: undefined})

    const [showStartRated,setShowStatRated] = useState(false)
    const [showAddToList,setShowAddToList] = useState(false)

    const {islogin,session_id} = useSelector(state => state.acountModules);

    const getAccountStates = new Promise((resolve,reject) => //get Account stats for this movie
    {
       if(islogin)
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/account_states?api_key=c3e344079e651daccf822dba7e739968&session_id=${session_id}`)
            .then(res => resolve(res.data))
            .catch(err => reject(err.message))  
    })
    
    const setRated = (newValue) => setStatesAccount({...statesAccount,rated: {value: newValue}})
    
    useEffect(()=> {
        if(islogin)
        {
            getAccountStates
            .then(res => {
                setStatesAccount(res)
            })
            .catch(err => console.log(err))

        }
    },[])

    const toggleFavorite = () =>
    {
        const requestBody = {
            "media_type": "movie",
            "media_id": movie_id,
            "favorite": !statesAccount.favorite
        }
        axios.post(`https://api.themoviedb.org/3/account/${statesAccount.id}/favorite?api_key=c3e344079e651daccf822dba7e739968&session_id=${session_id}`,requestBody)
            .then(res => {
                setStatesAccount({...statesAccount,favorite: !statesAccount.favorite})
            })
            .catch(err => console.error(err.message))
    }
    const toggleWatchlistes = () => 
    {
        const requestBody = {
            "media_type": "movie",
            "media_id": movie_id,
            "watchlist": !statesAccount.watchlist
        }
        axios.post(`https://api.themoviedb.org/3/account/${statesAccount.id}/watchlist?api_key=c3e344079e651daccf822dba7e739968&session_id=${session_id}`,requestBody)
            .then(res => setStatesAccount({...statesAccount,watchlist: !statesAccount.watchlist}))
            .catch(err => console.error(err.message))
    }

    const creatRated = () =>
    {
        if(showAddToList)
            setShowAddToList(!showAddToList)
        setShowStatRated(!showStartRated)
    }

    const creatToList = () =>
    {
        if(showStartRated)
            setShowStatRated(!showStartRated)
        setShowAddToList(!showAddToList)
    }

    const removeRated = () =>
    {setTimeout(() => setShowStatRated(false),200);}

    const removeAddToList = () =>
    {setTimeout(() => setShowAddToList(false),200);}

    const ratedlog = showStartRated && 
        <div onMouseLeave = {() => removeRated()} className={`logStart movie-${movie_id}`}>
            <RatedStarts rated = {statesAccount.rated.value} stateShow = {showStartRated} movie_id = {movie_id} session_id={session_id} setRated = {setRated}/>
        </div>

    return (
        <div className="container-actions">
            <ul>
                <li>
                    {
                        statesAccount.favorite === true ? 
                        <span className="action-validate">
                            <i onClick={() => toggleFavorite()} class="fas fa-heart action-validate"></i>
                        </span> : 
                        <span className="link" >
                            <i onClick={() =>toggleFavorite()}class="far fa-heart"></i>
                        </span>
                    }
                </li>
                <li>
                    {
                        statesAccount.watchlist === true ?
                        <span className="action-validate" >
                            <i onClick={() => toggleWatchlistes()} class="fas fa-bookmark action-validate"></i>
                        </span> :
                        <span className="link" >
                            <i onClick={() => toggleWatchlistes()} class="far fa-bookmark"></i>
                        </span>
                    }
                </li>
                <li>
                    {
                        statesAccount.rated.value > 0 ?
                        <span className={"action-validate"} >
                            <i onClick={() =>creatRated()} class="fas fa-star action-validate"></i>
                        </span> :
                        <span className="link" >
                            <i onClick={() =>creatRated()} class="far fa-star"></i>
                        </span>
                    }
                </li>
            </ul>
            {ratedlog}
        </div>
    )
}

export default ActionsListe

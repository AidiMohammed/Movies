import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {DispatchLoding,DispatchResetState} from "../../redux/account/actionsAccount"
import axios from 'axios'
import '../../styles/pages/authentication/profile.css'
import MyLists from  '../../components/Lists/Mylists'
import Favorites from '../../components/Lists/Favorites'
import Ratedes from '../../components/Lists/Ratedes'
import WatchListes from '../../components/Lists/WatchListes'

function Profile(props)
{
    const initStateProfil = {
        lists: false,
        favorites: false,
        ratedes: false,
        watchListes: false
        }
    const dispatch = useDispatch()
    const {islogin,session_id,detailsAccount} = useSelector(state => state.acountModules);
    const [stateProfile,setStateProfile] = useState(initStateProfil)

    const {lists,favorites,ratedes,watchListes} = stateProfile;

    useEffect(()=>{
        const {user} = props.match.params
        if(!islogin || user != detailsAccount.username)
            props.history.push("/");
    },[])

    const onLogout = () =>
    {
        dispatch(DispatchLoding())
        axios.delete(`https://api.themoviedb.org/3/authentication/session?api_key=c3e344079e651daccf822dba7e739968&session_id=${session_id}`)
            .then(res => {
                dispatch(DispatchResetState());
                props.history.push("/");
            })
            .catch(err => console.error("error :",err))
    }

    const toggleContent = e => 
    {
        if(e.target.name==="lists")
        {
            setStateProfile({
                lists: true,
                favorites: false,
                ratedes: false,
                watchListes: false
            })
        }
        if(e.target.name==="favorites")
        {
            setStateProfile({
                lists: false,
                favorites: true,
                ratedes: false,
                watchListes: false
            })
        }
        if(e.target.name==="ratedes")
        {
            setStateProfile({
                lists: false,
                favorites: false,
                ratedes: true,
                watchListes: false
            })
        }
        if(e.target.name==="watchListes")
        {
            setStateProfile({
                lists: false,
                favorites: false,
                ratedes: false,
                watchListes: true
            })
        }
    }

    return (
        <div className="content-pages">
            <div className="header">
                <nav>
                    <ul>
                        <li><button className="btn" name="lists" onClick ={(e) => toggleContent(e)}>Mes Listes</button></li>
                        <li><button className="btn" name="favorites" onClick ={(e) => toggleContent(e)}>Mes Favories</button></li>
                        <li><button className="btn" name="ratedes" onClick ={(e) => toggleContent(e)}>Mes Notes</button></li>
                        <li><button className="btn" name="watchListes" onClick ={(e) => toggleContent(e)}>Mes Listes Surveillées</button></li>
                        <li><button onClick={onLogout} className="btn" >Se deconnecter </button></li>
                    </ul>
                </nav>
            </div>
            <div className="content-profile">
                <MyLists ShowListes = {lists}/>
            </div>    
            <div className="content-favorites">
                <Favorites ShowFavorites = {favorites}/>
            </div>    
            <div className="content-ratedes">
                <Ratedes ShowRatedes = {ratedes}/>
            </div>    
            <div className="content-watchListes">
                <WatchListes ShowWatchListes = {watchListes}/>
            </div>    
        </div>
    )
}
 
export default Profile

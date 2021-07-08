import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {DispatchLoding,DispatchResetState} from "../../redux/account/actionsAccount"
import axios from 'axios'

function Profile(props)
{
    const dispatch = useDispatch()
    const {islogin,session_id,detailsAccount} = useSelector(state => state.acountModules);

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
    return (
        <div className="content-pages">

            <button onClick={onLogout} className="btn" >Se deconnecter </button>
        </div>
    )
}
 
export default Profile

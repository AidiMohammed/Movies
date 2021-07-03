import React from 'react'
import {useDispatch} from 'react-redux'
import {IsLogin} from "../../redux/account/actionsAccount"
import axios from 'axios'

function Logout(props)
{
    const dispatch = useDispatch()
    const onLogout = () =>
    {
        const sessionID = localStorage.getItem("session_id");
        const data = {session_id: sessionID}
        console.log(JSON.stringify(data));

        axios.delete(`https://api.themoviedb.org/3/authentication/session?api_key=c3e344079e651daccf822dba7e739968&session_id=${sessionID}`)
            .then(res => {
                dispatch(IsLogin());
                localStorage.removeItem("session_id");
                props.history.push("/");
                console.log("RES : ",res.data)
            })
            .catch(err => console.error("error :",err))
    }
    return (
        <div className="content-pages">
            <button onClick={onLogout} className="btn" >Se deconnecter</button>
        </div>
    )
}
 
export default Logout

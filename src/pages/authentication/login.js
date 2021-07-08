import React,{useEffect,useState} from 'react'
import '../../styles/pages/authentication/login.css'
import {useDispatch,useSelector} from 'react-redux'
import {DispatchLoding,DispatchAuthentication,DispatchSetDetails,DispatchResetState} from '../../redux/account/actionsAccount'
import axios from 'axios'

function Login(props) 
{
    const dispatch = useDispatch()
    const {session_id} = useSelector(state => state.acountModules)

    const [dataLogin,setDataLogin] = useState({
        username: "MohammedAidi",
        password: "hUYRfZg@GWRD5ac",
        error : ""
    })

    const {username,password,error} = dataLogin;

    const Authentication = (username,password) => 
    {
        dispatch(DispatchLoding());
        return new Promise((resolve,reject) => {
            axios.get("https://api.themoviedb.org/3/authentication/token/new?api_key=c3e344079e651daccf822dba7e739968")//creat new token
            .then(newToken => 
            {
                const requestBody = {
                    "username": username,
                    "password": password,
                    "request_token": newToken.data.request_token}

                    axios.post("https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=c3e344079e651daccf822dba7e739968",requestBody)//validate tokne with username and password
                    .then(tokenValidate =>
                    {
                        const requestBody = {"request_token": tokenValidate.data.request_token}
                        axios.post("https://api.themoviedb.org/3/authentication/session/new?api_key=c3e344079e651daccf822dba7e739968",requestBody)//creat new session user
                            .then(sessionUser => resolve(sessionUser.data))
                            .catch(err => reject(err.message))
                    }).catch(err => reject(err.message))
            }).catch(err => reject(err.message))
        })
    }

    const getDetailsAccount = (sessionID) =>
    {
        return new Promise((resolve,reject) => 
        {
            axios.get(`https://api.themoviedb.org/3/account?api_key=c3e344079e651daccf822dba7e739968&session_id=${sessionID}`)
                .then(res => resolve(res.data))
                .catch(err => reject(err.message))
        })
    }

    const submitLogin = async (e) =>
    {
        e.preventDefault();
        Authentication(username,password)
            .then(res => {
                dispatch(DispatchAuthentication(res));
                getDetailsAccount(res.session_id)
                .then(res => 
                {
                    dispatch(DispatchSetDetails(res))
                    props.history.push(`/profile/${res.username}`);
                })
                .catch(err => {
                    console.error("ERROR getDetailsAccount : ",err)
                    setDataLogin({...dataLogin,error: "The resource you requested could not be found."})
                    dispatch(DispatchResetState())
                })
            })
            .catch(err => {
                console.error("ERROE Authentication : ",err);
                setDataLogin({...dataLogin,error: "Invalid username and/or password: You did not provide a valid login."})
                dispatch(DispatchResetState())
            })
    }

    const errorMessage = error !== "" ? <h1 className="errorMessage">{error}</h1> : null

    const ChangeTextInput = e =>{
        setDataLogin({...dataLogin,[e.target.id]: e.target.value})
    }

    return (
        <div className="content-pages">
            <div class="container">
                {errorMessage}
                <div class="wrapper">
                    <div class="title-form"><span>Se connecter avec votre compte 'TMDB' !</span></div>

                    <form onSubmit={submitLogin}>
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <input onChange = {ChangeTextInput} type="text" placeholder="Nom d'utilisateur" required id="username" value={username}/>
                        </div>
                        <div class="row">
                            <i class="fas fa-lock"></i>
                            <input onChange = {ChangeTextInput} type="password" placeholder="Mot de passe" required id="password" value={password}/>
                        </div>

                        <div class="row button">
                            <input type="submit" value="Login"/>
                        </div>
                        <div class="signup-link">Pas un membre ? <a href="https://www.themoviedb.org/signup">S'inscrire maintenant</a></div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login

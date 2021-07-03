import React,{useEffect,useState} from 'react'
import '../../styles/pages/authentication/login.css'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {IsLogin} from '../../redux/account/actionsAccount'

function Login(props) 
{
    const dispatch = useDispatch()
    const [dataLogin,setDataLogin] = useState({
        pseudo: "",
        password: "",
        token: "",
        err: ""
    })
    
    useEffect(() =>{
        //get token
        axios.get("https://api.themoviedb.org/3/authentication/token/new?api_key=c3e344079e651daccf822dba7e739968")
            .then(res => {
                setDataLogin({...dataLogin,token: res.data.request_token})
            })
            .catch(err => setDataLogin({...dataLogin,err: err.message}))
    },[])

    const {pseudo,password,err,token} = dataLogin;

    const submitLogin = async (e) =>{
        e.preventDefault();

        const data = {
                "username": pseudo,
                "password": password,
                "request_token": token
            }
        console.log("Data : ",data)
        
        axios.post("https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=c3e344079e651daccf822dba7e739968",data)
            .then(res => {
                    console.log(res.data);
                    //get session id
                    const token_valid = {"request_token": res.data.request_token};

                    axios.post("https://api.themoviedb.org/3/authentication/session/new?api_key=c3e344079e651daccf822dba7e739968",token_valid)
                        .then(res => {
                                localStorage.setItem("session_id",res.data.session_id);
                                dispatch(IsLogin());
                                props.history.push("/");
                            })
                        .catch(err => {
                                        setDataLogin({...dataLogin,err: err.message});
                                        console.log("err session id :",err.message," data login",dataLogin);
                                    });
                })
            .catch(err => {
                    //setDataLogin({...dataLogin,err: err})
                    console.log("err get tokent : ",err)
                })
    }

    const errorMessage = err !== "" ? <h1>{err}</h1> : null

    const ChangeTextInput = e =>{
        setDataLogin({...dataLogin,[e.target.id]: e.target.value})
    }

    return (
        <div className="content-pages">
            <div class="container">
                <div class="wrapper">

                    <div class="title-form"><span>Se connecter avec votre compte 'TMDB' !</span></div>
                    <form onSubmit={submitLogin}>
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <input onChange = {ChangeTextInput} type="text" placeholder="Nom d'utilisateur" required id="pseudo" value={pseudo}/>
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

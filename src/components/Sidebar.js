import React,{useState,useEffect} from 'react';
import '../styles/components/sidebar.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Serach from '../components/Search'

function SideBar() 
{

    const {islogin,loding,detailsAccount} = useSelector(state => state.acountModules);

    const [togglesNavbar,setTogglesNavbar] = useState({
            filmes_btn: false,
            TVShows_btn: false,
            persons_btn: false
            });

    useEffect(() => {
        console.log('SIDE BAR SEATILES ACCOUNT : ',detailsAccount);
    })

    useEffect(() =>{
        const filmesSubmenu = document.querySelector(".filme-submenu");
        const TVShowsSubmenu = document.querySelector(".TVShow-submenu");
        const personSubmenu = document.querySelector(".person-submenu");
        const span_Filmes = document.querySelector('.caret-filmes');
        const span_TVShow = document.querySelector(".caret-TVShows");
        const span_Person = document.querySelector(".caret-persons");

        if(togglesNavbar.filmes_btn)
        {
            filmesSubmenu.style.display= "block";
            span_Filmes.style.textShadow= "0 0 10px cyan";
            span_Filmes.style.transform= "translateY(-50%) rotate(-180deg)";
        }
            

        if (togglesNavbar.TVShows_btn)
        {
            TVShowsSubmenu.style.display= "block"
            span_TVShow.style.textShadow= "0px 0px 10px cyan";
            span_TVShow.style.transform= "translateY(-50%) rotate(-180deg)";
        }
            

        if (togglesNavbar.persons_btn)
        {
            personSubmenu.style.display= "block"
            span_Person.style.textShadow= "0px 0px 10px cyan";
            span_Person.style.transform= "translateY(-50%) rotate(-180deg)";
        }
            

        if (!togglesNavbar.filmes_btn)
        {
            filmesSubmenu.style.display= "none"   
            span_Filmes.style.textShadow= "none";
            span_Filmes.style.transform= "translateY(-50%) rotate(0deg)";   
        }
             
        
        if (!togglesNavbar.TVShows_btn)
        {
            TVShowsSubmenu.style.display= "none"
            span_TVShow.style.textShadow= "none";
            span_TVShow.style.transform= "translateY(-50%) rotate(0deg)";
        }
            

        if (!togglesNavbar.persons_btn)
        {
            personSubmenu.style.display= "none" 
            span_Person.style.textShadow= "none";
            span_Person.style.transform= "translateY(-50%) rotate(0deg)";
        }

    },[togglesNavbar])

    const togglesSubMeunu=(e) =>
    {
        setTogglesNavbar({...togglesNavbar,[e.target.name]: !togglesNavbar[e.target.name]});       
    }

    const authentication =  islogin ? 
                            <Link to={`/profile/${detailsAccount.username}`}>  
                                {(detailsAccount.avatar.tmdb.avatar_path === undefined || detailsAccount.avatar.tmdb.avatar_path === null) ?<span className="fa fa-user-circle "></span> :<img src={`https://image.tmdb.org/t/p/w500/${detailsAccount.avatar.tmdb.avatar_path}`} alt={detailsAccount.username}/> }
                            </Link>
                            :
                            <Link to="/login"> 
                                <span className="fa fa-user-circle "></span> 
                                <h3>Se connecter</h3>
                            </Link>
    const authenticationLoding = loding ? <div className="loding"><div className="lds-roller loding-sidebar"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div> : authentication
    return (
        <nav className="sidebar">
            <div className="login">
                {authenticationLoding}
            </div>
            <ul>
                <li><Link className="buttons-sidebar" to="/">Home </Link></li>
                <li>
                    <a onClick={togglesSubMeunu} name="filmes_btn" className="filmes_btn buttons-sidebar">
                        Filmes
                        <span name="filmes_btn" className="fa fa-caret-down caret-filmes "aria-hidden="true"></span>
                    </a>
                    <ul className="filme-submenu">
                        <li><Link className="buttons-sidebar" to="/Movies/popular">Populaires</Link></li>
                        <li><Link className="buttons-sidebar" to="/Movies/nowPlaying">Du moment</Link></li>
                        <li><Link className="buttons-sidebar" to="/Movies/upComing">A venir</Link></li>
                        <li><Link className="buttons-sidebar" to="/Movies/topRated">Les mieux notés</Link></li>
                    </ul>
                </li>
                <li>
                    <a onClick={togglesSubMeunu} name="TVShows_btn" className="TVShows_btn buttons-sidebar">Emissions télévisées <span className="fa fa-caret-down caret-TVShows"></span></a>
                    <ul className="TVShow-submenu">
                        <li><Link className="buttons-sidebar" to="/TV/popular" >Populaires</Link></li>
                        <li><Link className="buttons-sidebar" to="/TV/airingToDay" >Diffusées aujourd'hui</Link></li>
                        <li><Link className="buttons-sidebar" to="/TV/onTheAir" >En cours de diffusion</Link></li>
                        <li><Link className="buttons-sidebar" to="/TV/topRated" >Les mieux notées</Link></li>
                    </ul>
                </li>
                <li>
                    <a onClick={togglesSubMeunu} name="persons_btn" className="persons_btn buttons-sidebar">Artistes <span className="fa fa-caret-down caret-persons"></span></a>
                    <ul className="person-submenu">
                        <li><Link className="buttons-sidebar" to="/Person/popular">Les plus consultés</Link></li>
                    </ul>
                </li>
                <Serach/>
            </ul>
            
        </nav>
    )
}

export default SideBar;

import React from 'react';
import '../styles/components/navBar.css'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div className="nav-bar">
            <div style={{cursor:"pointer"}} className="logo">
                <Link to ="/">
                    <i className="fas fa-film"></i>
                </Link>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <Link to="#">Filme</Link>
                        <ul className="dropdown">
                            <li>
                                <Link to="/Movies/popular">Populaires</Link>
                            </li>
                            <li>
                                <Link to="/Movies/nowPlaying">Du moment</Link>
                            </li>
                            <li>
                                <Link to="/Movies/upComing">A venir</Link>
                            </li>
                            <li>
                                <Link to="/Movies/topRated">Les mieux notés</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Artistes
                        <ul>
                            <li>
                                <Link to="/Person/popular">Les plus consultés</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#">Emissions</Link>
                        <ul>
                            <li>
                                <Link to="#">Populaires</Link>
                            </li>
                            <li>
                                <Link to="#">Diffusées aujourd'hui</Link>
                            </li>
                            <li>
                                <Link to="#">En cours de diffusion</Link>
                            </li>
                            <li>
                                <Link to="#">Les mieux notées</Link>
                            </li>
                        </ul>
                    </li>
                </ul>                
            </div>
            <div className="search">
                <input placeholder="Searsh " type="text" />
            </div>
        </div>
    )
}

export default NavBar

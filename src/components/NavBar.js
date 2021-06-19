import React from 'react';
import '../styles/components/navBar.css'

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="logo">
                <i className="fas fa-film"></i>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <a href="#">Filme</a>
                        <ul className="dropdown">
                            <li>
                                <a href="#">Populaires</a>
                            </li>
                            <li>
                                <a href="#">Du moment</a>
                            </li>
                            <li>
                                <a href="#">A venir</a>
                            </li>
                            <li>
                                <a href="#">Les mieux notés</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Artistes</a>
                        <ul>
                            <li>
                                <a href="#">Les plus consultés</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Emissions</a>
                        <ul>
                            <li>
                                <a href="#">Populaires</a>
                            </li>
                            <li>
                                <a href="#">Diffusées aujourd'hui</a>
                            </li>
                            <li>
                                <a href="#">En cours de diffusion</a>
                            </li>
                            <li>
                                <a href="#">Les mieux notées</a>
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

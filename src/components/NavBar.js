import React,{useState,useEffect} from 'react';
import '../styles/components/navBar.css'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {onSerachString} from '../redux/SearchMulti/actionsSeach'

function NavBar() 
{
    const dispatch = useDispatch();
    const results = useSelector(state => state.searchModules);

    const [searchString,setSearchString] = useState("");


    useEffect(() => {
        if(searchString != '')
            dispatch(onSerachString(searchString,1));
    }, [searchString])

    const onChangeSearchString = e =>
    {
        setSearchString(e.target.value)
    }

    return (
        <div className="nav-bar">

            {console.log(results)}

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
                        Emissions
                        <ul>
                            <li>
                                <Link to="/TV/popular">Populaires</Link>
                            </li>
                            <li>
                                <Link to="/TV/airingToDay">Diffusées aujourd'hui</Link>
                            </li>
                            <li>
                                <Link to="/TV/onTheAir">En cours de diffusion</Link>
                            </li>
                            <li>
                                <Link to="/TV/topRated">Les mieux notées</Link>
                            </li>
                        </ul>
                    </li>
                </ul>                
            </div>
            <div className="search">
                <input onChange={onChangeSearchString} value = {searchString} name ="SearchString" placeholder="Searsh " type="text" />
            </div>
        </div>
    )
}

export default NavBar

import React,{useEffect} from 'react';
import Movies from '../../components/Movies/Movies';
import {useDispatch,useSelector} from 'react-redux';
import {GetUpComing,RestState} from '../../redux/movies/actionsMovies' 
import '../../styles/pages/movie/upComing.css'

function UpComingMovies() 
{
    const dispatche = useDispatch();
    const {isLoading,page_num} = useSelector(state => state.moviesModules);

    useEffect(() =>{
        dispatche(RestState())
        dispatche(GetUpComing(page_num))
    },[]);

    const nextpage = () =>{
        dispatche(GetUpComing(page_num))
    }

    return (
    <div className="content-pages">
        <div className="content-upcoming">
            <h1 className="title-page">Filmes À venir</h1>
            <Movies />
        </div>
        <div className="content-upcoming">
            {
                (!isLoading) ? <button className="btn btn-showMore" onClick={nextpage}>Afficher Plus ...</button>
                :
                <div className="content"><div className="lds-roller content-pages"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
            }
        </div>
    </div>
    )
}

export default UpComingMovies;

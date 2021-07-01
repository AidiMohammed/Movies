import React,{useEffect} from 'react';
import Movies from '../../components/Movies/Movies';
import {useDispatch,useSelector} from 'react-redux';
import {GetTopRated,RestState} from '../../redux/movies/actionsMovies'
import '../../styles/pages/movie/topRated.css'

function TopRatedMovies() 
{
    const dispatch = useDispatch();
    const {isLoading,page_num} = useSelector(state => state.moviesModules)

    useEffect(() => {
        dispatch(RestState());
        dispatch(GetTopRated(page_num));
    },[])

    const nextpage = () =>{
        dispatch(GetTopRated(page_num))
    }

    return (
        <div className="content-pages">
            <div className="content-topRated">
                <h1 className="title-page">Filmes Mieux Notés </h1>
            </div>
            <Movies />
            <div className="content-topRated">
            {
                (!isLoading) ? <button className="btn btn-showMore" onClick={nextpage}>Afficher Plus ...</button>
                :
                <div className="content"><div className="lds-roller content-pages"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
            }
            </div>
        </div>
    )
}

export default TopRatedMovies

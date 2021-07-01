import React,{useEffect} from 'react'
import Movies from '../../components/Movies/Movies'
import {useDispatch,useSelector} from 'react-redux'
import {GetPopular,RestState} from "../../redux/movies/actionsMovies"
import '../../styles/pages/movie/popular.css'

function PopularMovies() 
{
    const dispatch = useDispatch();
    const {isLoading,page_num} = useSelector(state => state.moviesModules)
    useEffect(() => {
        dispatch(RestState());
        dispatch(GetPopular(page_num));
    },[]);

    const nextpage = () =>{
        dispatch(GetPopular(page_num))
    }
    //scroll infini
    /*window.addEventListener('scroll',() =>
    {
        const {scrollTop,scrollHeight,clientHeight} = document.documentElement;
        if(clientHeight+scrollTop === scrollHeight)
        {
            console.log(page_num);
            dispatch(GetPopular(page_num));
        }
        
    })*/
    return (
        <div className="content-pages">
            <div className="content-popular">
                <h1 className="title-page">Filmes populaires</h1>
                <Movies />    
            </div>
            <div className="content-popular">
            {
                (!isLoading) ? <button className="btn btn-showMore" onClick={nextpage}>Afficher Plus ...</button>
                :
                <div className="content"><div className="lds-roller content-pages"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
            }
            </div>
        </div>
    )
}

export default PopularMovies;

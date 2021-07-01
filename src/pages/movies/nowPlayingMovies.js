import React,{useEffect} from 'react';
import Movies from '../../components/Movies/Movies';
import {useDispatch,useSelector} from 'react-redux';
import {GetNowPlaying,RestState} from '../../redux/movies/actionsMovies'
import '../../styles/pages/movie/nowPlaying.css'

function NowPlayingMovies() 
{
    const dispatch = useDispatch()
    const {isLoading,page_num} = useSelector(state => state.moviesModules);

    useEffect(() => {
        dispatch(RestState());
        dispatch(GetNowPlaying(page_num))
    }, [])

    const nextpage = () =>{
        dispatch(GetNowPlaying(page_num))
    }
    return (
        <div className="content-pages">
            <div className="content-playnom">
                <h1 className="title-page">Films du moment</h1>
                <Movies />   
            </div>
            <div className="content-playnom">
            {
                (!isLoading) ? <button className="btn btn-showMore" onClick={nextpage}>Afficher Plus ...</button>
                :
                <div className="content"><div className="lds-roller content-pages"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
            }
            </div>
        </div>
    )
}

export default NowPlayingMovies
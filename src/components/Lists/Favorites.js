import React,{useEffect,Fragment} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {DispatchGetFavoritesMovies} from '../../redux/account/actionsAccount'
import Movie from '../Movies/Movie'

function Favorites({ShowFavorites}) 
{
    const {session_id,detailsAccount,favoriteMovies} = useSelector(state => state.acountModules);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DispatchGetFavoritesMovies(session_id,detailsAccount.id))
    }, [])

    return (
        ShowFavorites &&
        <div className="content-movies">

            {favoriteMovies.length == 0 && <h1>aucun film dans les favorites </h1>}
            {
                Array.from(favoriteMovies).map((itemMovie,index) => <Movie key = {index} movie = {itemMovie} />)    
            }
        </div>
    )
}

export default Favorites

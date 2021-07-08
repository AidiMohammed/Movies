import React,{useEffect,useState,Fragment} from 'react'
import {Link} from 'react-router-dom'
import '../../styles/components/movie/movie.css'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'

function Movie(props) 
{
    //console.log(props.movie)
    const [statesAccount,setStatesAccount] = useState({
        favorite: null,
        id: null,
        rated: {value: 0},
        watchlist: null})

    const {islogin,session_id} = useSelector(state => state.acountModules)
    if(props.movie.length != 0)
        var {
            adult,
            backdrop_path,
            genre_ids,
            id,
            media_type,
            original_language,
            original_title,
            overview,
            popularity,
            poster_path,
            release_date,
            title,
            video,
            vote_average,
            vote_count
        } = props.movie;
    
    const accountStates = new Promise((resolve,reject) => 
    {
        if(islogin)
        axios.get(`https://api.themoviedb.org/3/movie/${id}/account_states?api_key=c3e344079e651daccf822dba7e739968&session_id=${session_id}`)
            .then(res => resolve(res.data))
            .catch(err => reject(err.message))
    })

    useEffect(()=> {
        if(islogin)
        {
            accountStates
            .then(res => {
                setStatesAccount(res)
            })
            .catch(err => console.log(err))
        }
    },[])

    const toggleFavorite = (id) =>{
        console.log("TOGGOLE FAVORITE : ID",id," | ",statesAccount.favorite)
    }

    const actionsliste = islogin ?  
        <div className="container-actions">
            {console.log(statesAccount.rated)}
            <ul>
                <li><span className="link" to="/"><i class="fas fa-list-alt"></i></span></li>
                <li>{statesAccount.favorite === true ? <span className="action-validate"><i onClick={() => toggleFavorite(id)} class="fas fa-heart action-validate"></i></span> : <span className="link" to="/"><i onClick={() =>toggleFavorite(id)}class="far fa-heart"></i></span>}</li>
                <li>{statesAccount.watchlist === true ? <span className="action-validate" ><i class="fas fa-bookmark action-validate"></i></span> : <span className="link" ><i class="far fa-bookmark"></i></span>}</li>
                <li>{statesAccount.rated.value > 0 ? <span className="action-validate" ><i class="fas fa-star action-validate"></i></span> : <span className="link" ><i class="far fa-star"></i></span>}</li>
            </ul>
        </div>:
        null

    return (

        <div className="content-movie">
            {
                (props.movie.length !== 0) ? 
                            <Fragment>
                                <Link className="link" to={`/Movies/movieDetails/${id}`}>
                                    <img className="img-content" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
                                    <h3 className="title">{original_title}</h3>
                                </Link>
                                {actionsliste}
                            </Fragment>
                            :
                            null
            }

        </div>
    )
}

export default Movie

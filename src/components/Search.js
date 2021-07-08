import React,{useState,useEffect} from 'react'
import '../styles/components/search.css'
import {onSerachString} from '../redux/SearchMulti/actionsSeach'
import {useDispatch} from 'react-redux'

function Search(props) {
    const [StringSearch, setStringSearch] = useState("");
    const dispatch =useDispatch()

    useEffect(() =>{
        dispatch(onSerachString(StringSearch,1))
    },[StringSearch])

    const onChangeSearchString = (e) =>{
        setStringSearch(e.target.value)
    }

    return (
        <div>
            <div className="box">
                <div className="container-1">
                <input onChange={onChangeSearchString} value={StringSearch} type="search" id="search" placeholder="Search..." />
                </div>
            </div>
        </div>
    )
}

export default Search

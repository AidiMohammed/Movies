import React,{useEffect,Fragment,useState} from 'react'
import axios from 'axios'
 
function RatedStarts({rated,movie_id,session_id,setRated}) 
{
    const [state, setstate] = useState(rated)

    useEffect(() => 
    {
        if(rated > 0) setstate(rated)
        const logStart = document.querySelector(`.movie-${movie_id}`);
        Array.from(logStart.children).forEach((item) => 
        {
            if(rated >= parseInt(item.dataset.start))
                item.classList.replace("far","fa")
        })

    }, [])

    function getPreviousSipling(elem)
    {

        let siplings = []
        const spanNodeName = "SPAN"
        while (elem = elem.previousSibling)
        if(elem.nodeName === spanNodeName)
            siplings = [elem,...siplings]
        return siplings;
    }

    const getRatedValue = e =>
    {
        if(state === undefined)
        {
            const requestBody = {"value": parseInt(e.target.dataset.start)}
            axios.post(`https://api.themoviedb.org/3/movie/${movie_id}/rating?api_key=c3e344079e651daccf822dba7e739968&session_id=${session_id}`,requestBody)//post rating
                .then(res => {
                    setRated(e.target.dataset.start)
                    setstate(e.target.dataset.start)
                })
                .catch(err => console.error(err.message))
        }
    }

    const emptyStart = e =>
    {
        if(state === undefined)
            e.target.classList.replace("fa","far");
    }

    const fillStart = e =>
    {
        if(state === undefined)
        {
            getPreviousSipling(e.target).forEach(element => {
                element.classList.replace("far","fa")
            });
            e.target.classList.replace("far","fa");
        }
    }

    const onResetRated = () =>
    {
        axios.delete(`https://api.themoviedb.org/3/movie/${movie_id}/rating?api_key=c3e344079e651daccf822dba7e739968&session_id=${session_id}`)//delete rating
            .then(res => {
                setstate(undefined)
                setRated(undefined)
                const logStart = document.querySelector(`.movie-${movie_id}`);
                Array.from(logStart.children).forEach((item) => 
                {
                    item.classList.replace("fa","far")
                })
            })
            .catch(err => console.error("err : ",err.message))

    }
    //document.querySelector("a").children
    const resetRated = rated && <i onClick={() => onResetRated()} class="fas fa-times-circle"></i>

    return (
        <Fragment>
            {resetRated}
            <span onClick={(e) => getRatedValue(e)} onMouseOver={e => fillStart(e)} onMouseOut={(e) => emptyStart(e)} className="far fa-star" data-start={2}></span>
            <span onClick={(e) => getRatedValue(e)} onMouseOver={e => fillStart(e)} onMouseOut={(e) => emptyStart(e)} className="far fa-star" data-start={4}></span>
            <span onClick={(e) => getRatedValue(e)} onMouseOver={e => fillStart(e)} onMouseOut={(e) => emptyStart(e)} className="far fa-star" data-start={6}></span>
            <span onClick={(e) => getRatedValue(e)} onMouseOver={e => fillStart(e)} onMouseOut={(e) => emptyStart(e)} className="far fa-star" data-start={8}></span>
            <span onClick={(e) => getRatedValue(e)} onMouseOver={e => fillStart(e)} onMouseOut={(e) => emptyStart(e)} className="far fa-star" data-start={10}></span>
        </Fragment>
    )
}

export default RatedStarts

import React,{useEffect,useState} from 'react'
import axios from 'axios'
import '../../../styles/components/movie/helpers/addToList.css'

function AddToList({session_id,account_id}) 
{
    const [infoLists, setInfoLists] = useState(
        [{
            description: undefined,
            favorite_count: undefined,
            id: undefined,
            iso_639_1: undefined,
            item_count: undefined,
            list_type: undefined,
            name: undefined,
            poster_path: undefined,
        }]
    );

    useEffect(() => 
    {
        axios.get(`https://api.themoviedb.org/3/account/${account_id}/lists?api_key=c3e344079e651daccf822dba7e739968&language=en-US&session_id=${session_id}&page=1`)
        .then(res => setInfoLists(res.data.results))
        .catch(err => console.log(err.message))

    }, [])
    return (
        <div className="content-pages">
            <div class="modal-container" id="modal-opened">
                <div class="modal">
                    <div class="modal__details">
                        <h1 class="modal__title">Modal Title</h1>
                        <p class="modal__description">Sentence that will tell user what this modal is for or something.</p>
                    </div>
                    <p class="modal__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore repellendus.</p>
                    <button class="modal__btn">Button &rarr;</button>
                    <a href="#modal-closed" class="link-2"></a>
                </div>
            </div>
        </div>
    )
}

export default AddToList

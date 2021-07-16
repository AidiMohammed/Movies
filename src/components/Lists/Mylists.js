import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import '../../styles/pages/authentication/myLists.css'
import {DispatchGetListsCreated} from '../../redux/account/actionsAccount'
import {DispatchDeletList} from '../../redux/account/actionsAccount'
import CreatedList from './CreatedList'

function Mylists({ShowListes}) 
{

    const {session_id,detailsAccount,createdLists} = useSelector(state => state.acountModules);
    const dispatch = useDispatch()
    const [showModalCreatedList, setShowModalCreatedList] = useState(false)

    useEffect(() => {
    }, [createdLists])

    useEffect(() =>
    {
        dispatch(DispatchGetListsCreated(detailsAccount.id,session_id))
    }, [])

    return (
        ShowListes &&
        <div className="mylistes">

            <div className="header-mylists">
                <h1>Mes Listes :</h1>
                <button className="btn" onClick={()=> setShowModalCreatedList(!showModalCreatedList)}>Créer une liste </button>
            </div>
            <div className="content-mylists">
                {
                    createdLists.map((element,index) => 
                        (
                            <div key={index} className="list">
                                <h1>Nom de liste : {element.name}</h1>
                                <h2>Item : {element.item_count}</h2>
                                <h2>description : {element.description}</h2>
                                <button onClick={() => dispatch(DispatchDeletList(element.id,session_id))} style={{background:"transparent"}} className="btn">suprimer</button>
                            </div>
                        )
                    )
                }
            </div>
            <CreatedList show = {showModalCreatedList} toggleModel= {setShowModalCreatedList} session_id = {session_id} language = {detailsAccount.iso_639_1}/>
        </div>
    )
}

export default Mylists

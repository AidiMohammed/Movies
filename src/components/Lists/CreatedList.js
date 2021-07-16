import React,{useState} from 'react'
import '../../styles/components/lists/createdList.css'
import {useDispatch} from 'react-redux';
import {DispatchCreatedNewList} from '../../redux/account/actionsAccount'
 
function CreatedList({show,toggleModel,language,session_id}) 
{
    const stateInit = {name: "",desc: ""}
    const [state, setState] = useState(stateInit)
    const dispatch = useDispatch()

    const submitList = (e) =>
    {
        e.preventDefault()

        const data ={
            name: state.name,
            desc: state.desc,
            language,
            session_id
        }

        dispatch(DispatchCreatedNewList(data))

        toggleModel(false)
        console.log("State :",state)
        setState(stateInit)
    } 

    const changetText = e =>{
        setState({...state,[e.target.name]: e.target.value})
    } 

    const closeModale = () =>
    {
        setState(stateInit)
        toggleModel(false)
    }

    const {name,desc} = state;

    return (
        show && (
        <div className="overlay" >
            <div className="center">
                <div className="content-modal">
                    <div className="hader-Modal-created-Liset">
                        <h1>Créer une nouvelle liste</h1>
                        <i onClick={() => closeModale()} class="fa fa-times" aria-hidden="true"></i>    
                    </div>
                    <div className="body-modal">
                        <form onSubmit={(e) =>submitList(e)}>
                            <input required type="text" onChange={(e) => changetText(e)} value={name} name="name" placeholder="Nom de liste"/>
                            <input type="text" onChange={(e) => changetText(e)}  value={desc} name="desc" placeholder="description de la listes"/>
                            <button type="submit" className="btn">Céer la liste</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    )
}

export default CreatedList

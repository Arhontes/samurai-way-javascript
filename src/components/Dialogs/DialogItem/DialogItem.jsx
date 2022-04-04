import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props)=>{
    let path = "/dialogs/"+props.id
    return (
        <div className = {s.dialog}>
            <NavLink to = {path} className={navData=>navData.isActive ? s.active:s.dialogsItems}>{props.name}</NavLink>
        </div>
    )
}
let dialogsData = [
    {id:1 ,name:'Sasha' },
    {id:2 ,name:'Sasha' },
    {id:3 ,name:'Sasha' },
    {id:4 ,name:'Sasha'},
    {id:5 ,name:'Sasha'}
]

let dialogsElement = dialogsData.map(d=> <DialogItem name={d.name} id={d.id} />);




export default dialogsElement;
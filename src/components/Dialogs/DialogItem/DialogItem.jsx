import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props)=>{
    let path = "/dialogs/"+props.id
    return (
        <div key = {props.id} className={s.dialogItems}>
            <NavLink to = {path} className={navData=>navData.isActive ? s.active:s.noneActive}>{props.name}</NavLink>
        </div>
    )
}

/*let dialogsElement = dialogsData.map(d=> <DialogItem name={d.name} id={d.id} />);*/




export default DialogItem;
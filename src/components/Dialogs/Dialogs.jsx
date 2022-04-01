import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props)=>{
    let path = "/dialogs/"+props.id
    return (

        <div className = {s.dialog}>
            <NavLink to = {path} className={navData=>navData.isActive ? s.active:s.dialogsItems}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props)=>{
    return (
        <div> {props.message}</div>
    )
}

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name ="Sasha" id="1"/>
                <DialogItem name ="Leha" id="2"/>
                <DialogItem name ="Alex" id="3"/>
                <DialogItem name ="Batya" id="4"/>

            </div>

            <div className={s.messages}>

                <Message message="Hi"/>
                <Message message="Cool"/>
                <Message message="Good morning"/>
            </div>


        </div>

    )
}
export default Dialogs;
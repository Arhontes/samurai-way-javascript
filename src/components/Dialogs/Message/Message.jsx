import s from './Message.module.css'
import {NavLink} from "react-router-dom";

const Message = (props)=>{
    return (
        <div key={props.id} className={s.dialog}>{props.message}</div>
    )
}

export default Message;
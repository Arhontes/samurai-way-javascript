import s from './Message.module.css'
import {NavLink} from "react-router-dom";

const Message = (props)=>{
    return (
        <ul>
            <li>
                <div key={props.id} className={s.message}>{props.message}</div>
            </li>
        </ul>




    )
}

export default Message;
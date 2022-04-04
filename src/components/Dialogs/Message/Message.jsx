import s from './Message.module.css'
import {NavLink} from "react-router-dom";

const Message = (props)=>{
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
let messageData = [
    {id: 1, message:'Good morning' },
    {id: 2, message:'Good morning'  },
    {id: 3, message:'Good morning'  },
    {id: 4, message:'Good morning'  },
    {id: 5, message:'Good morning'  }
]
let messagesElement = messageData.map(message=><Message message={message.message} />);




export default messagesElement;
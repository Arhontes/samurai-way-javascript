import s from './Message.module.css'
import {NavLink} from "react-router-dom";
import React from "react";



const Message = (props) => {

    return (
        <div>

            <div key={props.id} className={s.message}>{props.message}</div>


        </div>
    );
};

export default Message;
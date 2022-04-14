import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";

let newMessageElement = React.createRef()

let sendMessage = () => {

    let textMessage = newMessageElement.current.value
    alert(textMessage)
}
const Dialogs = (props) => {

    let dialogsElement = props.data.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.data.dialogsPage.messages.map(message => <Message message={message.message}/>);
    return (
        <div className={s.dialogs}>

            <div>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div className={s.listOfMessage}>
                    {messagesElement}
                </div>
                <div className={s.inputArea}>
                    <div className={s.buttons}>
                        <textarea ref={newMessageElement}></textarea>
                        <button onClick={sendMessage}>
                            Send message
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Dialogs;
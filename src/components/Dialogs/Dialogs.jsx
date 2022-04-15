import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";

const Dialogs = (props) => {
    debugger;
    let newMessageElement = React.createRef()
    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.messages.map(message => <Message message={message.message}/>);
    let updateMessage = (e) => {

        let textMessage = e.target.value
        props.updateMessageText(textMessage)
    }
    let sendMessage =()=>{
        let personMessage = {id: 1, message: newMessageElement.current.value};
        props.sendMessage(personMessage)
    }
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
                        <textarea onChange={updateMessage}
                                  ref={newMessageElement}
                                    value={props.currentMessage}

                        />
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
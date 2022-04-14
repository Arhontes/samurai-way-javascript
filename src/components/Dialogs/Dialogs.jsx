import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {sendMessageActionCreator, updateNewPostMessageActionCreator} from "../../Redux/state";




const Dialogs = (props) => {
    let newMessageElement = React.createRef()
    let dialogsElement = props.data.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.data.dialogsPage.messages.map(message => <Message message={message.message}/>);
    let updateMessage = () => {

        let textMessage = newMessageElement.current.value
        props.dispatch(updateNewPostMessageActionCreator(textMessage))
    }
    let sendMessage =()=>{
        let personMessage = {id: 1, message: newMessageElement.current.value};
        props.dispatch(sendMessageActionCreator(personMessage))
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
                                    value={props.data.dialogsPage.dataOfCurrentMessage.message}

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
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {sendMessageActionCreator, updateNewPostMessageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let updateMessageText = (message) => {
        props.store.dispatch(updateNewPostMessageActionCreator(message))
    }
    let sendMessage = (personMessage) => {
        props.store.dispatch(sendMessageActionCreator(personMessage))
    }
    return <Dialogs
        updateMessageText = {updateMessageText}
        sendMessage = {sendMessage}
        dialogs={props.store.getState().dialogsPage.dialogs}
        messages={props.store.getState().dialogsPage.messages}
        currentMessage={props.store.getState().dialogsPage.dataOfCurrentMessage.message}
    />


}
export default DialogsContainer;
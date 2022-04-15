import React from "react";
import {sendMessageActionCreator, updateNewPostMessageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps =(state)=>{
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        currentMessage: state.dialogsPage.dataOfCurrentMessage.message

    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        updateMessageText: (message)=>{
            dispatch(updateNewPostMessageActionCreator(message))
        },
        sendMessage: (personMessage)=>{
            dispatch(sendMessageActionCreator(personMessage))
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {sendMessageActionCreator, updateNewPostMessageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../Redux/storeContext";

const DialogsContainer = (props) => {



    return <StoreContext.Consumer>
            { store => {

                let updateMessageText = (message) => {
                    store.dispatch(updateNewPostMessageActionCreator(message))
                }
                let sendMessage = (personMessage) => {
                    store.dispatch(sendMessageActionCreator(personMessage))
                }
                return <Dialogs
                    updateMessageText={updateMessageText}
                    sendMessage={sendMessage}
                    dialogs={store.getState().dialogsPage.dialogs}
                    messages={store.getState().dialogsPage.messages}
                    currentMessage={store.getState().dialogsPage.dataOfCurrentMessage.message}
                />
            }

    }
    </StoreContext.Consumer>




}
export default DialogsContainer;
const add_message = 'ADD-MESSAGE';
const update_newMessageText = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case update_newMessageText:
            state.dataOfCurrentMessage = action.newMessage
            break;
        case add_message:
            state.messages.push({
                id: action.personId,
                message: action.message
            })
            break;
    }
    return state;

}
export const sendMessageActionCreator = (personMessage) => {
    return {
        type: add_message,
        personId: personMessage.id,
        message: personMessage.message
    }
}
export const updateNewPostMessageActionCreator = (message) => {
    return {
        type: update_newMessageText,
        newMessage: message
    }
}
export default dialogsReducer;
const add_message = 'ADD-MESSAGE';
const update_newMessageText = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dataOfCurrentMessage: {id: 0, message: 'add text here'},
    messages: [
        {id: 1, message: 'Good morning!'},
        {id: 2, message: 'Good afternoon!'},
        {id: 3, message: 'Good evening!'},
        {id: 4, message: 'Good night!'},
        {id: 5, message: 'Good day!'}
    ],
    dialogs: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Leha'},
        {id: 3, name: 'Michael'},
        {id: 4, name: 'Dobrinya'},
        {id: 5, name: 'Max'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
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
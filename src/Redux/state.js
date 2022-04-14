import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const update_newPostText = 'UPDATE-NEW-POST-TEXT';
const add_post = 'ADD-POST';
const add_message = 'ADD-MESSAGE';
const update_newMessageText = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?'},
                {id: 2, message: 'I\'m fine,thanks'}
            ],
            newPostText: "Zdarova Sanya!"

        },
        dialogsPage: {
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

    },

    _callSubscriber() {

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        console.log("get state somewhere")
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

export default store;
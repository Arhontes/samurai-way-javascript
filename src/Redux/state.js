const update_newPostText = 'UPDATE-NEW-POST-TEXT';
const add_post = 'ADD-POST';

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
        if (action.type === add_post) {
            let newPost = {id: 5, message: this._state.profilePage.newPostText};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === update_newPostText) {
            this._state.profilePage.newPostText = action.text;

            this._callSubscriber(this._state)
        }
    }
}

export const updateNewPostTextActionCreator = (text)=>{
    return {
        type: update_newPostText,
        text: text
    }
}
export const addPostActionCreator=()=>{
    return {
        type: add_post
    }
}
export default store;
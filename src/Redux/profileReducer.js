const update_newPostText = 'UPDATE-NEW-POST-TEXT';
const add_post = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'I\'m fine,thanks'}
    ],
    newPostText: "Zdarova Sanya!"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case add_post:
            let newPost = {id: 5, message: state.newPostText};
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case update_newPostText:
            state.newPostText = action.text;
            break;
    }

    return state;

}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: update_newPostText,
        text: text
    }
}
export const addPostActionCreator = () => {
    return {
        type: add_post
    }
}
export default profileReducer;
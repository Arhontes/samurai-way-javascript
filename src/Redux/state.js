import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?'},
            {id: 2, message: 'I\'m fine,thanks'}
        ],


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

}

export let addPost = (postMessage) =>{
    debugger;
    let newPost = {id:5, message: postMessage};
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}
export default state;
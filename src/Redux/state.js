

let state = {
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

}
let someRerender=()=>{

}
export const subscribe = (observer)=>{
    someRerender = observer;
}

export let updateNewPostText = (newText)=>{
    state.profilePage.newPostText=newText;

    someRerender(state)
}

export let addPost = () =>{
    let newPost = {id:5, message: state.profilePage.newPostText};
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    someRerender(state)
}

export default state;
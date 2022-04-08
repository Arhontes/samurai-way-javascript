import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost, updateNewPostText} from "./Redux/state";

export let rerenderEntireTree=(state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App data={state}
                 addPostFunction={addPost}
                 updateNewPostText = {updateNewPostText}
                 newText = {state.profilePage.newPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

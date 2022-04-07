import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import  {addPost} from "./Redux/state";

export let rerenderEntireTree=(state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App data={state} addPostFunction={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

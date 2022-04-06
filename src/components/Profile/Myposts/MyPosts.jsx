import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import Message from "../../Dialogs/Message/Message";

let newPostElement = React.createRef();
function addPost(){

    let text = newPostElement.current.value
    alert(text)
}


const MyPosts = (props) => {

    let postsElement = props.posts.map(post=><Post message={post.message} /> )
  return (
    <div >
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <button onClick={addPost}>
                Add post
            </button>
        </div>

        {postsElement}

    </div>
  );
};

export default MyPosts;

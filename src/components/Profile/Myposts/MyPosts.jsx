import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import Message from "../../Dialogs/Message/Message";





const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let onPostChange=()=>{
        let text= newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let addPost=()=>{

        props.addPost()

    }

        let postsElement = props.posts.map(post=><Post message={post.message} /> )
  return (
    <div >
        <div>
            <div>
                <textarea value = {props.newText}
                          onChange={onPostChange}
                          ref={newPostElement}
                />
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

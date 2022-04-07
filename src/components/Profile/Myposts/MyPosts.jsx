import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import Message from "../../Dialogs/Message/Message";




const MyPosts = (props) => {
    let newPostElement = React.createRef();

    function addPost(){
        debugger;
        let text = newPostElement.current.value
        props.addPostFunction(text)
    }

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

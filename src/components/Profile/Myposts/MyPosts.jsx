import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    let onAddPost = () => {

        props.addPost();

    }

    let postsElement = props.posts.map(post => <Post message={post.message}/>)
    return (
        <div>
            <div>
                <div>
                <textarea value={props.newPostText}
                          onChange={onPostChange}
                          ref={newPostElement}
                />
                </div>
                <button onClick={onAddPost}>
                    Add post
                </button>
            </div>

            {postsElement}

        </div>
    );
};

export default MyPosts;

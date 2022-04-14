import React from "react";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";


const MyPosts = (props) => {
    debugger;
    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // let action = {type: 'UPDATE-NEW-POST-TEXT', text: text};
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    let addPost = () => {

        props.dispatch(addPostActionCreator())

    }
debugger;
    let postsElement = props.posts.profilePage.posts.map(post => <Post message={post.message}/>)
    return (
        <div>
            <div>
                <div>
                <textarea value={props.posts.profilePage.newPostText}
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

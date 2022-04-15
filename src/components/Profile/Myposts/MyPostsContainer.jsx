import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../Redux/storeContext";


const MyPostsContainer = (props) => {

    let addPost = () => {

        props.store.dispatch(addPostActionCreator())

    }
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action);
    }


    return <StoreContext.Consumer>
        {store => {

            let addPost = () => {
                store.dispatch(addPostActionCreator());
            }
            let onPostChange = (text) => {
                let action = updateNewPostTextActionCreator(text)
                store.dispatch(action);
            }
            return <MyPosts
                addPost={addPost}
                updateNewPostText={onPostChange}
                posts={store.getState().profilePage.posts}
                newPostText={store.getState().profilePage.newPostText}
            />
        }
        }
    </StoreContext.Consumer>

};

export default MyPostsContainer;

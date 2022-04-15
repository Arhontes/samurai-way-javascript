import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


/*const MyPostsContainer = (props) => {

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

};*/
const mapStateToProps =(state)=>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        addPost: ()=>{
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text)=>{

                let action = updateNewPostTextActionCreator(text)
                dispatch(action);
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);



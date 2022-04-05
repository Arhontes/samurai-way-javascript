import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import Message from "../../Dialogs/Message/Message";


const MyPosts = (props) => {

    let postsElement = props.posts.map(post=><Post message={post.message} /> )
  return (
    <div >

        {postsElement}

    </div>
  );
};

export default MyPosts;

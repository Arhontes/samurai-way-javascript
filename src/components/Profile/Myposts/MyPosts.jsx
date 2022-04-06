import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import Message from "../../Dialogs/Message/Message";

function addPost(){alert('YOO!')}

const MyPosts = (props) => {

    let postsElement = props.posts.map(post=><Post message={post.message} /> )
  return (
    <div >
        <div>
            <button onClick={addPost}>Add post
            </button>
        </div>

        {postsElement}

    </div>
  );
};

export default MyPosts;

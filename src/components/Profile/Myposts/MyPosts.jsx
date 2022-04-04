import s from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = () => {
  return (
    <div>


        <Post message='Hi, how are you?' />
        <Post message="I'm fine,thanks " />

    </div>
  );
};

export default MyPosts;

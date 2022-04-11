import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts.profilePage.posts}
                     addPost={props.addPost}
                     newText={props.newText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

export default Profile;

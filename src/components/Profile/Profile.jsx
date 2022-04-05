import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div >
            <ProfileInfo />
            <MyPosts posts={props.posts.profilePage.posts}/>
        </div>
    );
};

export default Profile;

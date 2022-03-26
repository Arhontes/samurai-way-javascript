import MyPosts from "./Myposts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div >
            <div>
                <img className={s.img}
                     src="https://user-images.githubusercontent.com/88069082/149673405-b47f71c1-0777-4038-9247-5b0c9d166f22.jpg"/>
            </div>


            <MyPosts/>

        </div>

    );
};

export default Profile;

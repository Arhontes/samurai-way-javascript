import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
            <div>
                <div>
                    <img className={s.img}
                         src="https://user-images.githubusercontent.com/88069082/149673405-b47f71c1-0777-4038-9247-5b0c9d166f22.jpg"/>
                </div>
                <div className={s.description}>
                    <h2> My profile description </h2>
                </div>
            </div>


    );
};

export default ProfileInfo;

import s from "./Post.module.css";

const Post = (props) => {
  
  return (
    <div className={s.item}>
      
      <img src="https://w7.pngwing.com/pngs/919/879/png-transparent-computer-icons-ico-miscellaneous-blue-face.png"></img>
      {props.message}
      <button>SomeButton</button>
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;

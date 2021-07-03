import { Link } from 'react-router-dom';
import Interactions from '../interactions';
import SingleComment from '../comment/single-comment';
import MainCSS from './main.module.css';

function SinglePost() {
  return (
    <div className={MainCSS.mainBox}>
      <div className={MainCSS.postUserBox}>
        <Link className={MainCSS.link}>
          <img
            className={MainCSS.avatar}
            src="https://jejuhydrofarms.com/wp-content/uploads/2020/05/blank-profile-picture-973460_1280.png"
            alt="avatar"
          />
        </Link>
        <p>
          <span>User Name</span>
          <br />
          <span>10m ago</span>
        </p>
      </div>

      <p className={MainCSS.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <div className={MainCSS.postImageBox}>
        <img
          className={MainCSS.postImage}
          src="https://wallpaperaccess.com/full/3949076.jpg"
          alt="post"
        />
      </div>
      <Interactions />
      <SingleComment />
      <SingleComment />
      <SingleComment />
    </div>
  );
}

export default SinglePost;

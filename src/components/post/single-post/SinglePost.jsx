import { Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';
import Interactions from '../interactions';
import SingleComment from '../comment/single-comment';
import CommentForm from '../comment/comment-form';
import MainCSS from './main.module.css';

function SinglePost() {
  const [displayComments, setDisplayComments] = useState(false);

  const changeDisplayComments = () => {
    setDisplayComments(!displayComments);
  };

  return (
    <div className={MainCSS.mainBox}>
      <div className={MainCSS.postUserBox}>
        <Link to="/" className={MainCSS.link}>
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
      <div className="d-flex justify-content-center">
        <p className={MainCSS.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>

      <div className={MainCSS.postImageBox}>
        <img
          className={MainCSS.postImage}
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--Yo7-Tl_W--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aykr6602h90tij1154ha.png"
          alt="post"
        />
      </div>
      <Interactions changeDisplayComments={changeDisplayComments} />
      <div
        className={classNames(
          {
            'd-block': displayComments,
          },
          {
            'd-none': !displayComments,
          }
        )}>
        <SingleComment />
        <SingleComment />
        <SingleComment />
      </div>
      <CommentForm />
    </div>
  );
}

export default SinglePost;

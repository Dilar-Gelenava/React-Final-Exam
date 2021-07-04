import { Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';
import Interactions from '../interactions';
import SingleComment from '../comment/single-comment';
import CommentForm from '../comment/comment-form';
import MainCSS from './main.module.css';
import { DeletePost } from '../../../services/posts/DeletePost';

function SinglePost({ post }) {
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
          <span>User Name - {post.userId}</span>
          <span onClick={() => DeletePost(post.postId)} className="ms-3">
            •••
          </span>
          <br />
          <span>{post.date}</span>
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <p className={MainCSS.description}>{post.description}</p>
      </div>

      {post.imageUrl && (
        <div className={MainCSS.postImageBox}>
          <img className={MainCSS.postImage} src={post.imageUrl} alt="post" />
        </div>
      )}
      {post.videoUrl && (
        <video width="100%" controls>
          <source src={post.videoUrl} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      )}

      <Interactions changeDisplayComments={changeDisplayComments} />
      <div
        className={classNames({
          'd-none': !displayComments,
        })}>
        <SingleComment />
        <SingleComment />
        <SingleComment />
      </div>
      <CommentForm />
    </div>
  );
}

export default SinglePost;

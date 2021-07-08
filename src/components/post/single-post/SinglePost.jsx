import { Link } from 'react-router-dom';
import { useState } from 'react';
import React, { useRef } from 'react';
import classNames from 'classnames';
import Interactions from '../interactions';
import SingleComment from '../comment/single-comment';
import CommentForm from '../comment/comment-form';
import { DeletePost } from '../../../services/posts/DeletePost';
import { GetComments } from '../../../services/comments/GetComments';
import { TimeDiff } from '../../../services/date/TimeDiff';
import { GetUserData } from '../../../services/users/GetUserData';
import MainCSS from './main.module.css';

function SinglePost({ post, changePosts }) {
  const user = GetUserData(post.userId);

  const [comments, setComments] = useState(GetComments(post.id));

  const changeComments = () => {
    setComments(GetComments(post.id));
  };

  var commentCount = 0;
  if (comments) {
    commentCount = comments.length;
  }

  const [displayComments, setDisplayComments] = useState(false);

  const changeDisplayComments = () => {
    setDisplayComments(!displayComments);
  };

  const interactionsRef = useRef();
  const scroll = () => {
    interactionsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={MainCSS.mainBox}>
      <div className={MainCSS.postUserBox}>
        <Link to={`/profile?id=${user.id}`} className={MainCSS.link}>
          <img className={MainCSS.avatar} src={user.avatar} alt="avatar" />
        </Link>
        <p>
          <span>{user.userName}</span>
          <span
            onClick={() => {
              DeletePost(post.id);
              changePosts();
            }}
            className="ms-3"
            role="button"
            title="delete">
            •••
          </span>
          <br />
          <span className="text-muted small" title={Date(post.date)}>
            {TimeDiff(post.date)}
          </span>
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
        <div className={MainCSS.postImageBox}>
          <video className={MainCSS.postImage} width="100%" controls>
            <source src={post.videoUrl} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
      )}

      <Interactions
        changeDisplayComments={changeDisplayComments}
        commentCount={commentCount}
        postId={post.id}
        interactionsRef={interactionsRef}
      />
      <div
        className={classNames({
          'd-none': !displayComments,
        })}>
        {comments &&
          comments.map((comment) => (
            <SingleComment
              comment={comment}
              changeComments={changeComments}
              key={comment.id}
            />
          ))}
      </div>
      <CommentForm
        postId={post.id}
        changeComments={changeComments}
        scroll={scroll}
        setDisplayComments={setDisplayComments}
      />
    </div>
  );
}

export default SinglePost;

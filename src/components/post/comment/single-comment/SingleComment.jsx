import { Link } from 'react-router-dom';
import { DeleteComment } from '../../../../services/comments/DeleteComment';
import { TimeDiff } from '../../../../services/date/TimeDiff';
import { GetUserData } from '../../../../services/users/GetUserData';
import MainCSS from './main.module.css';

function SingleComment({ comment, changeComments }) {
  const user = GetUserData(comment.userId);

  return (
    <div className={MainCSS.mainBox}>
      <Link to={`profile?id=${user.id}`}>
        <img className={MainCSS.avatar} src={user.avatar} alt="avatar" />
      </Link>
      <div className={MainCSS.textBox}>
        <span className="ms-2 text-light">{user.userName}</span>
        <span className="ms-2 text-muted small" title={Date(comment.date)}>
          {TimeDiff(comment.date)}
        </span>
        <span
          onClick={() => {
            DeleteComment(comment.id);
            changeComments();
          }}
          className="ms-3 me-1 text-light"
          role="button"
          title="delete">
          •••
        </span>
        <p className={MainCSS.text}>{comment.text}</p>
      </div>
    </div>
  );
}

export default SingleComment;

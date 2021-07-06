import { Link } from 'react-router-dom';
import { DeleteComment } from '../../../../services/comments/DeleteComment';
import MainCSS from './main.module.css';

function SingleComment({ comment, changeComments }) {
  return (
    <div className={MainCSS.mainBox}>
      <Link to="/">
        <img
          className={MainCSS.avatar}
          src="https://jejuhydrofarms.com/wp-content/uploads/2020/05/blank-profile-picture-973460_1280.png"
          alt="avatar"
        />
      </Link>
      <div className={MainCSS.textBox}>
        <span className="ms-2 text-light">User Name - {comment.userId}</span>
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

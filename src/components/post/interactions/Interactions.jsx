import PropTypes from 'prop-types';
import { Like } from '../../../services/likes/Like';
import MainCSS from './main.module.css';

function Interactions({ changeDisplayComments, commentCount, postId }) {
  return (
    <div className={MainCSS.mainBox}>
      <div className={MainCSS.interactionsInfo}>
        <span className={MainCSS.count}>1</span>
        <span className={MainCSS.count}>{commentCount}</span>
        <span className={MainCSS.count}>3</span>
      </div>
      <div className={MainCSS.interactions}>
        <button
          onClick={() => Like(true, postId, 1)}
          className={MainCSS.buttons}>
          <img
            className={MainCSS.icons}
            src={`${process.env.PUBLIC_URL}/resources/like.svg`}
            alt="like"
          />
          Like
        </button>
        <button onClick={changeDisplayComments} className={MainCSS.buttons}>
          <img
            className={MainCSS.icons}
            src={`${process.env.PUBLIC_URL}/resources/comments.svg`}
            alt="comments"
          />
          Comments
        </button>
        <button
          onClick={() => Like(false, postId, 1)}
          className={MainCSS.buttons}>
          <img
            className={MainCSS.icons}
            src={`${process.env.PUBLIC_URL}/resources/dislike.svg`}
            alt="dislike"
          />
          Dislike
        </button>
      </div>
    </div>
  );
}

Interactions.propTypes = {
  changeDisplayComments: PropTypes.func,
  commentCount: PropTypes.number,
};

export default Interactions;

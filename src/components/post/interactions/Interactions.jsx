import PropTypes from 'prop-types';
import MainCSS from './main.module.css';

function Interactions({ changeDisplayComments }) {
  return (
    <div className={MainCSS.mainBox}>
      <div className={MainCSS.interactionsInfo}>
        <span className="text-white">1</span>
        <span className="text-white">2</span>
        <span className="text-white">3</span>
      </div>
      <div className={MainCSS.interactions}>
        <button className={MainCSS.buttons}>
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
        <button className={MainCSS.buttons}>
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
};

export default Interactions;

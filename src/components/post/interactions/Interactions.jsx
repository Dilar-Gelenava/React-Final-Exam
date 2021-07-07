import { useState } from 'react';
import PropTypes from 'prop-types';
import clickSfx from '../../../sounds/click.mp3';
import { Like } from '../../../services/likes/Like';
import { GetLikes } from '../../../services/likes/GetLikes';
import { IsLiked } from '../../../services/likes/IsLiked';
import MainCSS from './main.module.css';
import { Howl } from 'howler';

function Interactions({
  changeDisplayComments,
  commentCount,
  postId,
  interactionsRef,
}) {
  const play = () => {
    const sound = new Howl({ src: clickSfx, ht5: true });
    sound.play();
  };

  const [likes, setLikes] = useState(GetLikes(postId));
  const [isLiked, setIsLiked] = useState(IsLiked(postId));
  const like = (isUp) => {
    Like(isUp, postId);
    setIsLiked(IsLiked(postId));
    setLikes(GetLikes(postId));
  };

  return (
    <div ref={interactionsRef} className={MainCSS.mainBox}>
      <div className={MainCSS.interactionsInfo}>
        <span className={MainCSS.count}>{likes.up}</span>
        <span className={MainCSS.count}>{commentCount}</span>
        <span className={MainCSS.count}>{likes.down}</span>
      </div>
      <div className={MainCSS.interactions}>
        <button
          style={{
            color: `${(isLiked && isLiked.up && '#2c85fe') || 'white'}`,
          }}
          onClick={() => {
            play();
            like(true);
          }}
          className={MainCSS.buttons}>
          <img
            className={MainCSS.icons}
            src={`${process.env.PUBLIC_URL}/icons/like${
              (isLiked && isLiked.up && '-on') || ''
            }.svg`}
            alt="like"
          />
          Like
        </button>
        <button
          style={{
            color: `${(commentCount && '#2c85fe') || 'white'}`,
          }}
          onClick={changeDisplayComments}
          className={MainCSS.buttons}>
          <img
            className={MainCSS.icons}
            src={`${process.env.PUBLIC_URL}/icons/comments${
              (commentCount && '-on') || ''
            }.svg`}
            alt="comments"
          />
          Comments
        </button>
        <button
          style={{
            color: `${(isLiked && isLiked.down && '#2c85fe') || 'white'}`,
          }}
          onClick={() => {
            play();
            like(false);
          }}
          className={MainCSS.buttons}>
          <img
            className={MainCSS.icons}
            src={`${process.env.PUBLIC_URL}/icons/dislike${
              (isLiked && isLiked.down && '-on') || ''
            }.svg`}
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

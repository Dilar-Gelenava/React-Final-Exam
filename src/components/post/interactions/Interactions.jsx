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
  const [isLiked, setIsLiked] = useState(IsLiked(postId, 1));

  const changeLikes = () => {
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
          onClick={() => {
            play();
            Like(true, postId);
            changeLikes();
            setIsLiked(GetLikes(postId));
          }}
          className={MainCSS.buttons}>
          <img
            className={MainCSS.icons}
            src={`${process.env.PUBLIC_URL}/resources/like${
              (isLiked && isLiked.up && '-on') || ''
            }.svg`}
            alt="like"
          />
          Like
        </button>
        <button onClick={changeDisplayComments} className={MainCSS.buttons}>
          <img
            className={MainCSS.icons}
            src={`${process.env.PUBLIC_URL}/resources/comments${
              (commentCount && '-on') || ''
            }.svg`}
            alt="comments"
          />
          Comments
        </button>
        <button
          onClick={() => {
            play();
            Like(false, postId);
            changeLikes();
            setIsLiked(GetLikes(postId));
          }}
          className={MainCSS.buttons}>
          <img
            className={MainCSS.icons}
            src={`${process.env.PUBLIC_URL}/resources/dislike${
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

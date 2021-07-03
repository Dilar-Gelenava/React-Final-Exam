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
        <button className={MainCSS.buttons}>Like</button>
        <button onClick={changeDisplayComments} className={MainCSS.buttons}>
          Comments
        </button>
        <button className={MainCSS.buttons}>Dislike</button>
      </div>
    </div>
  );
}

Interactions.propTypes = {
  changeDisplayComments: PropTypes.func,
};

export default Interactions;

import MainCSS from './main.module.css';

function Interactions() {
  return (
    <div className={MainCSS.mainBox}>
      <div className={MainCSS.interactionsInfo}>
        <span className="text-white">1</span>
        <span className="text-white">2</span>
        <span className="text-white">3</span>
      </div>
      <div className={MainCSS.interactions}>
        <button className={MainCSS.buttons}>Like</button>
        <button className={MainCSS.buttons}>Comment</button>
        <button className={MainCSS.buttons}>Dislike</button>
      </div>
    </div>
  );
}

export default Interactions;

import { Link } from 'react-router-dom';
import MainCSS from './main.module.css';

function SingleComment() {
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
        <span className="ms-2">User Name</span>
        <p className={MainCSS.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
}

export default SingleComment;

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AddComment } from '../../../../services/comments/AddComment';
import { GetUserData } from '../../../../services/users/GetUserData';
import MainCSS from './main.module.css';

function CommentForm({
  postId,
  postUserId,
  changeComments,
  scroll,
  setDisplayComments,
}) {
  const user = GetUserData(localStorage.getItem('currentUserId'));

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (formData) => {
    AddComment(formData, postId, postUserId);
    changeComments();
    setDisplayComments(true);
    scroll();
    reset();
  };

  return (
    <>
      <div className={MainCSS.mainBox}>
        <Link to={`/profile?id=${user.id}`}>
          <img className={MainCSS.avatar} src={user.avatar} alt="avatar" />
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className={MainCSS.input}
              placeholder="Write a comment..."
              name="text"
              {...register('text', { required: true, min: 1 })}
            />
          </div>
        </form>
      </div>
      <span className="text-light ms-5 small">Press Enter to post.</span>
    </>
  );
}

export default CommentForm;

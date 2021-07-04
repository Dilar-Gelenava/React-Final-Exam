import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import MainCSS from './main.module.css';

function CommentForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData.comment);
  };

  return (
    <>
      <div className={MainCSS.mainBox}>
        <Link to="/">
          <img
            className={MainCSS.avatar}
            src="https://jejuhydrofarms.com/wp-content/uploads/2020/05/blank-profile-picture-973460_1280.png"
            alt="avatar"
          />
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className={MainCSS.input}
              placeholder="Write a comment..."
              name="comment"
              {...register('comment', { required: true })}
            />
          </div>
        </form>
      </div>
      <span className="text-light ms-5 small">Press Enter to post.</span>
    </>
  );
}

export default CommentForm;

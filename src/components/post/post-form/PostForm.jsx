import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { AddPost } from '../../../services/posts/AddPost';
import { GetUserData } from '../../../services/users/GetUserData';
import MainCSS from './main.module.css';

function PostForm({ changePosts }) {
  const user = GetUserData(localStorage.getItem('currentUserId'));

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (formData) => {
    AddPost(formData);
    changePosts();
    reset();
  };

  const [displayUrl, setDisplayUrl] = useState(false);

  return (
    <div className={MainCSS.mainBox}>
      <form id="postForm" onSubmit={handleSubmit(onSubmit)}>
        <div className={MainCSS.topBox}>
          <Link to={`/profile?id=${user.id}`}>
            <img className={MainCSS.avatar} src={user.avatar} alt="avatar" />
          </Link>

          <input
            type="text"
            className={MainCSS.text}
            placeholder="What's on your mind, User?"
            name="description"
            {...register('description', { required: true })}
          />
        </div>

        <input
          type="text"
          className={classNames(MainCSS.text, {
            'd-none': displayUrl !== 'image',
          })}
          style={{ marginBottom: '15px' }}
          placeholder="Image URL"
          name="imageUrl"
          {...register('imageUrl')}
        />

        <input
          type="text"
          className={classNames(MainCSS.text, {
            'd-none': displayUrl !== 'video',
          })}
          style={{ marginBottom: '15px' }}
          placeholder="Video URL"
          name="videoUrl"
          {...register('videoUrl')}
        />
      </form>
      <div className={MainCSS.optionsBox}>
        <button
          onClick={() => setDisplayUrl('image')}
          className={MainCSS.optionsButton}>
          Image
        </button>
        <button
          onClick={() => setDisplayUrl('video')}
          className={MainCSS.optionsButton}>
          Video
        </button>
        <button type="submit" form="postForm" className={MainCSS.optionsButton}>
          Post
        </button>
      </div>
    </div>
  );
}

export default PostForm;

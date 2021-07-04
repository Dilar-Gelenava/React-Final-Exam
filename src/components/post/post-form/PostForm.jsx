import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import MainCSS from './main.module.css';
import classNames from 'classnames';

function PostForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData);
  };

  const [displayUrl, setDisplayUrl] = useState(false);

  return (
    <div className={MainCSS.mainBox}>
      <form id="postForm" onSubmit={handleSubmit(onSubmit)}>
        <div className={MainCSS.topBox}>
          <Link to="/">
            <img
              className={MainCSS.avatar}
              src="https://jejuhydrofarms.com/wp-content/uploads/2020/05/blank-profile-picture-973460_1280.png"
              alt="avatar"
            />
          </Link>

          <input
            type="text"
            className={MainCSS.text}
            placeholder="What's on your mind, User?"
            name="text"
            {...register('text', { required: true })}
          />
        </div>

        <input
          type="text"
          className={classNames(MainCSS.text, {
            'd-none': displayUrl !== 'image',
          })}
          style={{ marginBottom: '10px' }}
          placeholder="Image URL"
          name="imageUrl"
          {...register('imageUrl')}
        />

        <input
          type="text"
          className={classNames(MainCSS.text, {
            'd-none': displayUrl !== 'video',
          })}
          style={{ marginBottom: '10px' }}
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

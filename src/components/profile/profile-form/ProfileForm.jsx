import React from 'react';
import { useForm } from 'react-hook-form';
import { UpdateUser } from '../../../services/users/UpdateUser';
import MainCSS from './main.module.css';

function ProfileForm({ user }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      avatar: user.avatar,
      cover: user.cover,
      birth: user.birth,
      bio: user.bio,
    },
  });

  const onSubmit = async (formData) => {
    UpdateUser(formData);
    alert('Updated successfully');
  };

  return (
    <div className={MainCSS.bottomPageWrapper}>
      <div className={MainCSS.testBox}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h5>Personal Information</h5>
          <div className={MainCSS.item}>
            <p>Your Full Name</p>
            <div className={MainCSS.nameItem}>
              <input type="text" name="firstName" {...register('firstName')} />
              <input type="text" name="lastName" {...register('lastName')} />
            </div>
          </div>
          <div className={MainCSS.item}>
            <p>Profile Picture URL</p>
            <input type="text" name="avatar" {...register('avatar')} />
          </div>
          <div className={MainCSS.item}>
            <p>Cover Image URL</p>
            <input type="text" name="cover" {...register('cover')} />
          </div>
          <div className={MainCSS.item}>
            <p>Birth date</p>
            <input type="date" name="birth" {...register('birth')} />
            <i className="fas fa-calendar-alt"></i>
          </div>
          <div className={MainCSS.item}>
            <p>Biography</p>
            <textarea rows="5" name="bio" {...register('bio')}></textarea>
          </div>

          <div className={MainCSS.btnBlock}>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;

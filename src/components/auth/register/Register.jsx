import React from 'react';
import { useForm } from 'react-hook-form';
import { AddUser } from '../../../services/users/AddUser';
import RegisterCSS from '../Register.module.css';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    AddUser(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            name="userName"
            {...register('userName', { required: true })}
          />
          {errors.userName && (
            <span className="text-danger form-text">
              {errors.userName.type === 'required' && 'User name is required'}
            </span>
          )}
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="text-danger form-text">
              {errors.email.type === 'required' && 'Email is required'}
            </span>
          )}
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className="text-danger form-text">
              {errors.password.type === 'required' && 'Password is required'}
            </span>
          )}
        </div>
        <button type="submit" className={RegisterCSS.registerButton}>
          Register
        </button>
      </form>
    </div>
  );
}
export default Register;

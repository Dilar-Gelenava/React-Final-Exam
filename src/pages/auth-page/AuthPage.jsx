import LogIn from '../../components/auth/log-in';
import Register from '../../components/auth/register';
import { useState } from 'react';
import { SignOut } from '../../services/users/SignOut';
import { useEffect } from 'react';
import classNames from 'classnames';

function AuthPage() {
  const [authPage, setAuthPage] = useState('login');

  useEffect(() => {
    let token = localStorage.getItem('currentUserId');
    if (token) {
      setAuthPage('logout');
    }
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center m-4">
      <div className="bg-light rounded">
        <div className="d-flex align-items-center justify-content-center">
          <button
            style={{ boxShadow: 'none' }}
            className={classNames('btn', 'm-2', 'border-none', {
              'btn-dark': authPage === 'login',
            })}
            onClick={() => {
              setAuthPage('login');
            }}>
            LOGIN
          </button>
          <button
            style={{ boxShadow: 'none' }}
            className={classNames('btn', 'm-2', {
              'btn-dark': authPage === 'register',
            })}
            onClick={() => {
              setAuthPage('register');
            }}>
            REGISTER
          </button>
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <div className="m-3 p-3 bg-dark rounded-3">
            {authPage === 'login' && <LogIn />}
            {authPage === 'register' && <Register />}
            {authPage === 'logout' && (
              <button
                className="btn btn-primary"
                onClick={() => {
                  SignOut();
                  setAuthPage('login');
                }}>
                Log Out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AuthPage;

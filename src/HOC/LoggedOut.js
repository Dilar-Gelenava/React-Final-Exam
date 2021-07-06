import { Redirect } from 'react-router';

export const LoggedOut = (Component) => {
  const LoggedOut = (props) => {
    const token = localStorage.getItem('currentUserId');
    if (token) return <Redirect to="/"></Redirect>;

    return <Component {...props}></Component>;
  };

  return LoggedOut;
};

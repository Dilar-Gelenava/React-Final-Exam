import { Redirect } from 'react-router';

export const LoggedIn = (Component) => {
  const LoggedIn = (props) => {
    const token = localStorage.getItem('currentUserId');
    if (!token) {
      return <Redirect to="/auth"></Redirect>;
    }

    return <Component {...props}></Component>;
  };

  return LoggedIn;
};

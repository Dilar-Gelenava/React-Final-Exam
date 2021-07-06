export const SignOut = () => {
  localStorage.removeItem('currentUserId');
  alert('You are signed out');
};

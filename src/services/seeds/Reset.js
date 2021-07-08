export const Reset = () => {
  localStorage.removeItem('currentUserId');
  localStorage.removeItem('users');
  localStorage.removeItem('posts');
  localStorage.removeItem('comments');
  localStorage.removeItem('likes');
};

export const GetUsers = () => {
  const users = JSON.parse(localStorage.getItem('users'));
  return users;
};

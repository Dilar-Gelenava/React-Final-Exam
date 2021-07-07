export const GetUserData = (id) => {
  const users = JSON.parse(localStorage.getItem('users'));
  const user = users.find((user) => user.id === id);
  return user;
};

export const UpdateUser = (data) => {
  const userId = localStorage.getItem('currentUserId');
  var users = JSON.parse(localStorage.getItem('users'));
  const userData = users.find((user) => user.id === userId);
  users = users.filter(function (user) {
    return user.id !== userId;
  });
  const newUserData = {
    id: userData.id,
    userName: userData.userName,
    email: userData.email,
    password: userData.password,
    firstName: data.firstName,
    lastName: data.lastName,
    avatar: data.avatar,
    cover: data.cover,
    birth: data.birth,
    bio: data.bio,
  };
  users.push(newUserData);
  localStorage.setItem('users', JSON.stringify(users));
};

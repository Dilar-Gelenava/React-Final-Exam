import { v4 as uuidv4 } from 'uuid';

export const AddUser = (data) => {
  const user = {
    id: uuidv4(),
    userName: data.userName,
    email: data.email.toLowerCase(),
    password: data.password,
    firstName: data.userName,
    lastName: '',
    avatar: `${process.env.PUBLIC_URL}/images/avatar.png`,
    cover: `${process.env.PUBLIC_URL}/images/cover.png`,
    birth: Date(Date.now()),
    bio: '',
  };
  var users = JSON.parse(localStorage.getItem('users'));
  if (users) {
    const emailIsUsed = users.find((user) => user.email === data.email);
    const userNameIsUsed = users.find(
      (user) => user.userName === data.userName
    );
    if (userNameIsUsed) {
      alert('This user name is already used');
    } else if (emailIsUsed) {
      alert('This email is already used');
    } else {
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      alert('success');
    }
  } else {
    localStorage.setItem('users', JSON.stringify([user]));
    alert('success');
  }
};

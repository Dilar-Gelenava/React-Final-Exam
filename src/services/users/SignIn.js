export const SignIn = (data) => {
  const users = JSON.parse(localStorage.getItem('users'));
  if (users) {
    const match = users.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (match) {
      localStorage.setItem('currentUserId', match.id);
      alert('success');
    } else {
      alert('Your credentials are incorrect');
    }
  } else {
    alert('Your credentials are incorrect');
  }
};

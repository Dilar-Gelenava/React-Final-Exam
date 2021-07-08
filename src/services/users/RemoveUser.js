export const RemoveUser = () => {
  const userId = localStorage.getItem('currentUserId');
  var users = JSON.parse(localStorage.getItem('users'));
  var posts = JSON.parse(localStorage.getItem('posts'));
  var comments = JSON.parse(localStorage.getItem('comments'));
  var likes = JSON.parse(localStorage.getItem('likes'));

  users = users.filter(function (user) {
    return user.id !== userId;
  });
  posts = posts.filter(function (post) {
    return post.userId !== userId;
  });

  comments = comments.filter(function (comment) {
    return comment.userId !== userId && comment.postUserId !== userId;
  });

  likes = likes.filter(function (like) {
    return like.userId !== userId && like.postUserId !== userId;
  });

  localStorage.removeItem('currentUserId');
  if (users) {
    localStorage.setItem('users', JSON.stringify(users));
  } else {
    localStorage.setItem('users', []);
  }

  if (users) {
    localStorage.setItem('posts', JSON.stringify(posts));
  } else {
    localStorage.setItem('posts', []);
  }

  if (users) {
    localStorage.setItem('comments', JSON.stringify(comments));
  } else {
    localStorage.setItem('comments', []);
  }

  if (users) {
    localStorage.setItem('likes', JSON.stringify(likes));
  } else {
    localStorage.setItem('likes', []);
  }

  alert('Your account has been deleted');
};

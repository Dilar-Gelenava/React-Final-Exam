export const GetUserPosts = (userId) => {
  const posts = JSON.parse(localStorage.getItem('posts'));
  var userPosts = null;

  if (posts) {
    userPosts = posts.filter(function (post) {
      return post.userId === userId;
    });
  }

  if (userPosts) {
    return userPosts.reverse();
  }
  return null;
};

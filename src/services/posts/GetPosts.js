export const GetPosts = () => {
  const posts = JSON.parse(localStorage.getItem('posts'));
  if (posts) {
    return posts.reverse();
  }
  return null;
};

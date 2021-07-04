export const GetPosts = () => {
  const posts = JSON.parse(localStorage.getItem('posts'));
  return posts;
};

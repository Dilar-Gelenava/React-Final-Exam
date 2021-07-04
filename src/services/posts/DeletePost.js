export const DeletePost = (id) => {
  const posts = JSON.parse(localStorage.getItem('posts'));
  const newPosts = posts.filter(function (post) {
    return post.postId !== id;
  });
  localStorage.setItem('posts', JSON.stringify(newPosts));
  window.location.reload();
};

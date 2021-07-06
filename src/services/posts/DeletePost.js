export const DeletePost = (id) => {
  const posts = JSON.parse(localStorage.getItem('posts'));
  const newPosts = posts.filter(function (post) {
    return post.id !== id;
  });
  localStorage.setItem('posts', JSON.stringify(newPosts));

  const comments = JSON.parse(localStorage.getItem('comments'));
  if (comments) {
    const newComments = comments.filter(function (comment) {
      return comment.postId !== id;
    });
    localStorage.setItem('comments', JSON.stringify(newComments));
  }

  const likes = JSON.parse(localStorage.getItem('likes'));
  if (likes) {
    const newLikes = likes.filter(function (like) {
      return like.postId !== id;
    });
    localStorage.setItem('likes', JSON.stringify(newLikes));
  }
};

export const GetComments = (postId) => {
  const comments = JSON.parse(localStorage.getItem('comments'));

  if (comments) {
    const postComments = comments.filter(function (comment) {
      return comment.postId === postId;
    });
    if (postComments) {
      return postComments.reverse();
    }
  }
  return null;
};

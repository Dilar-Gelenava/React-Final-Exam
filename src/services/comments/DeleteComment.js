export const DeleteComment = (id) => {
  const comments = JSON.parse(localStorage.getItem('comments'));
  const newComments = comments.filter(function (comment) {
    return comment.id !== id;
  });
  localStorage.setItem('comments', JSON.stringify(newComments));
};

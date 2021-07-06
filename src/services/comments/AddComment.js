import { v4 as uuidv4 } from 'uuid';

export const AddComment = (data, postId) => {
  var comments = JSON.parse(localStorage.getItem('comments'));
  const comment = {
    id: uuidv4(),
    userId: 1,
    postId: postId,
    text: data.text,
    date: Date.now(),
  };
  if (!comments) {
    localStorage.setItem('comments', JSON.stringify([comment]));
  } else {
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
  }
  window.location.reload();
};
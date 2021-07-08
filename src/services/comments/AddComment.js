import { v4 as uuidv4 } from 'uuid';

export const AddComment = (data, postId, postUserId) => {
  var comments = JSON.parse(localStorage.getItem('comments'));
  const userId = localStorage.getItem('currentUserId');
  const comment = {
    id: uuidv4(),
    userId: userId,
    postId: postId,
    postUserId: postUserId,
    text: data.text,
    date: Date.now(),
  };
  if (!comments) {
    localStorage.setItem('comments', JSON.stringify([comment]));
  } else {
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
  }
};

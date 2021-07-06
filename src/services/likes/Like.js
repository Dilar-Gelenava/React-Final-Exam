import { v4 as uuidv4 } from 'uuid';

export const Like = (isUp, postId) => {
  var likes = JSON.parse(localStorage.getItem('likes'));
  const userId = localStorage.getItem('currentUserId');
  const like = {
    id: uuidv4(),
    isUp: isUp,
    postId: postId,
    userId: userId,
  };

  if (likes && likes.length) {
    const liked = likes.find(
      (like) => like.postId === postId && like.userId === userId
    );
    if (liked) {
      var newLikes = likes.filter(function (like) {
        return like.id !== liked.id;
      });
      if (liked.isUp !== isUp) {
        newLikes.push(like);
      }
      localStorage.setItem('likes', JSON.stringify(newLikes));
    } else {
      likes.push(like);
      localStorage.setItem('likes', JSON.stringify(likes));
    }
  } else {
    localStorage.setItem('likes', JSON.stringify([like]));
  }

  //   window.location.reload();
  //   console.log(like);
};

export const IsLiked = (postId, userId) => {
  var likes = JSON.parse(localStorage.getItem('likes'));
  if (likes && likes.length) {
    const liked = likes.find(
      (like) => like.postId === postId && like.userId === userId
    );
    if (liked) {
      if (liked.isUp) {
        return { up: true, down: false };
      } else {
        return { up: false, down: true };
      }
    }
  } else return { up: false, down: false };
};

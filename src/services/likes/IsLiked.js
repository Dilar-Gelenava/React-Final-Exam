export const IsLiked = (postId) => {
  var likes = JSON.parse(localStorage.getItem('likes'));
  const userId = localStorage.getItem('currentUserId');
  if (likes && likes.length) {
    const liked = likes.find(
      (like) => like.userId === userId && like.postId === postId
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

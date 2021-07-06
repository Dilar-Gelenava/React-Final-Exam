export const GetLikes = (postId) => {
  var likes = JSON.parse(localStorage.getItem('likes'));
  if (likes && likes.length) {
    const ups = likes.filter(function (like) {
      return like.postId === postId && like.isUp === true;
    });
    const downs = likes.filter(function (like) {
      return like.postId === postId && like.isUp === false;
    });
    const upCount = ups.length;
    const downCount = downs.length;
    return { up: upCount, down: downCount };
  } else {
    return { up: 0, down: 0 };
  }
};

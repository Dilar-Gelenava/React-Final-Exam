export const AddPost = (data) => {
  var posts = JSON.parse(localStorage.getItem('posts'));
  const post = {
    id: Date.now(),
    userId: 1,
    description: data.description,
    imageUrl: data.imageUrl,
    videoUrl: data.videoUrl,
    date: Date.now(),
  };
  if (!posts) {
    localStorage.setItem('posts', JSON.stringify([post]));
  } else {
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  }
  window.location.reload();
};

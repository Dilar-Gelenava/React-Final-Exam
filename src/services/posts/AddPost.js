import { v4 as uuidv4 } from 'uuid';

export const AddPost = (data) => {
  var posts = JSON.parse(localStorage.getItem('posts'));
  const userId = localStorage.getItem('currentUserId');
  const post = {
    id: uuidv4(),
    userId: userId,
    description: data.description,
    imageUrl: data.imageUrl,
    videoUrl: data.videoUrl,
    youtubeUrl: data.youtubeUrl,
    facebookUrl: data.facebookUrl,
    date: Date.now(),
  };
  if (!posts) {
    localStorage.setItem('posts', JSON.stringify([post]));
  } else {
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  }
};

import { useState } from 'react';
import SinglePost from '../../components/post/single-post';
import PostForm from '../../components/post/post-form';
import { GetPosts } from '../../services/posts/GetPosts';

function MainPage() {
  const [posts, setPosts] = useState(GetPosts());

  const changePosts = () => {
    setPosts(GetPosts());
  };

  return (
    <div className="d-flex justify-content-center">
      <div>
        <PostForm changePosts={changePosts} />
        <h1 className="text-light ms-2">Posts:</h1>
        {posts &&
          posts.map((post) => (
            <SinglePost post={post} changePosts={changePosts} key={post.id} />
          ))}
      </div>
    </div>
  );
}

export default MainPage;

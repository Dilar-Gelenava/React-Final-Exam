import SinglePost from '../../components/post/single-post';
import PostForm from '../../components/post/post-form';
import { GetPosts } from '../../services/posts/GetPosts';

function MainPage() {
  const posts = GetPosts();

  return (
    <div className="d-flex justify-content-center">
      <div>
        <PostForm />
        <h1 className="text-light ms-2">Posts:</h1>
        {posts && posts.map((post) => <SinglePost post={post} key={post.id} />)}
      </div>
    </div>
  );
}

export default MainPage;

import SinglePost from '../../components/post/single-post';
import PostForm from '../../components/post/post-form';

function MainPage() {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <PostForm />
        <h1 className="text-light ms-2">Posts:</h1>
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
    </div>
  );
}

export default MainPage;

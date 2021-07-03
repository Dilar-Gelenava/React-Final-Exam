import SinglePost from '../../components/post/single-post';

function MainPage() {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <h1 className="text-light">posts:</h1>
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
    </div>
  );
}

export default MainPage;

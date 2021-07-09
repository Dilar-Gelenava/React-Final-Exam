import { LoggedIn } from '../../HOC/LoggedIn';
import { GetUserData } from '../../services/users/GetUserData';
import { GetUserPosts } from '../../services/posts/GetUserPosts';
import { useEffect, useState } from 'react';
import ProfileForm from '../../components/profile/profile-form';
import ProfileInfo from '../../components/profile/profile-info';
import SinglePost from '../../components/post/single-post';
import MainCSS from './main.module.css';

function ProfilePage() {
  const currentUserId = localStorage.getItem('currentUserId');
  const [id, setId] = useState(currentUserId);

  const query_string = window.location.search;
  const url_params = new URLSearchParams(query_string);
  const url_id = url_params.get('id');

  const [userPosts, setUserPosts] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!url_id) {
      setId(currentUserId);
    } else {
      setId(url_id);
    }
  }, [currentUserId, url_id]);

  useEffect(() => {
    setUserPosts(GetUserPosts(id));
  }, [id]);

  const changePosts = () => {
    setUserPosts(GetUserPosts(id));
  };

  const user = GetUserData(id);

  return (
    <div>
      <div className={MainCSS.pageWrapper}>
        {(id && id !== 'null' && (
          <>
            <div className={MainCSS.topPageWrapper}>
              <div
                className={MainCSS.topPageMenu}
                style={{
                  background: `url(${user.cover})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}>
                <div className={MainCSS.imageName}>
                  <img
                    className={MainCSS.profilePicture}
                    src={user.avatar}
                    alt="cover"
                  />
                  <p>{user.userName}</p>
                </div>
              </div>
            </div>
            {/* <!-- INFORMATION -->  */}
            {(currentUserId === id && <ProfileForm user={user} />) || (
              <ProfileInfo user={user} />
            )}
            {/* <!-- INFORMATION --> */}

            {userPosts && (
              <h2 className="text-light">{user.userName}'s posts:</h2>
            )}
            {userPosts &&
              userPosts.map((post) => (
                <SinglePost
                  post={post}
                  changePosts={changePosts}
                  key={post.id}
                />
              ))}
          </>
        )) || <h1 className="text-light">User doesn't exist</h1>}
      </div>
    </div>
  );
}

export default LoggedIn(ProfilePage);

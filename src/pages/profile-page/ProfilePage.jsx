import { LoggedIn } from '../../HOC/LoggedIn';
import { GetUserData } from '../../services/users/GetUserData';
import { useEffect, useState } from 'react';
import ProfileForm from '../../components/profile/profile-form';
import ProfileInfo from '../../components/profile/profile-info';
import MainCSS from './main.module.css';

function ProfilePage() {
  const currentUserId = localStorage.getItem('currentUserId');
  const [id, setId] = useState(currentUserId);

  const query_string = window.location.search;
  const url_params = new URLSearchParams(query_string);
  const url_id = url_params.get('id');

  useEffect(() => {
    if (!url_id) {
      setId(currentUserId);
    } else {
      setId(url_id);
    }
  }, [currentUserId, url_id]);

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
                  backgroundPosition: 'center',
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
          </>
        )) || <h1>User doesn't exist</h1>}
      </div>
    </div>
  );
}

export default LoggedIn(ProfilePage);

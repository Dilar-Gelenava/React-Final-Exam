import { LoggedIn } from '../../HOC/LoggedIn';
import { GetUserData } from '../../services/users/GetUserData';
import MainCSS from './main.module.css';
import { useEffect, useState } from 'react';

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
    <div className={MainCSS.mainBox}>
      {(id && id !== 'null' && (
        <div>
          <div className={MainCSS.topBox}>
            <img className={MainCSS.cover} src={user.cover} alt="avatar" />
            <div className={MainCSS.avatarBox}>
              <img className={MainCSS.avatar} src={user.avatar} alt="avatar" />
            </div>
            <div className="d-flex justify-content-center">
              <h2>{user.userName}</h2>
            </div>
          </div>
        </div>
      )) || <h1>no user</h1>}
    </div>
  );
}

export default LoggedIn(ProfilePage);

import MainCSS from './main.module.css';

function ProfileInfo({ user }) {
  return (
    <div className={MainCSS.bottomPageWrapper}>
      <div className={MainCSS.testBox}>
        <form>
          <h5>Personal Information</h5>
          <div className={MainCSS.item}>
            <p>Full Name</p>
            <div className={MainCSS.nameItem}>
              <input type="text" name="name" value={user.firstName} disabled />
              <input type="text" name="name" value={user.lastName} disabled />
            </div>
          </div>
          <div className={MainCSS.item}>
            <p>Profile Picture URL</p>
            <input type="text" name="name" value={user.avatar} disabled />
          </div>
          <div className={MainCSS.item}>
            <p>Cover Image URL</p>
            <input type="text" name="name" value={user.cover} disabled />
          </div>
          <div className={MainCSS.item}>
            <p>Birth date</p>
            <input type="date" name="name" value={user.birth} disabled />
            <i className="fas fa-calendar-alt"></i>
          </div>
          <div className={MainCSS.item}>
            <p>Biography</p>
            <textarea rows="5" value={user.bio} disabled></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileInfo;

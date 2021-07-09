import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item navbar-brand ml-2">
          <Link className="nav-link" to={'/'}>
            MindBook
          </Link>
        </li>
        <li className="nav-item navbar-brand ml-2">
          <Link className="nav-link" to={'/auth'}>
            Auth
          </Link>
        </li>
        <li className="nav-item navbar-brand ml-2">
          <Link className="nav-link" to={'/profile'}>
            Profile
          </Link>
        </li>
        <li className="nav-item navbar-brand ml-2">
          <Link className="nav-link" to={'/users'}>
            Users
          </Link>
        </li>
        <li className="nav-item navbar-brand ml-2">
          <Link className="nav-link" to={'/seeds'}>
            Seeds
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

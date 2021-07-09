import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetUsers } from '../../services/users/GetUsers';

function UsersPage() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    setUsers(GetUsers());
  }, []);

  return (
    <div className="d-flex justify-content-around flex-wrap m-4">
      {users &&
        users.map((user) => (
          <div
            key={user.id}
            className="bg-dark rounded p-3 m-1"
            style={{ width: '250px' }}>
            <Link to={`/profile?id=${user.id}`}>
              <img
                style={{ objectFit: 'cover' }}
                className="rounded w-100"
                src={user.avatar}
                alt={user.id}
              />
            </Link>
            <div className="bg-secondary mt-3 p-2 rounded">
              <p className="text-dark">{user.firstName}</p>
              <p className="text-dark">{user.lastName}</p>
              <p className="text-dark">{user.email}</p>
              <p className="text-dark">{user.birth}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default UsersPage;

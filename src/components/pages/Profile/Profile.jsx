import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../../styles/Profile.less';

const Profile = () => {
  const { user } = useAuth0();

  return (
    <div>
      <div className="profile-wrapper">
        {user?.picture && <img src={user.picture} alt={user?.name} />}
        <h2>{user?.name}</h2>
        <ul>
          {Object.keys(user).map((objKey, idx) => (
            <p key={idx}>
              {objKey} : {user[objKey]}
            </p>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;

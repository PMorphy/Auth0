import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className='text-warning text-left container'>
        <img className='rounded-circle' src={user.picture} alt={user.name} />
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
      </div>
    )
  );
}

export default Profile;

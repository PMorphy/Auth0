import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <button className='alert-danger' onClick={() => logout()}>
        Logout
      </button>
    )
  );
}

export default LogoutButton;

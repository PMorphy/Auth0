import './App.css';

import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading ...</div>;
  return (
    <section className='container'>
      <div className='card'>
        <div className='card-content text-center bg-secondary'>
          <LoginButton />
          <LogoutButton />
          <Profile />
        </div>
      </div>
    </section>
  );
}

export default App;

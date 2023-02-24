import React, { useState } from 'react';
import FlatButton from './UI/buttons/FlatButton';
import FullButton from './UI/buttons/FullButton';
import navLogo from '../assets/images/nav_logo.png';
import { Turn as Hamburger } from 'hamburger-react';
import { useNavigate } from 'react-router-dom';
import useAppContext from '../context/Context';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config/firebase-config';

function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const { user, setUser, setUserTrainingInfo } = useAppContext();
  const navigate = useNavigate();

  const menuOpen = isOpen
    ? 'sm:translate-x-0 sm:overflow-y-hidden'
    : 'sm:translate-x-full';

  async function logoutHandler() {
    try {
      await signOut(auth);
      localStorage.removeItem('strongfyUserId');
      setUser(null);
      setUserTrainingInfo(null);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <nav className='py-4 px-8 flex justify-between items-center border-b border-neutral-800 bg-background relative sm:px-4'>
      <div className='w-40 xl:w-36'>
        <img src={navLogo} alt='Logo' className='w-full' />
      </div>
      <div
        className={`flex items-center justify-center gap-3 sm:absolute top-full right-0 sm:flex-col sm:bg-background sm:w-screen sm:h-screen sm:p-12 ${menuOpen} sm:transition-all ease-in duration-300`}
      >
        {user === null && (
          <>
            <FullButton
              styles={'sm:w-full'}
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </FullButton>
            <FlatButton styles={'sm:w-full'} onClick={() => navigate('/login')}>
              Login
            </FlatButton>
          </>
        )}
        {user !== null && (
          <FlatButton styles={'sm:w-full'} onClick={logoutHandler}>
            Logout
          </FlatButton>
        )}
      </div>
      <div className='hidden sm:block'>
        <Hamburger
          onToggle={setOpen}
          color='#3C992D'
          direction='left'
          distance='sm'
          easing='ease-in-out'
          duration={0.2}
        />
      </div>
    </nav>
  );
}

export default NavBar;

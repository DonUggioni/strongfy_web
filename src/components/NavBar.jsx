import React, { useState } from 'react';
import FlatButton from './UI/buttons/FlatButton';
import FullButton from './UI/buttons/FullButton';
import navLogo from '../assets/images/nav_logo-min.png';
import { Turn as Hamburger } from 'hamburger-react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useAppContext from '../context/Context';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config/firebase-config';

function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const { getArticles } = useAppContext();

  const {
    user,
    setUser,
    setUserTrainingInfo,
    setIsLoading,
    setProjectedMaxes,
  } = useAppContext();
  const navigate = useNavigate();

  const inactive =
    'font-mont text-primary500 text-base hover:text-primary400 transition-all';

  const activeLink = 'font-mont text-primary400 text-base';

  const menuOpen = isOpen
    ? 'sm:translate-x-0 sm:overflow-y-hidden'
    : 'sm:translate-x-full';

  async function logoutHandler() {
    setIsLoading(true);
    try {
      await signOut(auth);
      localStorage.removeItem('strongfyUserId');
      localStorage.removeItem('maxes');
      setUser(null);
      setUserTrainingInfo(null);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }

  function dashboardHandler() {
    const maxes = JSON.parse(localStorage.getItem('maxes'));
    setProjectedMaxes(maxes);
  }

  function navButtons() {
    if (user === null || user.emailVerified === false) {
      return (
        <>
          <FullButton styles={'sm:w-full'} onClick={() => navigate('/signup')}>
            Sign Up
          </FullButton>
          <FlatButton styles={'sm:w-full'} onClick={() => navigate('/login')}>
            Login
          </FlatButton>
        </>
      );
    }

    if (user !== null && user.emailVerified === true) {
      return (
        <>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? activeLink : inactive)}
          >
            Home
          </NavLink>
          <NavLink
            to='/articles'
            className={({ isActive }) => (isActive ? activeLink : inactive)}
            onClick={() => getArticles()}
          >
            Articles
          </NavLink>
          <NavLink
            to={'/dashboard'}
            className={({ isActive }) => (isActive ? activeLink : inactive)}
            onClick={() => dashboardHandler()}
          >
            Dashboard
          </NavLink>
          <FlatButton styles={'sm:w-full'} onClick={logoutHandler}>
            Logout
          </FlatButton>
        </>
      );
    }
  }

  return (
    <nav className='py-4 px-8 flex justify-between items-center border-b border-neutral-800 bg-background relative sm:px-4'>
      <div className='w-40 xl:w-36'>
        <img src={navLogo} alt='Logo' className='w-full' />
      </div>
      <div
        className={`flex items-center justify-center gap-6 sm:absolute top-full right-0 sm:flex-col sm:bg-background sm:w-screen sm:h-screen sm:p-12 ${menuOpen} sm:transition-all ease-in duration-300 sm:h-screen sm:gap-4 `}
      >
        {navButtons()}
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

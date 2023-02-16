import React from 'react';
import FlatButton from './UI/buttons/FlatButton';
import FullButton from './UI/buttons/FullButton';
import navLogo from '../assets/images/nav_logo.png';

function NavBar() {
  return (
    <nav className='py-4 px-8 flex justify-between items-center border-b border-neutral-800 bg-background'>
      <div className='w-40 xl:w-36'>
        <img src={navLogo} alt='Logo' className='w-full' />
      </div>
      <div className='flex items-center justify-center gap-3'>
        <FullButton>Sign Up</FullButton>
        <FlatButton>Login</FlatButton>
      </div>
    </nav>
  );
}

export default NavBar;

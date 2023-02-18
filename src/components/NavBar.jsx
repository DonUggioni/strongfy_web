import React, { useState } from 'react';
import FlatButton from './UI/buttons/FlatButton';
import FullButton from './UI/buttons/FullButton';
import navLogo from '../assets/images/nav_logo.png';
import { Turn as Hamburger } from 'hamburger-react';

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  function isOpenHandler() {
    setOpen(() => !isOpen);
  }
  return (
    <nav className='py-4 px-8 flex justify-between items-center border-b border-neutral-800 bg-background relative'>
      <div className='w-40 xl:w-36'>
        <img src={navLogo} alt='Logo' className='w-full' />
      </div>
      <div className='flex items-center justify-center gap-3 sm:absolute top-full right-0 sm:flex-col sm:bg-background sm:w-screen sm:h-screen sm:p-16'>
        <FullButton styles={'sm:w-full'}>Sign Up</FullButton>
        <FlatButton styles={'sm:w-full'}>Login</FlatButton>
      </div>
      <div className='hidden sm:block'>
        <Hamburger
          color='#3C992D'
          direction='left'
          distance='sm'
          easing='ease-in-out'
        />
      </div>
    </nav>
  );
}

export default NavBar;

import React from 'react';
import footerLogo from '../assets/images/hero_img-min.png';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className='flex flex-col items-center justify-center  overflow-hidden border-t border-neutral-800 w-full mx-auto'>
      <img
        src={footerLogo}
        alt='Footer logo'
        className='w-full max-w-[14rem]'
      />
      <p className='text-xs pb-6'>Barbell Hub® {year}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

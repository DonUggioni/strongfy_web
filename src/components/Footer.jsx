import React from 'react';
import footerLogo from '../assets/images/hero_img.png';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className='flex flex-col items-center justify-center max-h-60 overflow-hidden border-t border-neutral-800'>
      <img src={footerLogo} alt='Footer logo' className='h-full' />
      <p className='text-xs pb-6'>Strongfy® {year}. All rights reserved.</p>
    </div>
  );
}

export default Footer;

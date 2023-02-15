import React from 'react';
import footerLogo from '../assets/images/hero_sm.png';

function Footer() {
  return (
    <div className='flex flex-col items-center justify-center max-h-80 overflow-hidden border-t border-neutral-800'>
      <img src={footerLogo} alt='Footer logo' className='h-full scale-125' />
      <p className='text-xs pb-6'>Strongfy 2023. All rights reserved.</p>
    </div>
  );
}

export default Footer;

import React from 'react';
import hero from '../assets/images/hero_sm.png';
import AppleDownloadButton from './UI/buttons/AppleDownloadButton';
import GoogleDownloadButton from './UI/buttons/GoogleDownloadButton';

function Hero() {
  return (
    <div className='w-screen pb-16'>
      <img src={hero} alt='hero' className='w-full' />
      <div className='flex flex-row gap-6 items-center justify-center'>
        <AppleDownloadButton />
        <GoogleDownloadButton />
      </div>
    </div>
  );
}

export default Hero;

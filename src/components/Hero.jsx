import React from 'react';
import hero from '../assets/images/hero_sm.png';

function Hero() {
  return (
    <div className='w-screen'>
      <img src={hero} alt='hero' className='w-full' />
    </div>
  );
}

export default Hero;

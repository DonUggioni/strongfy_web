import React from 'react';
import hero from '../assets/images/hero_sm_cropped.png';
import AppleDownloadButton from './UI/buttons/AppleDownloadButton';
import GoogleDownloadButton from './UI/buttons/GoogleDownloadButton';
import Text from './UI/typography/Text';

function Hero() {
  return (
    <div className='w-screen pb-16 grid'>
      <div className='max-w-xl justify-self-center'>
        <img src={hero} alt='hero' className='w-screen' />
      </div>
      <div className='flex flex-col items-center gap-2'>
        <Text>Get the app</Text>
        <div className='flex flex-row gap-6 items-center justify-center'>
          <AppleDownloadButton />
          <GoogleDownloadButton />
        </div>
      </div>
    </div>
  );
}

export default Hero;

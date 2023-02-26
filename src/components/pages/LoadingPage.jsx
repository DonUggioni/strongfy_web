import React from 'react';
import Barbells from '../../assets/images/barbells.png';

function LoadingPage() {
  return (
    <div className='h-screen bg-background flex items-center justify-center flex-col gap-6'>
      <div className='w-36 animate-spin-slow'>
        <img src={Barbells} alt='Loading spinner' />
      </div>
      <span className='text-xl text-textColor font-mont tracking-wider animate-pulse'>
        Loading...
      </span>
    </div>
  );
}

export default LoadingPage;

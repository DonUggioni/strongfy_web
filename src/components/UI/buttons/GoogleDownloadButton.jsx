import React from 'react';
import GooglePlayIcon from '~icons/logos/google-play-icon';

function GoogleDownloadButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className='flex flex-row items-center justify-center gap-2 text-textColor border-2 rounded border-textColor pr-3 pl-0.5 hover:border-primary400 transition-all shadow-sm hover:shadow-primary400/50 sm:pl-4 sm:pr-6 sm:py-1'
    >
      <GooglePlayIcon className='p-1 text-[2.6rem] xl:text-[2.2rem]' />
      <a
        href='https://play.google.com/store/apps/details?id=com.barbell.hub'
        className='flex flex-col'
        target='_blank'
      >
        <span className='text-xs text-left'>Get it on</span>
        <span className='font-semibold tracking-wide'>Google Play</span>
      </a>
    </button>
  );
}

export default GoogleDownloadButton;

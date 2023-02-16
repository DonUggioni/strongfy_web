import React from 'react';
import AppleIcon from '~icons/ic/baseline-apple';

function AppleDownloadButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className='flex flex-row items-center justify-center gap-2 text-textColor border-2 rounded border-textColor pr-3  hover:border-primary400 transition-all shadow-sm hover:shadow-primary400/50'
    >
      <AppleIcon className='text-[2.6rem] xl:text-[2.2rem]' />
      <div className='flex flex-col'>
        <span className='text-xs'>Download on the</span>
        <span className='font-semibold tracking-wide'>App Store</span>
      </div>
    </button>
  );
}

export default AppleDownloadButton;

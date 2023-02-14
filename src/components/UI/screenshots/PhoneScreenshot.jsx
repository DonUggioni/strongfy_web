import React from 'react';

function PhoneScreenshot({ imageSrc }) {
  return (
    <div className='max-w-standard rounded-md overflow-hidden shadow shadow-neutral-700'>
      <img src={imageSrc} alt='' />
    </div>
  );
}

export default PhoneScreenshot;

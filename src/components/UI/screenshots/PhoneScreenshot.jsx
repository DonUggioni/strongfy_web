import React from 'react';

function PhoneScreenshot({ imageSrc }) {
  return (
    <div className='max-w-standard rounded-md overflow-hidden '>
      <img src={imageSrc} alt='' />
    </div>
  );
}

export default PhoneScreenshot;

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

function PhoneScreenshot({ imageSrc }) {
  const windowWidth = useRef(window.innerWidth);

  const imageHover = windowWidth.current > 846 ? { scale: 1.1 } : '';

  return (
    <motion.div
      whileHover={imageHover}
      transition={{ duration: 0.2 }}
      easeInOut
      className='max-w-standard rounded-md overflow-hidden xl:max-w-lg '
    >
      <img src={imageSrc} alt='' />
    </motion.div>
  );
}

export default PhoneScreenshot;

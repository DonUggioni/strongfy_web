import React from 'react';
import { motion } from 'framer-motion';

function PhoneScreenshot({ imageSrc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.4 }}
      easeInOut
      className='max-w-standard rounded-md overflow-hidden xl:max-w-lg '
    >
      <img src={imageSrc} alt='' />
    </motion.div>
  );
}

export default PhoneScreenshot;

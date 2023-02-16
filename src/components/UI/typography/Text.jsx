import React from 'react';
import { motion } from 'framer-motion';

function Text({ children }) {
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.p
      variants={item}
      className='text-lg leading-9 xl:text-base xl:leading-8'
    >
      {children}
    </motion.p>
  );
}

export default Text;

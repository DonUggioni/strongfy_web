import React from 'react';
import { motion } from 'framer-motion';

function Title({ children, style }) {
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.h1
      variants={item}
      className={`text-5xl font-bold xl:text-4xl md:text-3xl font-mont tracking-wider ${style}`}
    >
      {children}
    </motion.h1>
  );
}

export default Title;

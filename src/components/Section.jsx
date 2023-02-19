import React, { useEffect, useRef } from 'react';
import { motion, useAnimationControls, useInView } from 'framer-motion';

function Section({ children, styles, background, sectionStyles }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });
  const control = useAnimationControls();

  const variant = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
    hidden: { y: 300, opacity: 0.5 },
  };

  useEffect(() => {
    if (isInView) {
      control.start('visible');
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className={`h-auto py-16 px-24 sm:px-8 sm:py-2 w-screen flex items-center justify-center ${background} ${sectionStyles}`}
    >
      <motion.div
        variants={variant}
        initial='hidden'
        animate={control}
        className={`max-w-screen-2xl ${styles}`}
        easeIn
      >
        {children}
      </motion.div>
    </section>
  );
}

export default Section;

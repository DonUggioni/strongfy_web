import React from 'react';

function Section({ children, styles }) {
  return (
    <section className={`h-auto py-16 px-32 ${styles}`}>{children}</section>
  );
}

export default Section;

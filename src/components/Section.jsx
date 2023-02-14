import React from 'react';

function Section({ children, background }) {
  return <section className={`h-auto py-16 ${background}`}>{children}</section>;
}

export default Section;

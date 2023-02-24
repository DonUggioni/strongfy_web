import React from 'react';

function Container({ children, style }) {
  return (
    <div
      className={`border-2 border-grey500 shadow-lg p-6 flex items-center justify-center gap-2 rounded ${style}`}
    >
      {children}
    </div>
  );
}

export default Container;

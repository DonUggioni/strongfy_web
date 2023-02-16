import React from 'react';

function FullButton({ children, onClick, styles }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-1.5 bg-primary500 rounded-sm border-2 border-primary500 transition-all hover:bg-transparent hover:text-primary400 hover:border-primary400 shadow-sm hover:shadow-primary400/50 text-lg xl:text-base xl:px-4 xl:py-1 ${styles}`}
    >
      {children}
    </button>
  );
}

export default FullButton;

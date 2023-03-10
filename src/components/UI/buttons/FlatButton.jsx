import React from 'react';

function FlatButton({ children, onClick, styles }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-1.5 rounded-sm font-mont hover:bg-transparent text-primary500 border-2 border-primary500 transition-all hover:border-primary400 hover:text-primary400 shadow-sm hover:shadow-primary400/50 xl:px-4 xl:py-1 ${styles}`}
    >
      {children}
    </button>
  );
}

export default FlatButton;

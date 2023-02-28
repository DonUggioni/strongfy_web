import React from 'react';

function Form({ children }) {
  return (
    <form className='max-w-xl w-full flex flex-col gap-6 py-12 px-8 rounded bg-almostBlack shadow-xl sm:py-8 sm:px-5'>
      {children}
    </form>
  );
}

export default Form;

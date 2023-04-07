import React from 'react';

function Input({ type, label, placeholder, icon, onChange, refs, style }) {
  return (
    <div className='grid gap-1 relative'>
      <label className='text-grey300 sm:text-sm font-mont'>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full font-mont border rounded border-grey300 focus:outline-none focus:border-primary600 focus:ring-1 focus:ring-primary600 py-2 pl-12 pr-2 text-lg text-textColor bg-transparent placeholder:opacity-50 sm:text-base sm:placeholder:text-base ${style} `}
        onChange={onChange}
        ref={refs}
      />
      <div className='absolute bottom-2 left-2'>{icon}</div>
    </div>
  );
}

export default Input;

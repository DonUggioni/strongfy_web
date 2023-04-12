import React from 'react';
import Title from './UI/typography/Title';

function PostLink({ imageSrc, title, onClick, author, date }) {
  return (
    <div
      onClick={onClick}
      className='text-textColor flex flex-col items-center gap-6 cursor-pointer bg-almostBlack p-6 rounded shadow-lg '
    >
      <div className='max-w-[56rem]'>
        <img className='rounded w-full' src={imageSrc} alt='Post image' />
      </div>
      <div>
        <Title style={'text-center'}>{title}</Title>
        <div className='flex gap-4 items-center justify-center text-grey400 text-sm mt-4'>
          <p>By {author}</p>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

export default PostLink;

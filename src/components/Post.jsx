import React from 'react';
import post from '../postData.json';
import Title from './UI/typography/Title';
import FlatButton from './UI/buttons/FlatButton';
import { useNavigate } from 'react-router-dom';

function Post() {
  const navigate = useNavigate();
  const postData = post[0];
  return (
    <main className='bg-background h-screen p-8 md:pd-6 sm:pd-2'>
      <FlatButton onClick={() => navigate(-1)} styles={'self-start'}>
        Go Back
      </FlatButton>
      <div className='text-textColor flex flex-col items-center gap-6 bg-almostBlack p-6 md:p-4 sm:p-3 m-16 md:my-6 mx-auto rounded shadow-lg max-w-[60rem]'>
        <div className='max-w-[56rem]'>
          <img
            className='rounded w-full'
            src={postData.image}
            alt='Post image'
          />
        </div>
        <div>
          <Title style={'text-center'}>{postData.title}</Title>
          <p className='mt-6 sm:text-center p-2 md:p-0'>{postData.content}</p>
          <div className='flex gap-8 items-center justify-end text-grey400 text-sm mt-8 sm:justify-center'>
            <p>By {postData.author}</p>
            <span>{postData.date}</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Post;

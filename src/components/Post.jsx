import React, { useEffect, useState } from 'react';
import Title from './UI/typography/Title';
import FlatButton from './UI/buttons/FlatButton';
import { useNavigate, useParams } from 'react-router-dom';
import useAppContext from '../context/Context';
import ReactMarkdown from 'react-markdown';

function Post() {
  const { articleData, getPost, setIsLoading } = useAppContext();
  const { postId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getPost(postId);
  }, [postId]);

  return (
    <main className='bg-background h-screen p-8 md:p-6 sm:p-2'>
      <FlatButton onClick={() => navigate(-1)} styles={'self-start'}>
        Go Back
      </FlatButton>
      <div className='text-textColor flex flex-col items-center gap-6 bg-almostBlack p-6 md:p-4 sm:p-2 m-16 md:my-6 mx-auto rounded shadow-lg max-w-[60rem]'>
        <div className='max-w-[56rem]'>
          <img
            className='rounded w-full'
            src={articleData?.image}
            alt='Post image'
          />
        </div>
        <div className='w-full'>
          <Title style={'text-center'}>{articleData?.title}</Title>

          <div className='mt-6 sm:text-center p-2 md:p-0 w-full'>
            <ReactMarkdown>{articleData?.text}</ReactMarkdown>
          </div>

          <div className='flex gap-8 items-center justify-end text-grey400 text-sm mt-8 sm:justify-center'>
            <p>By {articleData?.author}</p>
            <span>{articleData?.date}</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Post;

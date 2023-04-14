import React, { useEffect } from 'react';
import Title from './UI/typography/Title';
import FlatButton from './UI/buttons/FlatButton';
import { useNavigate, useParams } from 'react-router-dom';
import useAppContext from '../context/Context';

function Post() {
  const { articleData, getPost, setIsLoading } = useAppContext();
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getPost(postId);
    setIsLoading(false);
  }, [postId]);

  return (
    <main className='bg-background h-screen p-8 md:pd-6 sm:pd-2'>
      <FlatButton onClick={() => navigate(-1)} styles={'self-start'}>
        Go Back
      </FlatButton>
      <div className='text-textColor flex flex-col items-center gap-6 bg-almostBlack p-6 md:p-4 sm:p-3 m-16 md:my-6 mx-auto rounded shadow-lg max-w-[60rem]'>
        <div className='max-w-[56rem]'>
          <img
            className='rounded w-full'
            src={articleData?.image}
            alt='Post image'
          />
        </div>
        <div>
          <Title style={'text-center'}>{articleData?.title}</Title>
          <p className='mt-6 sm:text-center p-2 md:p-0'>{articleData?.text}</p>
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

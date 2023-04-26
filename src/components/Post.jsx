import React, { useEffect, useState } from 'react';
import Title from './UI/typography/Title';
import FlatButton from './UI/buttons/FlatButton';
import { useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { db } from '../firebase-config/firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import useAppContext from '../context/Context';

function Post() {
  const { setArticlesList } = useAppContext();
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPost() {
      const q = query(collection(db, 'posts'), where('postId', '==', postId));
      try {
        const querySnapshot = await getDocs(q);
        if (querySnapshot) {
          querySnapshot.forEach((doc) => {
            setPost(doc.data());
          });
        } else {
          return;
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getPost();
  }, []);

  function goBackHandler() {
    const posts = JSON.parse(localStorage.getItem('posts'));
    setArticlesList(posts);
    navigate('/articles');
  }

  return (
    <main className='bg-background h-screen p-8 md:p-6 sm:p-2'>
      <FlatButton onClick={() => goBackHandler()} styles={'self-start'}>
        Back to Articles
      </FlatButton>
      <div className='text-textColor flex flex-col items-center gap-6 bg-almostBlack p-6 md:p-4 sm:p-2 m-16 md:my-6 mx-auto rounded shadow-lg max-w-[60rem]'>
        <div className='max-w-[56rem]'>
          <img className='rounded w-full' src={post?.image} alt='Post image' />
        </div>
        <div className='w-full'>
          <Title style={'text-center'}>{post?.title}</Title>

          <div className='mt-6 sm:text-center p-2 md:p-0 w-full'>
            <ReactMarkdown>{post?.text}</ReactMarkdown>
          </div>

          <div className='flex gap-8 items-center justify-end text-grey400 text-sm mt-8 sm:justify-center'>
            <p>By {post?.author}</p>
            <span>{post?.date}</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Post;

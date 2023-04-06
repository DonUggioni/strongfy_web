import React, { Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import PostLink from '../PostLink';
import posts from '../../postData.json';
import LoadingPage from './LoadingPage';

function Articles() {
  const [articlesList, setArticlesList] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setArticlesList(posts);
  }, []);

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className='h-screen'>
        <NavBar />
        <main className='flex flex-col items-center gap-16 mt-20 mb-20 mx-4'>
          {articlesList?.map((post, index) => {
            return (
              <PostLink
                imageSrc={post.image}
                title={post.title}
                author={post.author}
                date={post.date}
                onClick={() => navigate(`${post.id}`)}
                key={index}
              />
            );
          })}
        </main>
      </div>
    </Suspense>
  );
}

export default Articles;

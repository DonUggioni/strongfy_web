import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import PostLink from '../PostLink';
import posts from '../../postData.json';
import useAppContext from '../../context/Context';
import FlatButton from '../UI/buttons/FlatButton';
import { createPortal } from 'react-dom';
import NewPostModal from '../NewPostModal';

function Articles() {
  const { setIsLoading, user } = useAppContext();
  const [articlesList, setArticlesList] = useState(null);
  const [articleModalOpen, setArticleModalOpen] = useState(false);
  const navigate = useNavigate();
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
  const ref = document.getElementById('modal');

  const styles =
    user.email === adminEmail
      ? 'flex flex-col items-center gap-12 mt-10 md:mt-6 mb-20 md:mb-12 mx-8 sm:mx-4'
      : 'flex flex-col items-center gap-12 mt-20 md:mt-12 mb-20 md:mb-12 mx-8 sm:mx-4';

  useEffect(() => {
    setArticlesList(posts);
  }, []);

  return (
    <div className='h-screen'>
      {articleModalOpen &&
        createPortal(
          <NewPostModal onClose={() => setArticleModalOpen(false)} />,
          ref
        )}
      <NavBar />
      <main className={styles}>
        {user.email === adminEmail && (
          <FlatButton
            onClick={() => setArticleModalOpen(true)}
            styles={'self-end'}
          >
            Create new
          </FlatButton>
        )}
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
  );
}

export default Articles;

import React, { useEffect, useState } from 'react';
import Input from './UI/typography/Input';
import TitleIcon from '~icons/material-symbols/title';
import UserIcon from '~icons/mdi/user-box';
import ImageUpload from '~icons/ic/baseline-image-search';
import FullButton from './UI/buttons/FullButton';
import FlatButton from './UI/buttons/FlatButton';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../firebase-config/firebase-config';
import { LinearProgress } from '@mui/material';
import { v4 as uuid } from 'uuid';

function NewPost() {
  const URL = 'https://www.barbell-hub.com/articles/';
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const formattedDate = `${month}/${day}/${year}`;

  const [postData, setPostData] = useState({
    title: '',
    author: '',
    image: '',
    content: '',
  });
  const [progress, setProgress] = useState(0);
  const [postId, setPostId] = useState(null);
  const navigate = useNavigate();

  const inputStyle = '';

  useEffect(() => {
    function getPostId() {
      setPostId(uuid());
    }
    getPostId();
  }, []);

  function handleCancel(e) {
    e.preventDefault();
    navigate(-1);
  }

  function handleChange(e) {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  }

  function handleImageChange(e) {
    setPostData({ ...postData, image: e.target.files[0] });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!postData.title || !postData.author || !postData.image) {
      alert('Please make sure all fields are filled in.');
      return;
    }

    const storageRef = ref(
      storage,
      `images/${Date.now()}${postData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, postData.image);

    uploadImage.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref).then((downloadURL) => {
          const postsRef = collection(db, 'posts');
          addDoc(postsRef, {
            ...postData,
            image: downloadURL,
            url: URL + postId,
            timestamp: serverTimestamp(),
            postId: postId,
            date: formattedDate,
          })
            .then(alert('Added successfully!'))
            .then(navigate('/'));
        });
      }
    );
  }

  return (
    <main className='bg-background flex items-center justify-center flex-col h-screen pt-16'>
      <div className='flex items-center justify-center w-full mb-2'>
        <form
          action='submit'
          className='w-[60%] md:w-[90%] bg-almostBlack p-8 rounded grid gap-4 shadow-lg'
        >
          <Input
            label={'Title'}
            name={'title'}
            placeholder={'Add Title'}
            style={inputStyle}
            type={'text'}
            icon={
              <TitleIcon
                className={'text-[1.5rem] text-grey300 sm:text-[1.4rem]'}
              />
            }
            onChange={(e) => handleChange(e)}
          />
          <Input
            label={'Author'}
            name={'author'}
            placeholder={'Add Author'}
            style={inputStyle}
            type={'text'}
            icon={
              <UserIcon
                className={'text-[1.5rem] text-grey300 sm:text-[1.4rem]'}
              />
            }
            onChange={(e) => handleChange(e)}
          />
          <Input
            label={'Select an Image'}
            style={inputStyle}
            type={'file'}
            icon={
              <ImageUpload
                className={'text-[1.5rem] text-grey300 sm:text-[1.4rem]'}
              />
            }
            onChange={(e) => handleImageChange(e)}
          />
          {progress !== 0 && (
            <LinearProgress variant='determinate' value={progress} />
          )}
          <label htmlFor='text' className='text-grey300 sm:text-sm font-mont'>
            Add Text
          </label>
          <textarea
            name='text'
            onChange={(e) => handleChange(e)}
            rows='10'
            placeholder='This text box uses a markdown tool. For a markdown reference, please follow the link below.'
            className=' border focus:ring-2 focus:ring-primary600 focus:outline-none p-2 font-mont text-lg focus:border-primary600 rounded'
          ></textarea>
          <div className='flex items-center justify-end gap-4'>
            <FlatButton onClick={(e) => handleCancel(e)}>Cancel</FlatButton>
            <FullButton onClick={(e) => handleSubmit(e)}>Submit</FullButton>
          </div>
        </form>
      </div>
      <a
        href='https://commonmark.org/help/'
        className='text-textColor font-mont underline text-sm pb-10'
        target='_blank'
      >
        Mardown reference.
      </a>
    </main>
  );
}

export default NewPost;

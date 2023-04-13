import React, { useState } from 'react';
import Input from './UI/typography/Input';
import TitleIcon from '~icons/material-symbols/title';
import UserIcon from '~icons/mdi/user-box';
import ImageUpload from '~icons/ic/baseline-image-search';
import FullButton from './UI/buttons/FullButton';
import FlatButton from './UI/buttons/FlatButton';
import { useNavigate } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase-config/firebase-config';

function NewPost() {
  const [postData, setPostData] = useState({
    title: '',
    author: '',
    image: '',
    url: 'https://www.barbell-hub.com/articles/',
    date: Timestamp.now().toDate(),
  });
  const navigate = useNavigate();

  const inputStyle = '';

  function handleChange(e) {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  }

  function handleImageChange(e) {
    setPostData({ ...postData, image: e.target.file[0] });
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!postData.title || !postData.author || !postData.image) {
      alert('Please make sure all fields are filled in.');
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${postData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, postData.image);
  }

  return (
    <main className='bg-background flex items-center justify-center flex-col my-6 h-screen'>
      <div className='flex items-center justify-center w-full my-6'>
        <form
          onSubmit={(e) => onSubmit(e)}
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
            <FlatButton onClick={() => navigate(-1)}>Cancel</FlatButton>
            <FullButton>Submit</FullButton>
          </div>
        </form>
      </div>
      <a
        href='https://commonmark.org/help/'
        className='text-textColor font-mont underline text-sm'
        target='_blank'
      >
        Mardown reference.
      </a>
    </main>
  );
}

export default NewPost;

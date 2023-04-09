import React from 'react';
import Input from './UI/typography/Input';
import TitleIcon from '~icons/material-symbols/title';
import UserIcon from '~icons/mdi/user-box';
import ImageUpload from '~icons/ic/baseline-image-search';

function NewPostModal({ onClose }) {
  const inputStyle = '';
  return (
    <div
      onClick={onClose}
      className='absolute top-0 right-0 bottom-0 left-0 z-10 bg-[rgba(0,0,0,0.9)] flex items-center '
    >
      <div className='flex items-center justify-center w-full '>
        <form
          action='submit'
          className='w-[60%] md:w-[90%] bg-background p-8 rounded grid gap-4'
        >
          <Input
            label={'Title'}
            placeholder={'Add Title'}
            style={inputStyle}
            type={'text'}
            icon={
              <TitleIcon
                className={'text-[1.5rem] text-grey300 sm:text-[1.4rem]'}
              />
            }
          />
          <Input
            label={'Author'}
            placeholder={'Add Author'}
            style={inputStyle}
            type={'text'}
            icon={
              <UserIcon
                className={'text-[1.5rem] text-grey300 sm:text-[1.4rem]'}
              />
            }
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
          />
          <label htmlFor='text' className='text-grey300 sm:text-sm font-mont'>
            Add Text
          </label>
          <textarea
            name='text'
            rows='15'
            className=' border focus:ring-2 focus:ring-primary600 focus:outline-none p-2 font-mont text-lg focus:border-primary600 rounded'
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default NewPostModal;

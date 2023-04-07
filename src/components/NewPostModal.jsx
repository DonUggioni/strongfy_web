import React from 'react';
import Input from './UI/typography/Input';
import TitleIcon from '~icons/material-symbols/title';

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
          className='w-[80%] md:w-[90%] bg-background p-8 rounded'
        >
          <Input
            label={'Title'}
            placeholder={'Input title'}
            style={inputStyle}
            type={'text'}
            icon={
              <TitleIcon
                className={'text-[1.5rem] text-grey300 sm:text-[1.4rem]'}
              />
            }
          />
          {/* <label htmlFor='title' className='font-mont pl-4 text-textColor'>
            Title
          </label>
          <input
            type='text'
            name='title'
            placeholder='Insert a title'
            className='w-full px-4 py-2 font-mont bg-grey200'
          /> */}
        </form>
      </div>
    </div>
  );
}

export default NewPostModal;

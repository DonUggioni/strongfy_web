import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../Form';
import FlatButton from '../UI/buttons/FlatButton';
import FullButton from '../UI/buttons/FullButton';
import Input from '../UI/typography/Input';
import Title from '../UI/typography/Title';
import PasswordIcon from '~icons/mdi/password';
import UserIcon from '~icons/mdi/user-box';
import EmailIcon from '~icons/ic/baseline-email';

function SignupPage() {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className='h-screen flex flex-col items-center justify-center mx-4'>
      <Title style={'text-3xl text-textColor mb-6'}>Sign Up</Title>
      <Form>
        <Input
          placeholder={'John Doe'}
          type={'text'}
          label={'Username'}
          icon={
            <UserIcon className='text-[1.5rem] text-grey300 sm:text-[1.4rem]' />
          }
          refs={inputRef}
        />
        <Input
          placeholder={'email@email.com'}
          type={'email'}
          label={'Email'}
          icon={
            <EmailIcon className='text-[1.5rem] text-grey300 sm:text-[1.4rem]' />
          }
        />
        <Input
          placeholder={'PassWord1234!'}
          type={'password'}
          label={'Password'}
          icon={
            <PasswordIcon className='text-[1.5rem] text-grey300 sm:text-[1.4rem]' />
          }
        />
        <Input
          placeholder={'PassWord1234!'}
          type={'password'}
          label={'Confirm Password'}
          icon={
            <PasswordIcon className='text-[1.5rem] text-grey300 sm:text-[1.4rem]' />
          }
        />
        <FullButton styles={'h-10 text-textColor'}>Sign Up</FullButton>
        <FlatButton
          styles={
            'border-none hover:border-none hover:shadow-none -mt-2 text-sm underline sm:text-xs'
          }
          onClick={() => navigate('/login')}
        >
          Already have an account?
        </FlatButton>
      </Form>
    </div>
  );
}

export default SignupPage;

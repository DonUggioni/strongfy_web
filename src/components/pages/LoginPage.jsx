import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../Form';
import Input from '../UI/typography/Input';
import Title from '../UI/typography/Title';
import FullButton from '../UI/buttons/FullButton';
import UserIcon from '~icons/mdi/user-box';
import PasswordIcon from '~icons/mdi/password';
import FlatButton from '../UI/buttons/FlatButton';

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <Title style={'text-3xl text-textColor opacity-85 mb-6'}>Login</Title>
      <Form>
        <Input
          placeholder={'email@email.com'}
          type={'email'}
          label={'Email'}
          icon={<UserIcon className='text-[1.6rem] text-grey300' />}
        />
        <Input
          placeholder={'PassWord1234!'}
          type={'password'}
          label={'Password'}
          icon={<PasswordIcon className='text-[1.6rem] text-grey300' />}
        />
        <FullButton styles={'h-10 text-textColor'}>Login</FullButton>
        <FlatButton
          styles={
            'border-none hover:border-none hover:shadow-none -mt-2 text-sm underline'
          }
          onClick={() => navigate('/signup')}
        >
          Don't have an account?
        </FlatButton>
      </Form>
    </div>
  );
}

export default LoginPage;

import React from 'react';
import Form from '../Form';
import Input from '../UI/typography/Input';
import Title from '../UI/typography/Title';
import UserIcon from '~icons/mdi/user-box';

function LoginPage() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <Title style={'text-4xl text-textColor opacity-85 mb-6'}>Login</Title>
      <Form>
        <Input
          placeholder={'email@email.com'}
          type={'email'}
          label={'Email'}
          icon={<UserIcon className='text-[1.8rem] text-grey300' />}
        />
        <Input placeholder={'PassWord1234!'} type={'text'} label={'Password'} />
      </Form>
    </div>
  );
}

export default LoginPage;

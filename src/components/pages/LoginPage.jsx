import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../Form';
import Input from '../UI/typography/Input';
import Title from '../UI/typography/Title';
import FullButton from '../UI/buttons/FullButton';
import EmailIcon from '~icons/ic/baseline-email';
import PasswordIcon from '~icons/mdi/password';
import FlatButton from '../UI/buttons/FlatButton';
import useAppContext from '../../context/Context';
import { auth } from '../../firebase-config/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAppContext();

  async function loginHandler(e) {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        const userData = userCredential.user;
        setUser(userData);
        localStorage.setItem('strongfyUserId', userData.uid);
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <Title style={'text-3xl text-textColor mb-6'}>Login</Title>
      <Form>
        <Input
          placeholder={'email@email.com'}
          type={'email'}
          label={'Email'}
          icon={<EmailIcon className='text-[1.5rem] text-grey300' />}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          placeholder={'PassWord1234!'}
          type={'password'}
          label={'Password'}
          icon={<PasswordIcon className='text-[1.5rem] text-grey300' />}
          onChange={(event) => setPassword(event.target.value)}
        />
        <FullButton styles={'h-10 text-textColor'} onClick={loginHandler}>
          Login
        </FullButton>
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

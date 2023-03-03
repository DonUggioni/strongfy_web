import React, { useEffect, useRef, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Form from '../Form';
import FlatButton from '../UI/buttons/FlatButton';
import FullButton from '../UI/buttons/FullButton';
import Input from '../UI/typography/Input';
import Title from '../UI/typography/Title';
import PasswordIcon from '~icons/mdi/password';
import UserIcon from '~icons/mdi/user-box';
import EmailIcon from '~icons/ic/baseline-email';
import { auth, db } from '../../firebase-config/firebase-config';

function SignupPage() {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  async function signupHandler(e) {
    e.preventDefault();

    if (password === confirmPassword) {
      try {
        const newUser = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await sendEmailVerification(auth.currentUser, {
          url: 'https://monumental-hamster-68270b.netlify.app/',
        });

        if (newUser) {
          await setDoc(doc(db, 'users', newUser.user.uid), {
            username: username,
            email: email,
            completedWorkouts: 0,
          });
          localStorage.setItem('strongfyUserId', newUser.user.uid);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  }

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
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder={'email@email.com'}
          type={'email'}
          label={'Email'}
          icon={
            <EmailIcon className='text-[1.5rem] text-grey300 sm:text-[1.4rem]' />
          }
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder={'PassWord1234!'}
          type={'password'}
          label={'Password'}
          icon={
            <PasswordIcon className='text-[1.5rem] text-grey300 sm:text-[1.4rem]' />
          }
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder={'PassWord1234!'}
          type={'password'}
          label={'Confirm Password'}
          icon={
            <PasswordIcon className='text-[1.5rem] text-grey300 sm:text-[1.4rem]' />
          }
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <FullButton styles={'h-10 text-textColor'} onClick={signupHandler}>
          Sign Up
        </FullButton>
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

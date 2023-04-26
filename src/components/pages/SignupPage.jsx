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
import useAppContext from '../../context/Context';

function SignupPage() {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const navigate = useNavigate();
  const inputRef = useRef(null);
  const { setUser, setPrivacyModalIsOpen, setTermsModalIsOpen } =
    useAppContext();

  const validUsername = username !== null;
  const validEmail = email !== null && email.includes('@');
  const validPassword = password !== null && password.length >= 6;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  async function signupHandler(e) {
    e.preventDefault();

    if (!validUsername || !validEmail || !validPassword) {
      alert(
        'Please make sure all fields are filled in and the information is correct.'
      );
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
    }

    if (validUsername && validEmail && password === confirmPassword) {
      try {
        const newUser = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await sendEmailVerification(auth.currentUser, {
          url: 'https://barbell-hub.com/login',
        });

        alert(
          'A confirmation email was sent. Please verify your email before logging in.'
        );

        if (newUser) {
          await setDoc(doc(db, 'users', newUser.user.uid), {
            username: username,
            email: email,
            completedWorkouts: 0,
          });
          localStorage.setItem('strongfyUserId', newUser.user.uid);
          setUser(newUser.user);
          navigate('/');
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
      <div>
        <p className='text-textColor text-[.8rem]'>
          By signing up you agree to the{' '}
          <span
            onClick={() => setPrivacyModalIsOpen(true)}
            className='underline underline-offset-2 cursor-pointer'
          >
            Privacy Policy
          </span>{' '}
          and{' '}
          <span
            onClick={() => setTermsModalIsOpen(true)}
            className='underline underline-offset-2 cursor-pointer'
          >
            Terms and Conditions.
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;

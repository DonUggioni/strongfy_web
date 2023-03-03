import React from 'react';
import useAppContext from '../../context/Context';

function LoggedWorkouts() {
  const { userInfo } = useAppContext();

  return (
    <>
      <p className='text-grey300 text-xl md:text-lg sm:text-base font-mont'>
        Logged Workouts
      </p>
      <span className='text-primary500 text-4xl font-mont md:text-3xl'>
        {userInfo?.completedWorkouts ? userInfo?.completedWorkouts : '0'}
      </span>
    </>
  );
}

export default LoggedWorkouts;

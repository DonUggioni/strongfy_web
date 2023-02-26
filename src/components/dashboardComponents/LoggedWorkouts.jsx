import React from 'react';
import Text from '../UI/typography/Text';
import Title from '../UI/typography/Title';
import useAppContext from '../../context/Context';

function LoggedWorkouts() {
  const { userInfo } = useAppContext();

  return (
    <>
      <p className='text-grey300 text-xl md:text-lg sm:text-base font-mont'>
        Logged Workouts
      </p>
      <span className='text-textColor text-4xl font-mont font-semibold'>
        {userInfo?.completedWorkouts}
      </span>
    </>
  );
}

export default LoggedWorkouts;

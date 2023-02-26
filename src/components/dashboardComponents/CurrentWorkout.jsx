import React from 'react';
import Text from '../UI/typography/Text';
import Title from '../UI/typography/Title';
import useAppContext from '../../context/Context';

function CurrentWorkout() {
  const { userTrainingInfo } = useAppContext();

  return (
    <>
      <p className='text-grey300 text-xl md:text-lg sm:text-base font-mont'>
        Current Workout
      </p>
      <span className='text-textColor text-4xl font-mont font-semibold'>
        {userTrainingInfo !== null && userTrainingInfo[0].title}
      </span>
    </>
  );
}

export default CurrentWorkout;

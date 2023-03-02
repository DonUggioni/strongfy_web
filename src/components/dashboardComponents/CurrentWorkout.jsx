import React from 'react';
import useAppContext from '../../context/Context';
import NoData from './NoData';

function CurrentWorkout() {
  const { userTrainingInfo } = useAppContext();

  if (userTrainingInfo?.length === 0) {
    <NoData message={'No workouts have been created yet!'} />;
  }

  return (
    <>
      <p className='text-grey300 text-xl md:text-lg sm:text-base font-mont'>
        Current Workout
      </p>
      <span className='text-primary500 text-center text-4xl font-mont tracking-wider md:text-3xl md:tracking-wide'>
        {userTrainingInfo !== null && userTrainingInfo[0].title}
      </span>
    </>
  );
}

export default CurrentWorkout;

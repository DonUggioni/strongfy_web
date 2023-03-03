import React from 'react';
import Text from '../UI/typography/Text';
import Title from '../UI/typography/Title';
import useAppContext from '../../context/Context';
import NoData from './NoData';

function PreviousWorkouts() {
  const { userTrainingInfo } = useAppContext();

  let prevWorkouts;

  if (userTrainingInfo !== null) {
    prevWorkouts = userTrainingInfo?.slice(1);
  } else {
    return;
  }

  if (userTrainingInfo.length <= 1) {
    return (
      <NoData
        message={'Not enough data yet! Keep training and come back later!'}
      />
    );
  }

  return (
    <>
      <p className='text-grey300 text-xl md:text-lg sm:text-base font-mont'>
        Previous Workouts
      </p>
      {prevWorkouts.map((item, index) => {
        return (
          <div
            className='border-b-2 border-grey500 flex items-center justify-start w-full'
            key={index}
          >
            <Text style={'text-primary500 pb-2 text-3xl tracking-wider'}>
              {item.title}
            </Text>
          </div>
        );
      })}
    </>
  );
}

export default PreviousWorkouts;

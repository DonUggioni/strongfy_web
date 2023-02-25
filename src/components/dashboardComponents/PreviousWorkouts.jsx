import React from 'react';
import Text from '../UI/typography/Text';
import Title from '../UI/typography/Title';
import useAppContext from '../../context/Context';

function PreviousWorkouts() {
  const { userTrainingInfo } = useAppContext();

  let prevWorkouts;

  if (userTrainingInfo !== null) {
    prevWorkouts = userTrainingInfo?.slice(0, -1);
  } else {
    return;
  }

  return (
    <>
      <Text style={'text-2xl text-grey300'}>Previous Workouts</Text>
      <div className='border-b-2 border-grey500 flex items-center justify-start w-full'>
        {prevWorkouts.map((item, index) => {
          return (
            <Text
              style={'text-textColor pb-2 text-3xl tracking-wider'}
              key={index}
            >
              {item.title}
            </Text>
          );
        })}
      </div>
    </>
  );
}

export default PreviousWorkouts;

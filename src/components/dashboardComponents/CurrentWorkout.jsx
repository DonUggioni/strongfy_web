import React from 'react';
import Text from '../UI/typography/Text';
import Title from '../UI/typography/Title';
import useAppContext from '../../context/Context';

function CurrentWorkout() {
  const { userTrainingInfo } = useAppContext();

  return (
    <>
      <Text style={'text-2xl text-grey300'}>Current Workout</Text>
      <Title style={'text-textColor'}>
        {userTrainingInfo !== null && userTrainingInfo[0].title}
      </Title>
    </>
  );
}

export default CurrentWorkout;

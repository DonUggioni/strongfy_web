import React from 'react';
import Text from '../UI/typography/Text';
import Title from '../UI/typography/Title';
import useAppContext from '../../context/Context';

function CurrentWorkout() {
  const { userTrainingInfo } = useAppContext();
  console.log(userTrainingInfo[0]?.title);

  return (
    <>
      <Text style={'text-2xl text-grey300'}>Text</Text>
      <Title style={'text-textColor'}>{userTrainingInfo[0]?.title}</Title>
    </>
  );
}

export default CurrentWorkout;

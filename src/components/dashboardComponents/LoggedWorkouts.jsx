import React from 'react';
import Text from '../UI/typography/Text';
import Title from '../UI/typography/Title';
import useAppContext from '../../context/Context';

function LoggedWorkouts() {
  const { userInfo } = useAppContext();

  return (
    <>
      <Text style={'text-grey300'}>Logged Workouts</Text>
      <Title style={'text-textColor'}>{userInfo?.completedWorkouts}</Title>
    </>
  );
}

export default LoggedWorkouts;

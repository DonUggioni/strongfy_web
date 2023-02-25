import React from 'react';
import Container from '../Container';
import NavBar from '../navBar';
import Title from '../UI/typography/Title';
import Text from '../UI/typography/Text';
import LoggedWorkouts from '../dashboardComponents/LoggedWorkouts';
import useAppContext from '../../context/Context';
import CurrentWorkout from '../dashboardComponents/CurrentWorkout';

function Dashboard() {
  const { userInfo } = useAppContext();

  return (
    <>
      <NavBar />
      <div className='pl-12 pt-2 flex gap-2'>
        <Text style={'text-textColor'}>Hello,</Text>
        <Text style={'text-textColor'}>{userInfo?.username}</Text>
      </div>
      <div className='px-12 py-6 grid grid-cols-2 grid-rows-4 gap-6'>
        <Container style={'flex-col col-start-1'}>
          <LoggedWorkouts />
        </Container>

        <Container style={'flex-col col-start-1'}>
          <CurrentWorkout />
        </Container>

        <Container style={'flex-col col-start-1 row-start-3 row-span-2'}>
          <Text style={'text-2xl text-grey300'}>Text</Text>
          <Title>Title 3</Title>
        </Container>

        <Container style={'flex-col col-start-2 row-start-1 row-span-2'}>
          <Text style={'text-2xl text-grey300'}>Text</Text>
          <Title>Title 4</Title>
        </Container>

        <Container style={'flex-col col-start-2 row-span-2'}>
          <Text style={'text-2xl text-grey300'}>Text</Text>
          <Title>Title 5</Title>
        </Container>
      </div>
    </>
  );
}

export default Dashboard;

import React from 'react';
import Container from '../Container';
import NavBar from '../NavBar';
import Text from '../UI/typography/Text';
import LoggedWorkouts from '../dashboardComponents/LoggedWorkouts';
import useAppContext from '../../context/Context';
import CurrentWorkout from '../dashboardComponents/CurrentWorkout';
import PreviousWorkouts from '../dashboardComponents/PreviousWorkouts';
import NoData from '../dashboardComponents/NoData';
import ProjectedMaxes from '../dashboardComponents/ProjectedMaxes';

function Dashboard() {
  const { userInfo } = useAppContext();

  return (
    <div className='bg-gradient-to-r from-background to-background bg-cover'>
      <NavBar />
      <div className='pl-12 pt-2 flex gap-2'>
        <Text style={'text-textColor'}>Hello,</Text>
        <Text style={'text-textColor'}>{userInfo?.username}</Text>
      </div>
      <div className='px-12 py-6 grid grid-cols-2 grid-rows-4 gap-6 sm:grid-cols-1 sm:grid-rows-6 sm:gap-4 sm:px-6 sm:py-4'>
        <Container
          style={'flex-col col-start-1 min-h-[12rem] md:min-h-[10rem]'}
        >
          <LoggedWorkouts />
        </Container>

        <Container style={'flex-col col-start-1'}>
          <CurrentWorkout />
        </Container>

        <Container
          style={
            'flex-col col-start-1 row-start-3 row-span-2 min-h-[24rem] md:min-h-[20rem]'
          }
        >
          <PreviousWorkouts />
        </Container>

        <Container
          style={
            'flex-col col-start-2 row-start-1 row-span-2 sm:row-start-6 sm:col-start-1'
          }
        >
          <NoData message={'Under construction! Please be patient =)'} />
        </Container>

        <Container
          style={
            'flex-col col-start-2 row-span-2 sm:row-start-5 sm:col-start-1 sm:row-span-1'
          }
        >
          <ProjectedMaxes />
        </Container>
      </div>
    </div>
  );
}

export default Dashboard;

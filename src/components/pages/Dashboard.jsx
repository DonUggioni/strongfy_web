import React from 'react';
import Container from '../Container';
import NavBar from '../navBar';
import Title from '../UI/typography/Title';
import Text from '../UI/typography/Text';

function Dashboard() {
  return (
    <>
      <NavBar />
      <div className='pl-12 pt-2 flex gap-2'>
        <Text>Hello,</Text>
        <Text>User name</Text>
      </div>
      <div className='px-12 py-6 grid grid-cols-2 grid-rows-4 gap-6'>
        <Container style={'flex-col col-start-1'}>
          <Text style={'text-2xl text-grey300'}>Logged Workouts</Text>
          <Title style={'text-2xl text-textColor'}>Title 1</Title>
        </Container>

        <Container style={'flex-col col-start-1'}>
          <Text style={'text-2xl text-grey300'}>Text</Text>
          <Title>Title 2</Title>
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

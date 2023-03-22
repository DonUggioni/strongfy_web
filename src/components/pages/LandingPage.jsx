import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../Hero';
import NavBar from '../NavBar';
import Section from '../Section';
import PhoneScreenshot from '../UI/screenshots/PhoneScreenshot';
import ScreenShot1 from '../../assets/images/iphone_1.png';
import ScreenShot2 from '../../assets/images/iphone_2.png';
import ScreenShot3 from '../../assets/images/iphone_3.png';
import Text from '../UI/typography/Text';
import Title from '../UI/typography/Title';
import Footer from '../Footer';
import FullButton from '../UI/buttons/FullButton';
// import AppleDownloadButton from '../UI/buttons/AppleDownloadButton';
import GoogleDownloadButton from '../UI/buttons/GoogleDownloadButton';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className='h-full max-w-screen-2xl bg-background font-mont text-textColor box-border '>
      <NavBar />
      <Hero />
      <Section
        background={'bg-gradient-to-r from-primary500 to-primary600 '}
        styles={
          'flex flex-row gap-28 xl:gap-16 md:flex-col items-center justify-center md:text-center md:gap-10 pb-4 sm:gap-0 sm:pb-10'
        }
      >
        <PhoneScreenshot imageSrc={ScreenShot1} />
        <div className='flex flex-col flex-1 self-center w-full gap-10 xl:gap-8 sm:gap-6'>
          <Title>Select your training phase</Title>
          <Text>
            Want to grow muscle? Want to get stronger? Focusing your workouts on
            a specific type of training can more efficient. For this reason, you
            can choose between hypertrophy and strength phases in order to
            maximize your gains.
          </Text>
        </div>
      </Section>
      <Section
        styles={
          'flex flex-row gap-28 bg-background xl:gap-16 md:flex-col-reverse items-center justify-center md:text-center md:gap-10 pb-4 sm:gap-0 sm:pb-10'
        }
      >
        <div className='flex flex-col flex-1 self-center gap-10 xl:gap-8'>
          <Title>Calculate your maxes</Title>
          <Text>
            Hit a new PR for 3 reps? Using the rep max calculator, you can
            calculate your estimated rep max to better adjust your training.
            During a strength phase, it is important to know your maxes so you
            can plan your training session more efficiently.
          </Text>
        </div>
        <PhoneScreenshot imageSrc={ScreenShot2} />
      </Section>
      <Section
        background={'bg-gradient-to-r from-primary600 to-primary500 '}
        styles={
          'flex flex-row gap-28 xl:gap-16 md:flex-col items-center justify-center md:text-center md:gap-10 pb-4 sm:gap-0 sm:pb-10'
        }
      >
        <PhoneScreenshot imageSrc={ScreenShot3} />
        <div className='flex flex-col flex-1 self-center gap-10 xl:gap-8'>
          <Title>Track your progress</Title>
          <Text>
            Keep track of your progress on the three big lifts. Let's be honest,
            no one cares how much you can leg press! As powerlifters, all we
            care about is how much you can squat, bench and deadlift. For that
            reason, we've added a chart to help you visualize your progress on
            the main three.
          </Text>
        </div>
      </Section>
      <Section styles={'flex items-center justify-center flex-col py-12'}>
        <div className='flex flex-col items-center gap-6'>
          <Title style={'sm:text-center'}>Ready to get stronger?</Title>
          <Text>Sign up now and start your quest to strength!</Text>
        </div>
        <motion.div variants={item}>
          <FullButton
            styles={'min-w-[16rem] mt-2'}
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </FullButton>
        </motion.div>

        <div className='flex flex-col items-center justify-center mt-8 gap-2 sm:text-center'>
          <Text>Get the app</Text>
          <motion.div
            variants={item}
            className='flex gap-6 sm:flex-col sm:gap-3'
          >
            {/* <AppleDownloadButton /> */}
            <GoogleDownloadButton />
          </motion.div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export default LandingPage;

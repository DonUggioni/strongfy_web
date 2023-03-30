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
            Are you looking to pump up those muscles and unleash your inner
            strength? Let me tell you, focusing on a specific type of training
            can make a world of difference! With the option of hypertrophy or
            strength phases, you can supercharge your gains and reach your
            fitness goals in no time! So why wait? Let's get you started on the
            path to a fitter, stronger you today!
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
            Did you just hit a PR for 3 reps? Awesome job! But why stop there?
            By utilizing the rep max calculator, you can estimate your maximum
            rep range and tailor your training accordingly. This is especially
            crucial during a strength phase, as having a clear understanding of
            your maximum capacity will enable you to optimize your training
            sessions for maximum results.
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
            We all know that when it comes to measuring your strength, the three
            big lifts are what really matter. Nobody cares about how much you
            can leg press! That's why we've got you covered with our handy
            progress chart that lets you easily track your performance on the
            squat, bench press, and deadlift. Keep tabs on your gains and see
            your progress soar as you dominate those key lifts like a true
            champion. Don't settle for mediocrity, aim for greatness together!
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

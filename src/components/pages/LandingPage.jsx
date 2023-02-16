import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../Hero';
import NavBar from '../navBar';
import Section from '../Section';
import PhoneScreenshot from '../UI/screenshots/PhoneScreenshot';
import ScreenShot1 from '../../assets/images/iphone_1.png';
import ScreenShot2 from '../../assets/images/iphone_2.png';
import ScreenShot3 from '../../assets/images/iphone_3.png';
import Text from '../UI/typography/Text';
import Title from '../UI/typography/Title';
import Footer from '../Footer';
import FullButton from '../UI/buttons/FullButton';
import AppleDownloadButton from '../UI/buttons/AppleDownloadButton';
import GoogleDownloadButton from '../UI/buttons/GoogleDownloadButton';

function LandingPage() {
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className='h-full max-w-screen-2xl bg-background font-mont text-textColor box-border '>
      <Hero />
      <Section
        background={'bg-gradient-to-r from-primary500 to-primary600 '}
        styles={'flex flex-row gap-28 xl:gap-16'}
      >
        <PhoneScreenshot imageSrc={ScreenShot1} />
        <div className='flex flex-col flex-1 self-center gap-10 xl:gap-8'>
          <Title>Lorem ipsum dolor sit amet</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
            vitae purus faucibus ornare suspendisse sed nisi lacus sed. A
            scelerisque purus semper eget duis at tellus at. Est ante in nibh
            mauris cursus mattis molestie. Nunc mattis enim ut tellus elementum
            sagittis vitae. Consectetur adipiscing elit duis tristique
            sollicitudin nibh sit amet. Tempus egestas sed sed risus pretium
            quam vulputate dignissim suspendisse.
          </Text>
        </div>
      </Section>
      <Section styles={'flex flex-row gap-28 xl:gap-16'}>
        <div className='flex flex-col flex-1 self-center gap-10 xl:gap-8'>
          <Title>Lorem ipsum dolor sit amet</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
            vitae purus faucibus ornare suspendisse sed nisi lacus sed. A
            scelerisque purus semper eget duis at tellus at. Est ante in nibh
            mauris cursus mattis molestie. Nunc mattis enim ut tellus elementum
            sagittis vitae. Consectetur adipiscing elit duis tristique
            sollicitudin nibh sit amet. Tempus egestas sed sed risus pretium
            quam vulputate dignissim suspendisse.
          </Text>
        </div>
        <PhoneScreenshot imageSrc={ScreenShot2} />
      </Section>
      <Section
        background={'bg-gradient-to-r from-primary600 to-primary500 '}
        styles={'flex flex-row gap-28 xl:gap-16'}
      >
        <PhoneScreenshot imageSrc={ScreenShot3} />
        <div className='flex flex-col flex-1 self-center gap-10 xl:gap-8'>
          <Title>Lorem ipsum dolor sit amet</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
            vitae purus faucibus ornare suspendisse sed nisi lacus sed. A
            scelerisque purus semper eget duis at tellus at. Est ante in nibh
            mauris cursus mattis molestie. Nunc mattis enim ut tellus elementum
            sagittis vitae. Consectetur adipiscing elit duis tristique
            sollicitudin nibh sit amet. Tempus egestas sed sed risus pretium
            quam vulputate dignissim suspendisse.
          </Text>
        </div>
      </Section>
      <Section styles={'flex items-center justify-center flex-col'}>
        <div className='flex flex-col items-center gap-6'>
          <Title>Ready to get stronger?</Title>
          <Text>Sign up now and start your quest to strength!</Text>
        </div>
        <motion.div variants={item}>
          <FullButton styles={'min-w-[16rem] mt-2'}>Sign Up</FullButton>
        </motion.div>

        <div className='flex flex-col items-center justify-center mt-8 gap-2'>
          <Text>Get the app</Text>
          <motion.div variants={item} className='flex gap-6'>
            <AppleDownloadButton />
            <GoogleDownloadButton />
          </motion.div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export default LandingPage;

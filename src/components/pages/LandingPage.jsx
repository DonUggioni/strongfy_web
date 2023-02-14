import React from 'react';
import Hero from '../Hero';
import NavBar from '../navBar';
import Section from '../Section';
import PhoneScreenshot from '../UI/screenshots/PhoneScreenshot';
import ScreenShot1 from '../../assets/images/iphone_1.png';
import ScreenShot2 from '../../assets/images/iphone_2.png';
import ScreenShot3 from '../../assets/images/iphone_3.png';

function LandingPage() {
  return (
    <div className='h-full bg-background font-mont text-textColor box-border max-w-screen-2xl'>
      <NavBar />
      <Hero />
      <Section background={'bg-gradient-to-r from-primary500 to-primary600'}>
        <PhoneScreenshot imageSrc={ScreenShot1} />
      </Section>
    </div>
  );
}

export default LandingPage;

import React from 'react';
import Hero from '../Hero';
import NavBar from '../navBar';

function LandingPage() {
  return (
    <div className='h-screen bg-background font-mont text-textColor box-border'>
      <NavBar />
      <Hero />
    </div>
  );
}

export default LandingPage;

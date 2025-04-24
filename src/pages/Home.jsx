import React, { useEffect } from 'react';
import Hero from '../features/hero/Hero';
import Lawyers from '../features/lawyers/Lawyers';
import StatsSection from '../features/key-metrics/StatsSection';

const Home = () => {
  useEffect(() => {
    document.title = 'Home';  
  }, []);  

  return (
    <div className='mx-3'>
        <Hero />
        <Lawyers />
        <StatsSection />
    </div>
  );
};

export default Home;

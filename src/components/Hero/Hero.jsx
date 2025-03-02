import React from 'react';
import './Hero.css';
import { assets } from '../../assets/assets';

const Hero = () => {
  return (
    <>
      <div className='bg-curve absolute top-0 right-0 -z-1 h-svh'>
        <img src={assets.clip_image} alt='' />
        <div className='container mx-auto flex items-center left-0'>hi</div>
      </div>
    </>
  );
};

export default Hero;

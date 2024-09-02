// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ImageGrid from '../components/ImageGrid'; // Import the ImageGrid component
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    
      <HeroSection />
      <ImageGrid /> {/* Include the ImageGrid component */}
   
    </>
  );
};

export default Home;
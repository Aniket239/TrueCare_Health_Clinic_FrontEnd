import React from 'react'
import { NavLink } from 'react-router';
import BannerCarousel from '../components/BannerCarousel';
import About from '../components/About';
import DoctorsSection from '../components/DoctorsSection';
import DepartmentsSection from '../components/DepartmentsSection';

const LandingPage = () => {
  console.log('====================================');
  console.log('text ===============================');
  console.log('====================================');
  return (
    <>
      <BannerCarousel />
      <About />
      <DoctorsSection />
      <DepartmentsSection />
    </>
  )
}

export default LandingPage;

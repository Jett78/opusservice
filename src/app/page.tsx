import React from 'react'
import HeroSection from './pages/Home/HeroSection'
import AboutUs from './pages/Home/AboutUs'
import WhyUs from './pages/Home/WhyUs'
import Chairmanmssg from './pages/Home/Chairmanmssg'
import OurServices from './pages/Home/OurServices'

const page = () => {
  return (
    <div>
            <HeroSection/>
            <AboutUs/>
            <WhyUs/>
            <Chairmanmssg/>
            <OurServices/>
    </div>
  )
}

export default page
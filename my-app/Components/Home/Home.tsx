"use client";

import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Course from './Course/Course'
import Review from './Review/Review'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from 'aos';

const Home = () => {
  useEffect(()=>{
      const initAos = async () => {
        await import("aos");
        Aos.init({
          duration:1000,
          easing:"ease",
          once:true,
          anchorPlacement:"top-bottom",
        });
      };

      initAos();
  },[])

  return (
    <div>
      <Hero/>
      <About/>
      <Course/>
      <Review/>
    </div>
  )
}

export default Home


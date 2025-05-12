"use client";
import React from 'react'
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

function HeroImage() {
  return (
    <Tilt>
        <div data-aos="fade-left" data-aos-delay="1050" className='hidden lg:block'>
            <Image src="/images/hero.png" width={800} height={600} alt="hero"></Image>
        </div>
    </Tilt>
  )
}

export default HeroImage


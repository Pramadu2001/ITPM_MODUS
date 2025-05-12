import React from 'react'

function HeroContent() {
  return (
    <div>
      {/*Title*/}
      <h1  data-aos="fade.right" 
      className='text-3xl sm:text-4xl md:text:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white'>Best Online Platform for Education.
      </h1>
      {/*Description*/}
      <p  data-aos="fade-left" data-aos-delay="150" className='mt-6 text-sm md:text-base text-white/60'>
      Discover a world of learning with our online education platform. We provide Smart Road Mapper Agent, 
      diverse courses, and a supportive community, empowering you to achieve your educational goals.
      </p>
      {/*Buttons*/}
      <div className='mt-8 flex items-center space-x-4'>
        <button data-aos="zoom-in" data-aos-delay="300" className=' Button__Class bg-green-700 hover:bg-green-900 cursor-pointer'>Get Started</button>
        <button data-aos="zoom-in" data-aos-delay="450" className=' Button__Class bg-yellow-700 hover:bg-yellow-900 cursor-pointer'>Learn More</button>
      </div>
      {/*Stats*/}
      <div className='flex items-center fle-wrap space-x-16 mt-8'>
      <div data-aos="fade-up" data-aos-delay="600" >
            <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>260+</p>
            <p className='w-[100px] h-[3px] bg-green-600 mt-2 mb-2 rounded-lg'></p>
            <p className='md:text-lg text-sm text-white text-opacity-70'>Tutors</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="750">
            <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>2260+</p>
            <p className='w-[100px] h-[3px] bg-blue-600 mt-2 mb-2 rounded-lg'></p>
            <p className='md:text-lg text-sm text-white text-opacity-70'>Students</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="900">
            <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>60+</p>
            <p className='w-[100px] h-[3px] bg-pink-600 mt-2 mb-2 rounded-lg'></p>
            <p className='md:text-lg text-sm text-white text-opacity-70'>Courses</p>
        </div>
      </div>
    </div>
  )
}

export default HeroContent

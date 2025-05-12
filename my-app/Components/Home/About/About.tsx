import React from "react";
import { FaArrowRight, FaAward, FaRegLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      {/* define grid */}
      <div className="max-w-6xl w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* 1st part */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center">
              <FaRegLightbulb className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl text-black font-semibold">
              Guaranteed and Certified
            </h1>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800">
            Online Learning Wherever and Whenever.
          </h1>
          <p className="mt-4 text-gray-600">
            Learn at your own pace from anywhere with access to certified courses,
            industry-recognized instructors, and personalized guidance. Whether you're
            starting fresh or upskilling, we provide the tools and support to fuel your
            journey toward career success.
          </p>
          <button className="flex items-center space-x-2 px-8 py-3 mt-8 hover:bg-gray-700 transition-all duration-200 rounded-3xl bg-black text-white cursor-pointer">
            <span>Learn More</span>
            <FaArrowRight />
          </button>
        </div>
        {/* 2nd Part */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="150">
          <div className="mt-8 w-full">
            <h1 className="text-7xl lg:text-9xl font-bold text-black/5">01</h1>
            <div className="-mt-10">
              <h1 className="text-xl md:text-2xl text-black/70 mb-3 font-bold">Smart Road Mapper</h1>
              <p className="w-[90%] lg:w-[70%] text-base text-black/60">
                Discover your personalized career path with our unique Smart Road Mapper.
                Whether you aim to become a Frontend Developer, Data Analyst, or UX Designer,
                our system guides you step-by-step, highlighting essential skills, tools,
                and learning modules tailored to your goals.
              </p>
            </div>
          </div>
          <div className="mt-8 w-full">
            <h1 className="text-7xl lg:text-9xl font-bold text-black/5">02</h1>
            <div className="-mt-10">
              <h1 className="text-xl md:text-2xl text-black/70 mb-3 font-bold">Flexible & Affordable</h1>
              <p className="w-[90%] lg:w-[70%] text-base text-black/60">
                Learn on your schedule with flexible courses designed for busy lives.
                Our platform offers cost-effective plans without compromising quality, 
                making professional development accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque esse
            quaerat dolorum recusandae, suscipit excepturi, qui exercitationem
            harum modi soluta, rerum pariatur odit expedita ut. A exercitationem
            excepturi ducimus culpa!
          </p>
          <button className="flex items-center space-x-2 px-8 py-3 mt-8 hover:bg-gray-700 transition-all duration-200 rounded-3xl bg-black text-white cursor-pointer">
            <span>Learn More</span>
            <FaArrowRight />
          </button>
        </div>
        {/*2nd Part*/}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="150">
            <div className="mt-8 w-full">
                <h1 className="text-7xl lg:text-9xl font-bold text-black/5">01</h1>
                <div className="-mt-10">
                    <h1 className="text-xl md:text-2xl text-black/70 mb-3 font-bold">Flexible schedule</h1>
                    <p className="w-[90%] lg:w-[70%] text-base text-black/60">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, odit.
                    </p>
                </div>
            </div>
            <div className="mt-8 w-full">
                <h1 className="text-7xl lg:text-9xl font-bold text-black/5">02</h1>
                <div className="-mt-10">
                    <h1 className="text-xl md:text-2xl text-black/70 mb-3 font-bold">Pocket Friendly</h1>
                    <p className="w-[90%] lg:w-[70%] text-base text-black/60">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, odit.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default About;


import Slider from '@/Components/Helper/Slider';
import React from 'react';
import { BsQuote } from 'react-icons/bs';

function Review() {
  return (
    <div className="pt-20 pb-16 bg-white">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-3 items-center gap-20">
        {/* Text content */}
        <div className="xl:col-span-1 mt-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center">
              <BsQuote className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-semibold">Student Feedback</h1>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-5xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.3rem] xl:leading-[3.6rem] ">
            Trusted by genius people.
          </h1>

          {/* Description */}
          <p className="text-base text-black/50 mt-6">
  Discover how our tailored learning paths and expert guidance help students achieve their goals with confidence and ease.
</p>

          {/* Info */}
          <div className="flex items-center space-x-10 mt-8">
            <p className="font-bold text-5xl">99%</p>
            <p className="text-black-900">
              Student's Completed<br /> Course Successfully
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="xl:col-span-2 bg-white rounded-lg overflow-hidden">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Review;


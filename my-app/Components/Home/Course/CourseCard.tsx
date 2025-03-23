"use client";
import Image from 'next/image';
import React from 'react'
import { FaFile, FaStar, FaUser } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import Tilt from "react-parallax-tilt"
//define the type

type Props = {
   course: {
        id: number;
        image: string;
        title: string;
        price: number;
        author: string;
        reviewNumber: number;
        lessons: number;
        students: number;
        category: string;
    }
}

const CourseCard = ({course}:Props) => {
  return (
    <Tilt>
        <div className='bg-white rounded-lg overflow-hidden cursor-pointer'>
            <div className="overflow-hidden rounded-lg">
                <Image 
                src={course.image} 
                alt={course.title} 
                width={400} 
                height={400} 
                className="w-full h-full">
                </Image>
            </div>
            <div className='p-4'>
                <div className='flex items-center mt-6 space-x-4'>
                    <span className='text-lg text-black/70 font-bold'>
                        {course.category}
                    </span>
                    <span className='text-base text-gray-600'>
                        {course.author}
                    </span>
                </div>
                <h1 className='text-xl text-black font-bold mt-2'>{course.title}</h1>
                <div className='flex mt-2 items-center space-x-2'>
                    <div className='flex items-center'>
                        <FaStar className='w-4 h-4 text-yellow-600' />
                        <FaStar className='w-4 h-4 text-yellow-600' />
                        <FaStar className='w-4 h-4 text-yellow-600' />
                        <FaStar className='w-4 h-4 text-yellow-600' />
                        <FaStar className='w-4 h-4 text-yellow-600' />
                    </div>
                    <span className='text-base text-orange-800 font-semibold'>({course.reviewNumber} Reviews)</span>
                </div>
                {/*line*/}
                <div className='mt-6 mb-6 w-full h-[2px] bg-gray-500/15'>
                {/*lessons & student info*/}
                <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between border-t border-gray-300 mt-auto pt-2">
                            <div className="flex items-center space-x-2">
                                <FaFile className="w-4 h-4 text-orange-600" />
                                <p className="text-base font-semibold text-gray-800">{course.lessons} Lessons</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaUserGroup className="w-4 h-4 text-orange-600" />
                                <p className="text-base font-semibold text-gray-800">{course.students} Students</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Tilt>
  )
}

export default CourseCard

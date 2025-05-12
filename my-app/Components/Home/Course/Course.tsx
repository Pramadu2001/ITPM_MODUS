import React from 'react'
import Image from 'next/image'
import { coursesData } from '@/data/data'
import CourseCard from './CourseCard'

function Course() {
  return (
    <div className='pt-16 pb-12 relative bg-gray-200'>
        {/*bounce ball*/}
      <Image src="/images/cb.png" alt="image" width={800} height={800} className="absolute top-[30%] animate-bounce"></Image>
      <div className='w-[80%] pt-8 pb-8 mx-auto'>
        {/*title*/}
        <h1 className='text-4xl md:text-5xl text-grey-900 font-bold'>Popular Courses</h1>
        {/*Courses*/}
        <div className='md:mt-16 mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 '>
            {coursesData.map((course,i) => {
                //Individual course card
                return (<div key={course.id} data-aos="fade-right" data-aos-placement="top-center" data-aos-delay={'${i*150}'}>
                    <CourseCard course={course}/>
                </div>);
            })}
        </div>
      </div>
    </div>
  )
}

export default Course

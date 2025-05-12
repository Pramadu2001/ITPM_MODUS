import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <div className='pt-20 pb-12 bg-black'>
        {/*define grid system */}
      <div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b[1.5px] border-white/20'>
        {/*list footer part*/}
        <div>
            <Image src="/images/logo.png" alt="logo" height={120} width={120} />
            <p className='text-white/50'>Lorem ipsum dolor, sit amet consectetur Qui,  in   vel  dolores  odit  iste.</p>
            {/*social icons*/}
            <div className='flex items-center space-x-4 mt-6'>
                <FaFacebookF className='w-6 h-6 text-blue-600'/>
                <FaTwitter className='w-6 h-6 text-sky-500'/>
                <FaYoutube className='w-6 h-6 text-red-700'/>
                <FaInstagram className='w-6 h-6 text-pink-600'/>
            </div>
        </div>
        {/*2nd part*/}
        <div>
            <h1 className='footer__heading'>Popular</h1>
            <p className='footer__link'>Web Development</p>
            <p className='footer__link'>Hacking</p>
            <p className='footer__link'>UI UX Design</p>
            <p className='footer__link'>App Development</p>
            <p className='footer__link'>Desktop Development</p>
            <p className='footer__link'>Digital Marketing</p>
        </div>
        {/*3rd part*/}
        <div>
            <h1 className='footer__heading'>Quick Links</h1>
            <p className='footer__link'>Home</p>
            <p className='footer__link'>About</p>
            <p className='footer__link'>Courses</p>
            <p className='footer__link'>Instructors</p>
            <p className='footer__link'>Profile</p>
            <p className='footer__link'>Privacy Policy</p>
        </div>
        {/*4th part news letter*/}
        <div >
            <h1 className='footer__heading'>Subscribe Our Newsletter</h1>
        <input type="text" placeholder='Enter Your Email' className='px-6 py-2 rounded-lg outline-none bg-gray-700 w-full text-white'/>
            <button className='px-6 py-2 mt-4 rounded-lg outline-none bg-rose-700 w-full text-white cursor-pointer'>Subscribe</button>
        </div>
      </div>
      <p className='text-center mt-4 text-base text-white/70'>© Copyright 2025 by SLIIT Y3.S2.IT.WD.42</p>
    </div>
  )
}

export default Footer

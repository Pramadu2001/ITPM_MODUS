"use client";
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { HiBars3BottomRight } from 'react-icons/hi2'

// Define props type
type Props = {
    openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => setNavBg(window.scrollY >= 90);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <div className={`fixed ${navBg ? "bg-green-700" : "fixed"} w-full transition-all duration-200 h-[12vh] z-[1000]`}>
            <div className="flex items-center h-full justify-between w-[99%] xl:w-[80%] mx-auto">
                {/* Logo */}
                <Image src="/images/logo.png" alt="Company Logo" width={120} height={100}/>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link key={link.id} href={link.url}>
                            <p className="nav__link">{link.label}</p>
                        </Link>
                    ))}
                </div>

                {/* Buttons & Mobile Menu */}
                <div className="flex items-center space-x-4">
                    <button className="md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-pink-700 hover:bg-pink-900 transition-all duration-200 rounded-lg cursor-pointer">
                        Signup Now
                    </button>
                    <HiBars3BottomRight 
                        onClick={openNav} 
                        className="w-8 h-8 cursor-pointer text-white lg:hidden" 
                        aria-label="Open navigation menu"
                    />
                </div>
            </div>
        </div>
    );
};

export default Nav;


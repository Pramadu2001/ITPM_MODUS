import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

// Define props type
type Props = {
    showNav: boolean;
    closeNav: () => void;
};

function MobileNav({ closeNav, showNav }: Props) {
    const navOpen = showNav ? "translate-x-0" : "-translate-x-full";

    return (
        <div>
            {/* Overlay */}
            <div 
                    onClick={closeNav} 
                    className={`fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-black transition-opacity duration-500 z-[10000] 
                    ${showNav ? "opacity-70" : "opacity-0 pointer-events-none"}`}
/>


            {/* Sidebar Navigation */}
            <div className={`fixed top-0 left-0 h-full w-full sm:w-[60%] bg-indigo-900 text-white transform ${navOpen} transition-transform duration-500 delay-300 flex flex-col justify-center space-y-6 z-[100006]`}>
                {/* Navigation Links */}
                {navLinks.map((link) => (
                    <Link key={link.id} href={link.url}>
                        <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">
                            {link.label}
                        </p>
                    </Link>
                ))}

                {/* Close Button */}
                <CgClose 
                    onClick={closeNav} 
                    className="absolute top-4 right-6 sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-white"
                />
            </div>
        </div>
    );
}

export default MobileNav;


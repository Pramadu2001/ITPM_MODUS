'use client';
import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { HiBars3BottomRight, HiOutlineUserCircle } from 'react-icons/hi2';
import CustomModal from '@/app/utils/CustomModal';
import Login from "../../../Components/Auth/login"
import Signup from "../../../Components/Auth/SignUp";
import Verification from "../../../Components/Auth/Verification";
import { useSelector } from 'react-redux';
import avatar from "../../../public/images/avatar.png";
import { useSession } from 'next-auth/react';
import { useLogOutQuery, useSocialAuthMutation } from '@/redux/features/auth/authApi';
import toast from 'react-hot-toast';

type Props = {
    openNav: () => void;
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem: number;
    setActiveItem: (index: number) => void;
    route: string;
    setRoute: (route: string) => void;
  };

const Nav = ({
  openNav,
  open,
  setOpen,
  activeItem,
  setActiveItem,
  route,
  setRoute
}: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [active,setActive] = useState(false);
  const { user } = useSelector((state: any) => state.auth);
  const { data } = useSession();
  const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();
  const [logout, setLogout] = useState(false);
  const {} = useLogOutQuery(undefined, {
    skip: ! logout ?true : false,
  });

  useEffect(() => {
    if (!user) {
        if (data)
            {socialAuth({
                email: data?.user?.email,
                name: data?.user?.email,
                avatar: data?.user?.image,
            });
        }
    }

    if (data === null) {
        if(isSuccess){
            toast.success("Login Successfully");}
    }
    if (data === null){
        setLogout(true);
    }
  }, [data, user]);

  useEffect(() => {
    const handler = () => setNavBg(window.scrollY >= 90);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className={`fixed ${navBg ? "bg-green-700" : "fixed"} w-full transition-all duration-200 h-[12vh] z-[1000]`}>
      <div className="flex items-center h-full justify-between w-[99%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Image src="/images/logo.png" alt="Company Logo" width={120} height={100} />

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link, index) => (
            <Link key={link.id} href={link.url}>
              <p
                className={`nav__link ${activeItem === index ? 'font-bold underline' : ''}`}
                onClick={() => setActiveItem(index)}
              >
                {link.label}
              </p>
            </Link>
          ))}
        </div>

        {/* Buttons & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button 
            className="md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-pink-700 hover:bg-pink-900 transition-all duration-200 rounded-lg cursor-pointer"
            onClick={() => setOpen(true)}
            >
            Signup Now
          </button>
          <HiBars3BottomRight 
            onClick={openNav} 
            className="w-8 h-8 cursor-pointer text-white lg:hidden" 
            aria-label="Open navigation menu"
          />
        </div>

        {/* Profile Icon */}
        {
          user ? (
            <Link href={"/profile"}>
              <Image
                src={user.avatar ? user.avatar.url : avatar}
                alt=""
                width={30}
                height={30}
                className="w-[30px] h-[30px] rounded-full cursor-pointer"
              />
            </Link>
          ) : (
            <HiOutlineUserCircle
              size={50}
              className='cursor-pointer text-white'
              onClick={() => setOpen(true)}
            />
          )
        }
      </div>
      {/*routes*/}
      {
        route === "Login" && (
            <>
            {
                open && (
                    <CustomModal
                        open={open}
                        setOpen={setOpen}
                        setRoute={setRoute}
                        activeItem={activeItem}
                        component={Login}/>
                )
            }
            </>
        )
      }
      {
        route === "Sign-Up" && (
            <>
            {
                open && (
                    <CustomModal
                        open={open}
                        setOpen={setOpen}
                        setRoute={setRoute}
                        activeItem={activeItem}
                        component={Signup}/>
                )
            }
            </>
        )
      }
      {
        route === "Verification" && (
            <>
            {
                open && (
                    <CustomModal
                        open={open}
                        setOpen={setOpen}
                        setRoute={setRoute}
                        activeItem={activeItem}
                        component={Verification}/>
                )
            }
            </>
        )
      }
    </div>
  );
};

export default Nav;

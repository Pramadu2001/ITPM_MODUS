import Image from 'next/image';
import React, { FC } from 'react';
import avatarDefault from "../../public/images/avatar.png"
import {RiLockPasswordLine} from "react-icons/ri"
import {SiCoursera} from "react-icons/si"
import { AiOutlineLogout } from 'react-icons/ai';
import { MdOutlineAdminPanelSettings } from "react-icons/md";

type Props = {
  user: any;
  active: number;
  avatar: string | null;
  setActive: (active: number) => void;
  logOutHandler: any;

};

const SideBarProfile: FC<Props> = ({ user,active,avatar,setActive,logOutHandler}) => {
  return (
    <div className="w-full">
  <div
    className={`w-full flex items-center px-3 py-4 cursor-pointer ${
      active === 1 ? "bg-slate-800" : "bg-transparent"
    }`}
    onClick={() => setActive(1)}
  >
    <Image
      src={user.avatar || avatar ? user.avatar.url || avatar : avatarDefault}
      alt=""
      width={20}
      height={20}
      className="w-[20px] h-[20px] 800px:w-[30px] 800px:h-[30px] cursor-pointer rounded-full"
    />
    <h4 className="pl-2 hidden md:block font-Poppins text-white">My Account</h4>


  </div>
    {/*second line*/}
  <div
    className={`w-full flex items-center px-3 py-4 cursor-pointer ${
      active === 2 ? "bg-slate-800" : "bg-transparent"
    }`}
    onClick={() => setActive(2)}
  >
    <RiLockPasswordLine size={20} fill="#fff" />
    <h5 className="pl-2 hidden md:block font-Poppins text-white">Change Password</h5>
  </div>


  {/*Third line*/}
  <div
    className={`w-full flex items-center px-3 py-4 cursor-pointer ${
      active === 3 ? "bg-slate-800" : "bg-transparent"
    }`}
    onClick={() => setActive(3)}
  >
    <SiCoursera size={20} fill="#fff" />
    <h5 className="pl-2 hidden md:block font-Poppins text-white">Enrolled Courses</h5>
  </div>


    {/*Fourth line*/}
    {
      user.role === "admin" && (
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
        active === 6 ? "bg-slate-800" : "bg-transparent"}`}
        onClick={() => setActive(6)}
      >
      <MdOutlineAdminPanelSettings  size={20} fill="#fff"/>
      <h5 className="pl-2 hidden md:block font-Poppins text-white">Admin Dashboard</h5>
      </div>
      )
    }


    {/*Fifth line*/}
    <div
      className={`w-full flex items-center px-3 py-4 cursor-pointer ${
        active === 4 ? "bg-slate-800" : "bg-transparent"}`}
        onClick={() => logOutHandler()}
      >
      <AiOutlineLogout size={20} fill="#fff" />
      <h5 className="pl-2 hidden md:block font-Poppins text-white">Log Out</h5>
    </div>
</div>

  );
};

export default SideBarProfile;

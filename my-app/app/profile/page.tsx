"use client";

import React, { FC, useState } from "react";
import Protected from "../hooks/useProtected";
import Nav from "@/Components/Home/Navbar/Nav";
import Profile from "../../Components/Profile/Profile"
import { useSelector } from "react-redux";

type Props = {};


const Page: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  const {user} = useSelector ((state:any) => state.auth)

  const handleOpenNav = () => setOpen(!open);

  return (
    <div>
      <Protected>
        <Nav
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          route={route}
          setRoute={setRoute}
          openNav={handleOpenNav}
        />
        <Profile user={user}/>
      </Protected>
    </div>
  );
};

export default Page;


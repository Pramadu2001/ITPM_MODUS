"use client";
import React, { useState } from 'react';
import MobileNav from './MobileNav';
import Nav from './Nav';

function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false);
  const [open, setOpen] = useState(false); // For modal state in Nav
  const [activeItem, setActiveItem] = useState(0); // For active nav item
  const [route, setRoute] = useState("Login"); // For routing in Nav

  const showNavHandler = () => setShowNav(true);
  const hideNavHandler = () => setShowNav(false);

  return (
    <div>
      <Nav 
        openNav={showNavHandler}
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        route={route}
        setRoute={setRoute}
      />
      <MobileNav showNav={showNav} closeNav={hideNavHandler} />
    </div>
  );
}

export default ResponsiveNav;

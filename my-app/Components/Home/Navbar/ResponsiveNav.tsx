"use client";
import React, { useState } from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'

function ResponsiveNav() {

  const[showNav,setShownNav]=useState(false)

  const showNavHandler = () => setShownNav(true);
  const hideNavHandler = () => setShownNav(false);

  return (
    <div>
        <Nav openNav={showNavHandler} />
        <MobileNav showNav={showNav} closeNav={hideNavHandler} />
    </div>
  )
    
  
}

export default ResponsiveNav

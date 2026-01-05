"use client";

import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

export default function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const hideNavHandler = () => setShowNav(false);
  return(
    <>
      <Nav openNav={showNavHandler} />
      <MobileNav showNav={showNav} closeNav={hideNavHandler} />
    </>
)
}

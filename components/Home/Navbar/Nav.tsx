"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '@/public/images/ChatGPT Image Jan 3, 2026, 11_58_15 AM.png'
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'

// defining props interface
type Props = {
  openNav: () => void;
}

export default function Nav({ openNav }: Props) {

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if(window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  })
  return (
    <div className={`fixed ${navBg?'bg-indigo-700':'fixed'} w-full transition-all duration-200 h-[12vh] z-1000`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
    {/* Logo */}
    <Image src={logo} alt='Logo' width={200} height={120}/>
    {/* Nav Links */}
    <div className='hidden lg:flex items-center space-x-10'>
        {navLinks.map((link) => {
            return (
                <Link key={link.id} href={link.url}>
                    <p className='nav__link'>{link.label}</p>
                </Link>
            )
        })}
    </div>
    {/* Button */}
    <button className='md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-pink-700 hover:bg-pink-900 rounded-lg transition-all duration-200'>
      Signup Now
    </button>
    {/* Burger menu */}
    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 text-white lg:hidden cursor-pointer'/>
      </div>
    </div>
  )
}

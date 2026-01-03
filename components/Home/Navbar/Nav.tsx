import Image from 'next/image'
import React from 'react'
import logo from '@/public/images/ChatGPT Image Jan 3, 2026, 11_58_15 AM.png'
import { navLinks } from '@/constant/constant'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className='fixed w-full transition-all duration-200 h-[12vh] z-1000 bg-blue-700'>
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
      </div>
    </div>
  )
}

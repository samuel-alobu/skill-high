import React from "react";
import logo from "@/public/images/ChatGPT Image Jan 3, 2026, 11_58_15 AM.png";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="pt-20 pb-12 bg-black">
      {/* Define grid */}
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white/20">
        {/* 1st footer part */}
        <div>
          <Image src={logo} alt="Logo" width={100} height={100} />
          <p className="text-white/50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, odio!
          </p>
          {/* Social links */}
          <div className="flex items-center space-x-4 mt-6">
            <FaFacebook className="w-8 h-8 text-blue-600 hover:text-white cursor-pointer transition-colors duration-200" />
            <FaXTwitter className="w-8 h-8 text-gray-600 hover:text-white cursor-pointer transition-colors duration-200" />
            <FaYoutube className="w-8 h-8 text-red-600 hover:text-white cursor-pointer transition-colors duration-200" />
            <FaInstagram className="w-8 h-8 text-pink-600 hover:text-white cursor-pointer transition-colors duration-200" />
          </div>
        </div>
        {/* 2nd footer part */}
        <div>
          <h1 className="footer__heading">Popular</h1>
          <p className="footer__link">Scratch Programming for Beginners</p>
          <p className="footer__link">Advanced Python Programming</p>
          <p className="footer__link">UI/UX Design Fundamentals</p>
          <p className="footer__link">Graphics Design</p>
          <p className="footer__link">Full Stack Web Development</p>
          <p className="footer__link">
            Introduction to AI and Machine Learning
          </p>
        </div>
        {/* 3rd footer part */}
        <div>
          <h1 className="footer__heading">Quick Links</h1>
          <p className="footer__link">Home</p>
          <p className="footer__link">About Us</p>
          <p className="footer__link">Courses</p>
          <p className="footer__link">Instructor</p>
          <p className="footer__link">Profile</p>
          <p className="footer__link">Privacy Policy</p>
        </div>
        {/* Newsletter */}
        <div>
          <h1 className="footer__heading">Subscribe to our Newsletter</h1>
          <input
            type="text"
            placeholder="Enter your email"
            className="px-6 py-2 rounded-lg outline-none bg-gray-700 w-full text-white"
          />
          <button className="px-6 py-2 mt-4 rounded-lg outline-none bg-rose-700 w-full text-white hover:bg-rose-800 transition">
            Subscribe
          </button>
        </div>
      </div>
      <p className="text-white/70 text-center mt-4 text-base">
        Copyright © 2024 Skill-High Kid Academy. All rights reserved.
      </p>
    </div>
  );
}

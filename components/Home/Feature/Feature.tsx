"use client";

import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
import featureImage from "@/public/images/f.png";
import { FaBriefcase } from "react-icons/fa";

export default function Feature() {
  return (
    <div className="pt-16 pb-16">
      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-[80%] mx-auto">
        {/* Image */}
        <Tilt>
          <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
            <Image
              src={featureImage}
              alt="Skill-High Kid Academy learning experience"
              width={1000}
              height={1000}
              priority
            />
          </div>
        </Tilt>

        {/* Text Content */}
        <div>
          {/* Subheading */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center">
              <FaBriefcase className="text-white w-6 h-6" />
            </div>
            <h2 className="text-xl text-black font-semibold">
              Premium, child-friendly learning experience
            </h2>
          </div>

          {/* Main heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold leading-tight xl:leading-[3.9rem] text-gray-800">
            Helping kids learn Coding, AI & Digital Skills — with confidence.
          </h1>

          {/* Block 1 */}
          <div className="mt-8 mb-6">
            <h3 className="text-lg md:text-2xl text-black/70 font-semibold">
              Hands-on projects that make learning stick
            </h3>
            <p className="text-sm md:text-base text-black/70 mt-4">
              We don’t just teach theory — kids build real projects like mini
              games, interactive webpages, simple apps, and fun challenges that
              strengthen problem-solving, creativity, and logical thinking.
            </p>
          </div>

          {/* Block 2 */}
          <div className="mt-8 mb-6">
            <h3 className="text-lg md:text-2xl text-black/70 font-semibold">
              Guided support, clear progress, real results
            </h3>
            <p className="text-sm md:text-base text-black/70 mt-4">
              Our lessons are beginner-friendly and carefully structured. We
              guide each child step-by-step, celebrate milestones, and help them
              gain the confidence to learn independently and keep improving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

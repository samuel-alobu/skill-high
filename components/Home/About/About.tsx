import React from "react";
import { FaArrowRight, FaAward } from "react-icons/fa";

export default function About() {
  return (
    <div className="pt-16 pb-16">
      {/* define grid */}
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* 1st part */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col">
              <FaAward className="text-white w-6 h-6" />
            </div>
            <h1 className="text-xl text-black font-semibold">
              Trusted, structured learning for kids
            </h1>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold leading-tight">
            Future-ready tech skills for children — online and interactive.
          </h1>

          <p className="mt-4 text-gray-600">
            Skill-High Kid Academy helps children build confidence in coding,
            digital creativity, and problem-solving through fun, hands-on
            projects. Our sessions are beginner-friendly, guided step-by-step,
            and designed to turn curious kids into confident creators.
          </p>

          <button className="flex items-center space-x-2 px-8 py-3 mt-8 hover:bg-gray-700 transition-all duration-200 bg-black text-white rounded-3xl">
            <span>Explore Our Programmes</span>
            <FaArrowRight />
          </button>
        </div>
        {/* 2nd part */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <div>
            <h1 className="text-7xl lg:text-9xl font-bold text-black/5">01</h1>
            <div className="-mt-10">
              <h1 className="text-xl md:text-2xl mb-3 text-black/70 font-bold">
                Flexible schedule
              </h1>
              <p className="w-[90%] lg:w-[70%] text-base text-black/70">
                Weekend-friendly classes that fit around school and family time.
                Children learn at a comfortable pace with clear milestones,
                support, and consistent progress.
              </p>
            </div>
          </div>

          <div className="mt-8 w-full">
            <h1 className="text-7xl lg:text-9xl font-bold text-black/5">02</h1>
            <div className="-mt-10">
              <h1 className="text-xl md:text-2xl mb-3 text-black/70 font-bold">
                Great value for parents
              </h1>
              <p className="w-[90%] lg:w-[70%] text-base text-black/60">
                Affordable, high-quality training with practical outcomes — kids
                build real projects, earn confidence, and develop skills that
                grow with them in today’s digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

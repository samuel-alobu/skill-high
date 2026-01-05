import React from "react";

export default function HeroContent() {
  return (
    <div>
        {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-12 lg:leading[3.5rem] xl:leading-16 text-white">
        Practical Tech Education for the Next Generation.
      </h1>
      {/* Description */}
      <p className="mt-6 text-sm md:text-base text-white/60">
        We provide structured, age-appropriate tech training that builds logical
        thinking, creativity, and digital confidence in children!
      </p>
      {/* Buttons */}
      <div className="mt-8 flex items-center space-x-4">
      <button className="button__cls bg-green-700 hover:bg-green-900">
        Get Started
      </button>
      <button className="button__cls bg-yellow-700 hover:bg-yellow-900">
        Learn More
      </button>
      </div>
      {/* Stats */}
      <div className="flex items-center flex-wrap space-x-16 mt-8">
        <div>
            <p className="md:text-xl lg:text-2xl text-base text-white font-bold">260+</p>
            <p className="w-25 h-0.75 bg-green-600 mt-2 mb-2 rounded-lg"></p>
            <p className="md:text-lg text-sm text-white/70">Tutors</p>
        </div>
        <div>
            <p className="md:text-xl lg:text-2xl text-base text-white font-bold">2,260+</p>
            <p className="w-25 h-0.75 bg-blue-600 mt-2 mb-2 rounded-lg"></p>
            <p className="md:text-lg text-sm text-white/70">Students</p>
        </div>
        <div>
            <p className="md:text-xl lg:text-2xl text-base text-white font-bold">60+</p>
            <p className="w-25 h-0.75 bg-pink-600 mt-2 mb-2 rounded-lg"></p>
            <p className="md:text-lg text-sm text-white/70">Courses</p>
        </div>
      </div>
    </div>
  );
}

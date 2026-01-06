import Slider from "@/components/Helper/Slider";
import React from "react";
import { BsQuote } from "react-icons/bs";

export default function Review() {
  return (
    <section className="pt-20 pb-16 bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-3 items-center gap-20">
        {/* Text content */}
        <div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center">
              <BsQuote className="text-white w-6 h-6" />
            </div>
            <h2 className="text-xl text-white font-semibold">
              Parents & learners feedback
            </h2>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-5xl mt-8 font-bold xl:leading-[3.6rem] text-white">
            Trusted by parents. Loved by young learners.
          </h1>

          {/* Description */}
          <p className="text-base text-white/60 mt-6">
            Families choose Skill-High Kid Academy because we make learning
            technology simple, engaging, and confidence-building. Our students
            don’t just watch tutorials — they create, experiment, and grow.
          </p>

          {/* Info */}
          <div className="flex items-center space-x-10 mt-8">
            <p className="text-white font-bold text-5xl">95%</p>
            <p className="text-white/80 leading-snug">
              Learners complete their courses <br /> with confidence and real
              skills
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="xl:col-span-2 bg-white rounded-lg overflow-hidden">
         <Slider />
        </div>
      </div>
    </section>
  );
}

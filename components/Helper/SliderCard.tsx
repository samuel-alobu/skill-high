import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

// define props type
type Props = {
  image: string;
  name: string;
  role: string;
};

export default function SliderCard({ image, name, role }: Props) {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center space-x-10">
      <div className="w-full h-full">
        <Image
          src={image}
          alt={name}
          width={350}
          height={350}
          className="w-full h-full"
        />
      </div>
      <div className="mt-6 mb-7">
        <div className="flex items-center">
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600" />
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600" />
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600" />
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600" />
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600" />
        </div>
        <p className="mt-6 text-gray-800/65 w-[95%] md:w-[80%] text-xs md:text-sm lg:text-base font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          recusandae adipisci, illum saepe doloribus iste veniam quasi cum
          perspiciatis quam iure laboriosam et autem nobis!
        </p>
        <div className="mt-7">
            <h1 className="text-xl font-semibold text-black">{name}</h1>
            <p  className="text-lg text-black/60">{role}</p>
        </div>
      </div>
    </div>
  );
}

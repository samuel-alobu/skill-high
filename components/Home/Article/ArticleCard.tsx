import Image from "next/image";
import React from "react";
import { BiHeart } from "react-icons/bi";

// Define the Props type
type Props = {
  article: {
    id: number;
    userImage: string;
    username: string;
    reaction: number;
    coverImage: string;
    title: string;
  };
};

export default function ArticleCard({ article }: Props) {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* Cover Image */}
      <Image
        src={`${article.coverImage}`}
        alt={article.title}
        width={300}
        height={300}
        className="w-full h-full"
      />

      <div className="p-5">
        {/* Author and reactions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src={article.userImage}
              alt={article.username}
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-base text-black/70">{article.username}</p>
          </div>
          <div className="flex items-center space-x-2">
            <BiHeart className="text-red-600" />
            <span className="text-sm text-black/70">{article.reaction}</span>
          </div>
        </div>
        {/* Heading */}
        <h1 className="mt-4 mb-4 text-xl font-semibold">{article.title}</h1>
        <p className="text-base text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia natus
          officiis omnis consectetur reiciendis. Accusantium illo nisi numquam
          atque quis.
        </p>
        <button className="mt-4 mb-3 hover:text-green-600 text-lg text-black font-bold underline">Learn More</button>
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import { Star, Rocket, Palette } from "lucide-react";
import FadeInDiv from "../fade-in-div";

const FirstIntro = () => {
  return (
    <div className="relative text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16 relative flex flex-col md:flex-row items-center md:items-center md:justify-between">
        {/* Image Section */}
        <FadeInDiv className="w-full md:w-1/2 lg:w-[55%] mb-8 md:mb-0">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg"
              alt="Space-Inspired Room"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </FadeInDiv>

        {/* Text Section */}
        <FadeInDiv className="w-full md:w-1/2 lg:w-[40%] text-left space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4 flex items-center">
            <Rocket className="mr-3 text-blue-400" size={36} />
            Space Interiors
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            Transform your living space into a cosmic sanctuary where
            imagination meets innovation. Our space-inspired design philosophy
            blends cutting-edge aesthetics with the boundless wonder of the
            universe.
          </p>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-gray-800/50 p-4 rounded-xl hover:bg-gray-700/50 transition">
              <Star className="mx-auto mb-2 text-blue-400" size={24} />
              <span className="text-sm text-gray-300">Stellar Design</span>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-xl hover:bg-gray-700/50 transition">
              <Rocket className="mx-auto mb-2 text-purple-400" size={24} />
              <span className="text-sm text-gray-300">Modern Concept</span>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-xl hover:bg-gray-700/50 transition">
              <Palette className="mx-auto mb-2 text-teal-400" size={24} />
              <span className="text-sm text-gray-300">Unique Style</span>
            </div>
          </div>
        </FadeInDiv>
      </div>
    </div>
  );
};

export default FirstIntro;

import Image from "next/image";
import React from "react";
import FadeInDiv from "../fade-in-div";

const FirstIntro = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between p-4">
      <FadeInDiv className="w-full md:w-1/2 lg:w-[60%]">
        <Image
          src="https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg"
          alt="Space-Inspired Room"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover rounded-lg"
        />
      </FadeInDiv>

      <FadeInDiv className="mt-4 md:mt-0 md:ml-4 w-full md:w-1/2 lg:w-[40%] text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Welcome to Space Interior Decorations
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-lg">
          {`  Welcome to the future of interior design with Space-Inspired Decor!
          Imagine transforming your room into a cosmic haven where modern
          aesthetics meet the mysteries of the universe. Whether you're drawn to
          the sleek, metallic lines of a space station, the ambient glow of
          celestial lights, or the breathtaking beauty of galaxy-inspired color
          schemes, space-themed decor brings an unparalleled sense of wonder and
          sophistication to any environment. Explore ideas for furnishings,
          lighting, and artwork that turn your living space into a visionary
          escape, blending the intrigue of science fiction with the elegance of
          contemporary design. Dive into the cosmos and redefine your interior
          with a touch of the stars.`}
        </p>
      </FadeInDiv>
    </div>
  );
};

export default FirstIntro;

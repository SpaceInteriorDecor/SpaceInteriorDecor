"use client";
import React from "react";
import FadeInDiv from "../fade-in-div";
import FadeInHeader from "../fade-in-header";
import LogoImage from "../logo-image";

const LightIntro = () => {
  return (
    <div className="relative flex max-h-[100vh] flex-col items-center justify-center overflow-hidden w-full rounded-md z-0 mb-[10rem]">
      {" "}
      <div className="py-[2rem] mt-8">
        {/* Logo Image */}

        <FadeInDiv className="flex justify-center">
          <LogoImage width={200} height={200} />
        </FadeInDiv>

        <FadeInHeader className="bg-gradient-to-br from-slate-500 to-black bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl p-0">
          Space Interior Decorations <br />
          <span className="text-slate-950 text-2xl">
            The Future of Interior Design
          </span>
        </FadeInHeader>
      </div>
    </div>
  );
};

export default LightIntro;

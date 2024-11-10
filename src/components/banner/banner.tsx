"use client";
import React from "react";
import { Lamp } from "./lamp";
import { useTheme } from "next-themes";
import LightIntro from "./light-intro";
import FirstIntro from "./first-intro";

const Banner = () => {
  const { theme } = useTheme();

  const comp = React.useMemo(() => {
    if (theme === "light") {
      return <LightIntro />;
    }
    return <Lamp />;
  }, [theme]);

  return (
    <div className="z-0 mt-[3.2rem]">
      <>{comp}</>

      <FirstIntro />
    </div>
  );
};

export default Banner;

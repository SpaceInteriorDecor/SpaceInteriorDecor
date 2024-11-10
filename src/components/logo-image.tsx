"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

type Props = {
  width: number;
  height: number;
};
const LogoImage = ({ width, height }: Props) => {
  const { theme } = useTheme();
  return (
    <Image
      src={theme === "light" ? "/logo-dark.png" : "/logo.png"}
      alt="Logo"
      width={width}
      height={height}
    />
  );
};

export default LogoImage;

import React from "react";
import FadeInDiv from "../fade-in-div";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {
  title?: string;
  imgSrc: string;
  className?: string;
  onClick?: () => void;
};

const Card = ({ title, imgSrc, onClick, className }: Props) => {
  return (
    <FadeInDiv delay={0.5} className={`${className}`}>
      <motion.div
        whileHover={{
          scale: 1.08,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className="height-72 w-72 cursor-pointer"
      >
        <Image
          src={imgSrc}
          alt="Space-Inspired Room"
          width={200}
          height={300}
          className="rounded-lg"
        />
        <p className="mt-2">{title}</p>
      </motion.div>
    </FadeInDiv>
  );
};

export default Card;

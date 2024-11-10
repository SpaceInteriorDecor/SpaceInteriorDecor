import React from "react";
import FadeInDiv from "../fade-in-div";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {
  title: string;
};

const Card = ({ title }: Props) => {
  return (
    <FadeInDiv delay={0.5}>
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Image
          src="https://cdn.pixabay.com/photo/2016/11/22/19/11/brick-wall-1850095_960_720.jpg"
          alt="Space-Inspired Room"
          width={200}
          height={300}
          className="rounded-lg"
        />
        {title}
      </motion.div>
    </FadeInDiv>
  );
};

export default Card;

import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const FadeInHeader = ({ children, className }: Props) => {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={className}
      >
        {children}
      </motion.h1>
    </div>
  );
};

export default FadeInHeader;

import React from "react";
import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const FadeInDiv = ({ children, className, delay = 0.3 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInDiv;

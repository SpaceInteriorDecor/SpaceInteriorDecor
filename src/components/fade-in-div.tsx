import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const FadeInDiv = ({ children, className, delay = 0.3 }: Props) => {
  const [isInitialRender, setIsInitialRender] = useState(true);
  useEffect(() => {
    // Set isInitialRender to false after the first render
    setIsInitialRender(false);
  }, []);
  return (
    <motion.div
      initial={isInitialRender ? { opacity: 0.5, y: 100 } : ""}
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

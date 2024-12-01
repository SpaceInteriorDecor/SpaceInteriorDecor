import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const FadeInHeader = ({ children, className }: Props) => {
  const [isInitialRender, setIsInitialRender] = useState(true);
  useEffect(() => {
    // Set isInitialRender to false after the first render
    setIsInitialRender(false);
  }, []);
  return (
    <div>
      <motion.h1
        initial={isInitialRender ? { opacity: 0.5, y: 100 } : ""}
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

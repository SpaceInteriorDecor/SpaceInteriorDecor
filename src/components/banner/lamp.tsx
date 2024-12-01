"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import FadeInHeader from "../fade-in-header";
import FadeInDiv from "../fade-in-div";
import LogoImage from "../logo-image";
import { Stars, Rocket, PanelTop } from "lucide-react";

export function Lamp() {
  return (
    <LampContainer>
      <div className="py-[10rem] mt-8 space-y-8">
        {/* Logo with Animated Hover Effect */}
        <FadeInDiv className="flex justify-center group">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="rounded-full p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm"
          >
            <LogoImage
              width={200}
              height={200}
              //@ts-ignore
              className="group-hover:brightness-110 transition-all duration-300"
            />
          </motion.div>
        </FadeInDiv>

        {/* Animated Header with Dynamic Text */}
        <FadeInHeader className="text-center text-4xl font-bold tracking-tight md:text-7xl p-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Space Interior Decorations
          </motion.div>
          <motion.span
            className="block text-slate-400 text-2xl mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            The Future of Interior Design
          </motion.span>
        </FadeInHeader>

        {/* Feature Icons */}
        <div className="flex justify-center space-x-8 mt-8">
          {[
            {
              Icon: Stars,
              color: "text-cyan-400",
              label: "Cosmic Inspiration",
              description: "Celestial design concepts",
            },
            {
              Icon: Rocket,
              color: "text-purple-400",
              label: "Innovative Spaces",
              description: "Futuristic interior solutions",
            },
            {
              Icon: PanelTop,
              color: "text-blue-400",
              label: "Modern Aesthetics",
              description: "Sleek, minimalist designs",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.2,
              }}
              whileHover={{ scale: 1.1 }}
              className="text-center group"
            >
              <div
                className={`
                ${feature.color} bg-white/10 backdrop-blur-sm 
                p-4 rounded-full mb-2 group-hover:bg-white/20 
                transition-all duration-300 flex items-center 
                justify-center mx-auto w-16 h-16
              `}
              >
                <feature.Icon size={32} />
              </div>
              <p className="text-white/80 text-sm group-hover:text-white transition-colors">
                {feature.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[10vh] flex-col items-center justify-center overflow-hidden w-full rounded-md z-0 mb-[10rem]",
        className
      )}
    >
      {/* Previous complex motion and gradient divs remain the same */}
      <div className="relative z-50 flex -translate-y-40 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

"use client";

import React from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const BusinessCard = () => {
  const imageUrl = "/images/space-interiors-card.jpg";
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "space-interiors-card.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="p-6 bg-gray-900/60 backdrop-blur-lg border border-cyan-500/20 rounded-3xl shadow-2xl">
        <motion.div
          className="relative cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {/* Replace with your actual business card image */}
          <img
            src={imageUrl}
            alt="Space Interiors Business Card"
            className="w-full h-auto rounded-lg shadow-lg"
          />

          <motion.div
            className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={handleDownload}
              variant="ghost"
              className="text-white hover:bg-cyan-500/20"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Card
            </Button>
          </motion.div>
        </motion.div>

        <p className="text-gray-400 text-sm text-center mt-4">
          Click to download our business card
        </p>
      </div>
    </motion.div>
  );
};

export default BusinessCard;

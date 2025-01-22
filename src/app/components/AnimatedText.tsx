"use client";

import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedGradientText() {
  const [gradient, setGradient] = useState(
    "linear(to-r, orange.400, orange.500, orange.600, orange.700)"
  );

  useEffect(() => {
    const gradients = [
      "linear(to-r, orange.300, orange.400, orange.500, orange.600)",
      "linear(to-r, orange.400, orange.500, orange.600, orange.700)",
      "linear(to-r, orange.500, orange.600, orange.700, orange.800)",
    ];
    let index = 0;

    const interval = setInterval(() => {
      setGradient(gradients[index]);
      index = (index + 1) % gradients.length;
    }, 2000); // Changes gradient every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    
      <motion.div
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{display:"inline"}}
      >
        <Text
          fontSize="60px"
          fontWeight={400}
          bgGradient={gradient}
          bgClip="text"
          style={{display:"inline"}}
        >
          {" "}pop-ups!
        </Text>
      </motion.div>
    
  );
}

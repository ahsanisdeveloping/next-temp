"use client";

import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      onComplete(); // Notify parent that preloader is finished
    }, 3000); // Adjust to the duration of your animation

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    isVisible && (
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        bg="black"
        display="flex"
        justifyContent="center"
        alignItems="center"
        zIndex="9999"
      >
        {/* Replace with your actual logo animation video */}
        <video src='/logoanimatelight.mp4' autoPlay muted onEnded={() => setIsVisible(false)} />
      </Box>
    )
  );
}

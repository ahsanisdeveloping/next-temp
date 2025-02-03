"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }} // Smooth fade-out with slight scale
          transition={{ duration: 1 }} // Duration of the transition
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          {/* Replace with your actual logo animation video */}
          <video
            src="/landingpage/logoanimatelight.mp4"
            autoPlay
            muted
            onEnded={() => setIsVisible(false)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

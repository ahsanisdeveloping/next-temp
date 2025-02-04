"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      onComplete(); // Notify parent that preloader is finished
    }, 3000); // Adjust duration as needed

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }} // Smooth fade-out with slight scale
          transition={{ duration: 1 }} // Smooth transition
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "white", // ✅ Fix black borders
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            overflow: "hidden", // ✅ Prevents any overflow issue
          }}
        >
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <video
              src="/landingpage/logoanimatelight.mp4"
              autoPlay
              muted
              onEnded={() => setIsVisible(false)}
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "100vw", // ✅ Ensures it does NOT overflow on mobile
                maxHeight: "100vh", // ✅ Keeps it inside the screen
                objectFit: "contain", // ✅ Prevents cutting off the video
                backgroundColor: "white",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

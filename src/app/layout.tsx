"use client";

import { useEffect, useState } from "react";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Preloader from "../app/components/Preloader"; // Import Preloader Component

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only run on client-side
      const hasVisited = sessionStorage.getItem("hasVisited");

      if (!hasVisited) {
        sessionStorage.setItem("hasVisited", "true"); // Mark the session
        setShowContent(false); // Show preloader
      } else {
        setShowContent(true); // Skip preloader if visited before
      }
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          {!showContent ? (
            <Preloader onComplete={() => setShowContent(true)} />
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }} // Smooth fade-in transition
            >
              {children}
            </motion.div>
          )}
        </ChakraProvider>
      </body>
    </html>
  );
}

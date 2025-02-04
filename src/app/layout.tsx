"use client";

import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
  return (
    <html lang="en">
      <head>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }} // Smooth fade-in transition
          >
            {children}
          </motion.div>
        </ChakraProvider>
      </body>
    </html>
  );
}

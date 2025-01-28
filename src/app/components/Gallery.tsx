"use client";

import { Box, SimpleGrid, Image, useBreakpointValue,useColorMode } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

const lightImages = [
  "/landingpage/grid1.png",
  "/landingpage/grid1.png",
  "/landingpage/grid2.png",
  "/landingpage/grid3.png",
  "/landingpage/grid4.png",
  "/landingpage/gridlight.png",
  "/landingpage/grid6.png",
  "/landingpage/grid7.png",
  "/landingpage/grid8.png",
  "/landingpage/grid9.png",
];
const darkImages = [
  "/landingpage/grid1.png",
  "/landingpage/grid1.png",
  "/landingpage/grid2.png",
  "/landingpage/grid3.png",
  "/landingpage/grid4.png",
  "/landingpage/griddark.png",
  "/landingpage/grid6.png",
  "/landingpage/grid7.png",
  "/landingpage/grid8.png",
  "/landingpage/grid9.png",
];

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {colorMode } = useColorMode()
  const images = colorMode == "dark"?darkImages:lightImages
  // Responsive column count while ensuring max 3 rows
  const gridColumns = useBreakpointValue({
    base: 2, // 2 columns on small screens
    sm: 2, // 3 columns on tablets
    md: 3, // 4 columns on medium screens
    lg: 4, // 6 columns on large screens
    xl: 5, // 7 columns on extra-large screens
  });

  // Ensure a maximum of 3 rows, calculating total items dynamically
  const maxRows = 2;
  const maxItems = gridColumns ? gridColumns * maxRows : images.length; // Limits number of images

  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollOffset = window.scrollY * 0.05; // Smooth effect

        if (isMobile) {
          // Move grid up/down on scroll for mobile
          containerRef.current.style.transform = `translateY(${scrollOffset}px) scale(1.05)`;
        } else {
          // Move grid left/right for larger screens
          containerRef.current.style.transform = `translateX(${scrollOffset}px) scale(1.05)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <Box ref={containerRef} px={4}  overflow="hidden">
      <SimpleGrid
        columns={gridColumns}
        spacing={4}
        alignItems="center"
        justifyContent="center"
        gridAutoRows="minmax(150px, auto)" // Ensures uniform row height
      >
        {images.slice(0, maxItems).map((image, index) => (
          <Box key={index} maxW="100%" overflow="hidden">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              borderRadius="md"
              width="100%" // Make images responsive
              height={["300px","300px","230px","230px","250px"]}
              // height="auto"
              objectFit="cover"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Gallery;

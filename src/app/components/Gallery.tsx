"use client";

import { Box, SimpleGrid, Image, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

const lightImages = [
  "/landingpage/gridlight.png",
  "/landingpage/grid1.png",
  "/landingpage/grid2.png",
  "/landingpage/grid3.png",
  "/landingpage/grid4.png",
  "/landingpage/grid5.png",
  "/landingpage/grid6.png",
  "/landingpage/grid7.png",
  "/landingpage/grid8.png",
  "/landingpage/grid9.png",
];
const darkImages = [
  "/landingpage/griddark.png",
  "/landingpage/grid1.png",
  "/landingpage/grid2.png",
  "/landingpage/grid3.png",
  "/landingpage/grid4.png",
  "/landingpage/grid5.png",
  "/landingpage/grid6.png",
  "/landingpage/grid7.png",
  "/landingpage/grid8.png",
  "/landingpage/grid9.png",
];

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { colorMode } = useColorMode();
  const images = colorMode === "dark" ? darkImages : lightImages;

  // Responsive column count while ensuring max 3 rows
  const gridColumns = useBreakpointValue({
    base: 2,  // 2 columns on small screens
    sm: 2,    // 2 columns on tablets
    md: 3,    // 3 columns on medium screens
    lg: 4,    // 4 columns on large screens
    xl: 5,    // 5 columns on extra-large screens
  });

  // Adjust image heights for different screens
  const imageHeight = useBreakpointValue({
    base: "150px",  // Smaller height for mobile
    sm: "200px",
    md: "250px",    // Medium height for tablets
    lg: "280px",    // Larger height for desktops
    xl: "300px",    // Maximum height
  });

  // Ensure a maximum of 3 rows, calculating total items dynamically
  const maxRows = 2;
  const maxItems = gridColumns ? gridColumns * maxRows : images.length; // Limits number of images

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollOffset = window.scrollY * 0.05; // Smooth effect

        if (window.innerWidth < 768) {
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
  }, []);

  return (
    <Box ref={containerRef} px={{ base: 2, md: 4 }} overflow="hidden">
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
              height={imageHeight}
              objectFit="cover"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Gallery;

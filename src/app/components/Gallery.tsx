import { Box, SimpleGrid, Image, useBreakpointValue } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';

const images = [
    '/grid1.webp',
    '/grid2.webp',
    '/grid3.webp',
    '/grid4.webp',
    '/grid5.webp',
    '/grid6.webp',
    '/grid7.webp',
    '/grid8.webp',
  ];

const Gallery = () => {
  const containerRef = useRef(null);

  const gridColumns = useBreakpointValue({
    base: 1,
    md: 3,
    lg: 4,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${window.scrollY * 0.1}px) scale(1.1)`; // Increased scroll speed and zoom
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box ref={containerRef} >
      <SimpleGrid columns={gridColumns} spacing={4} style={
        {
          position:"relative",
          right:"50px"
        }
      }>
        {images.map((image, index) => (
          <Box key={index} >
            <Image src={image} alt={`Image ${index + 1}`} borderRadius="md" />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Gallery;
import { Box, SimpleGrid, Image, useBreakpointValue } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';

const images = [
    '/landingpage/grid7.png',
    '/landingpage/grid9.png',
    '/landingpage/grid10.png',
    '/landingpage/grid1.png',
    '/landingpage/grid2.png',
    '/landingpage/grid3.png',
    '/landingpage/grid4.png',
    '/landingpage/grid1.png',
    '/landingpage/grid2.png',
    '/landingpage/grid8.png',
    '/landingpage/grid6.png',
    '/landingpage/grid7.png',
    '/landingpage/grid9.png',
    '/landingpage/grid10.png',
    '/landingpage/grid1.png',
    '/landingpage/grid2.png',
    '/landingpage/grid11.png',
    '/landingpage/grid12.png',
    '/landingpage/grid4.png',
    '/landingpage/grid5.png',
    '/landingpage/grid6.png',
  ];

const Gallery = () => {
  const containerRef = useRef(null);

  const gridColumns = useBreakpointValue({
    base: 1,
    md: 3,
    lg: 7,
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
          <Box key={index} height={200} width={200}>
            <Image src={image} alt={`Image ${index + 1}`} borderRadius="md" />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Gallery;
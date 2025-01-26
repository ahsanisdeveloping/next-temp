"use client";

import { Box, Image, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const LandingMap = () => {
  const MotionBox = motion(Box);

  // 🌙 Dark Mode Support
  const bg = useColorModeValue("white", "gray.900");

  return (
    <Box bg={bg} py={16} display="flex" flexDirection="column" alignItems="center">
      <MotionBox
        textAlign="center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        width="100%"
        maxW="1200px"
      >
        {/* Orange Glow Background */}
        <Box display="flex" justifyContent="center" position="relative">
          <Image
            src="/landingpage/orangeglow.png"
            alt="Orange Glow"
            width={["100%", "90%", "800px", "1000px"]}
            maxW="100%"
            objectFit="contain"
            opacity={useColorModeValue(1, 0.8)}
            position="absolute"
            top="-50px"
            zIndex={-1}
          />
        </Box>

        {/* Map Image with 16:9 Aspect Ratio on Mobile */}
        <Box display="flex" justifyContent="center">
          <Box width={["100%", "80%", "900px", "1100px"]} position="relative">
            <Box
              position="relative"
              pt="56.25%" // 16:9 Aspect Ratio (Height = 56.25% of width)
              overflow="hidden"
              borderRadius="lg"
              boxShadow="lg"
            >
              <Image
                src="/landingpage/bannermap.jpg"
                alt="Map"
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>
          </Box>
        </Box>
      </MotionBox>
    </Box>
  );
};

export default LandingMap;

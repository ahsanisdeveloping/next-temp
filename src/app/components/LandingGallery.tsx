"use client";

import { Box, Image, Text, Button, useColorModeValue } from "@chakra-ui/react";
import Gallery from "./Gallery";

const LandingGallery = () => {
  // 🌙 Dark Mode Colors
  const bg = useColorModeValue("white", "gray.900"); // Light / Dark Background
  const textColor = useColorModeValue("black", "whiteAlpha.900"); // Text Color
  const secondaryText = useColorModeValue("gray.600", "gray.400"); // Subtext color

  const topLeftImage = useColorModeValue("/landingpage/topleftwhite.png", "/landingpage/topleftblack.png"); // Dynamic image change

  return (
    <Box position="relative" overflow="hidden" width="100%" bg={bg} py={20}>
      {/* Background Gradient */}
      <Box position="absolute" height="100%" width="100%" zIndex={1} />

      {/* Background Shape */}
      <Box
        position="absolute"
        height="50%"
        width="50%"
        zIndex={1}
        borderRadius="100%"
        left="-100px"
        top="50px"
      />

      {/* Gallery (Behind Everything) */}
      <Box position="relative" left="-50px" zIndex={0}>
        <Gallery />
      </Box>

      {/* Overlay Image (Switches between `topleftwhite` and `topleftblack`) */}
      <Box position="absolute" zIndex={2} top={0} left={0}>
        <Image src={topLeftImage} alt="Top Left Overlay" />
      </Box>
      <Box position="absolute" zIndex={2} top={0} left={0}>
        <Image src={topLeftImage} alt="Top Left Overlay" />
      </Box>
      <Box position="absolute" zIndex={2} top={0} left={0}>
        <Image src={topLeftImage} alt="Top Left Overlay" />
      </Box>

      {/* Text Content (Above Gallery) */}
      <Box position="absolute" zIndex={3} left={["10px", "2rem"]} top={["20px", "50px"]} width={["90%", "400px"]} py={10}>
        <Text fontSize={["18px", "20px"]} fontWeight={500} color={textColor}>
          Popin is the real-time advertising platform for pop-up businesses. It empowers owners to create a flexible business profile, share their location effortlessly, and connect with customers instantly.
        </Text>
        <br />
        <Text fontSize={["18px", "20px"]} fontWeight={500} color={secondaryText}>
          For consumers, it’s the easiest way to discover what’s happening right now—unique experiences, nearby and in the moment.
        </Text>
        <br />
        <Button
          bgGradient="linear(to-r, #ff7e47, #fb6d6f)"
          marginTop={2}
          textColor="white"
          px={6}
          py={3}
          fontSize="lg"
          fontWeight="bold"
          borderRadius="md"
          transition="all 0.3s ease-in-out"
          _hover={{
            bgGradient: "linear(to-r, #fb6d6f, #ff7e47)",
            transform: "scale(1.05)",
            boxShadow: "0px 4px 15px rgba(255, 126, 71, 0.4)",
          }}
          _active={{
            transform: "scale(0.98)",
          }}
        >
          Browse Popins
        </Button>
      </Box>
    </Box>
  );
};

export default LandingGallery;

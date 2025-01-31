"use client";

import {
  Box,
  Image,
  Text,
  Button,
  useColorModeValue,
  UnorderedList,
  ListItem,
  Link
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Gallery from "./Gallery";

// Framer Motion Wrapper
const MotionBox = motion(Box);

const LandingGallery = () => {
  // 🌙 Dark Mode Colors
  const bg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("black", "whiteAlpha.900");
  const secondaryText = useColorModeValue("gray.600", "gray.400");
  const gradientText = useColorModeValue(
    "linear(to-r, #ff7e47, #fb6d6f)",
    "linear(to-r, #ff9e7a, #fc8c8e)"
  );
  const topLeftImage = useColorModeValue(
    "/landingpage/topleftwhite.png",
    "/landingpage/topleftblack.png"
  );

  return (
    <MotionBox 
      position="relative"
      overflow="hidden"
      width="100%"
      bg={bg}
      py={20}

      // 🔥 Scroll Reveal Animation
      initial={{ opacity: 0, y: -50 }}  // Start hidden & slightly above
      whileInView={{ opacity: 1, y: 0 }}  // Reveal when in viewport
      transition={{ duration: 3, ease: "easeOut" }}  // Smooth effect
      viewport={{ once: true }}  // Runs only once when in view
    >
      
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
      <MotionBox position="relative" left="-50px" zIndex={0} initial={{ opacity: 0, y: -50 }}  // Start hidden & slightly above
      whileInView={{ opacity: 1, y: 0 }}  // Reveal when in viewport
      transition={{ duration: 3, ease: "easeOut" }}  // Smooth effect
      viewport={{ once: true }} >
        <Gallery />
      </MotionBox>

      {/* Overlay Image (Switches between topleftwhite and topleftblack) */}
      <Box position="absolute" zIndex={2} top={0} left={0}>
        <Image src={topLeftImage} alt="Top Left Overlay" />
      </Box>
      <Box position="absolute" zIndex={2} top={0} left={0}>
        <Image src={topLeftImage} alt="Top Left Overlay" />
      </Box>
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
      <Box
        position="absolute"
        zIndex={3}
        left={["10px", "2rem"]}
        top={["20px", "50px"]}
        width={["90%", "400px"]}
        py={10}
      >
        <Text
          fontSize={["18px", "30px"]}
          fontWeight={700}
          bgGradient={gradientText}
          bgClip="text"
        >
          Where Pop-ups and People Connect
        </Text>
        <br />
        <Text
          fontSize={["18px", "20px"]}
          fontWeight={500}
          color={secondaryText}
        >
          Popin is the go-to platform for discovering and sharing pop-ups and
          local experiences.
        </Text>
        <UnorderedList my={2}>
          <ListItem>
            <strong>For Pop-ups and Entrepreneurs:</strong> Easily <Link color="#ff7e47"
              fontWeight="bold"
              textDecoration="none"
              _hover={{
                textDecoration: "underline",
              }}>create a dynamic profile</Link>, share your location, and connect with customers in real time.
          </ListItem>
          <ListItem>
            <strong>For Consumers:</strong> Effortlessly <Link color="#ff7e47"
              fontWeight="bold"
              textDecoration="none"
              _hover={{
                textDecoration: "underline",
              }}>find the latest pop-ups</Link> and unique experiences nearby, tailored to your preferences and goals.
          </ListItem>
        </UnorderedList>
        <br />
        <Button
          bgGradient="linear(to-r, #ff7e47, #fb6d6f)"
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
          Access Popin
        </Button>
      </Box>
      
    </MotionBox>
  );
};

export default LandingGallery;
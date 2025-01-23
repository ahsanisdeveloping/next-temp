"use client";
import {
  Box,
  ChakraProvider,
  extendTheme,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import GradientText from "../components/Text";
import AnimatedGradientText from "../components/AnimatedText";

// Custom theme for smooth animations
const theme = extendTheme({
  styles: {
    global: {
      body: {
        transition: "background 0.5s ease-in-out",
      },
    },
  },
});

// Motion Wrapper
const MotionBox = motion(Box);

export default function LandingComponent() {
 
  const ownerText = "Be found by customers seeking experiences and local";
  const customerText = "Discover unique experiences and uncover amazing";

  const [introText, setIntroText] = useState("Discover unique experiences and uncover amazing");

  useEffect(() => {
    const texts = [ownerText, customerText];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length; // Toggle between 0 and 1
      setIntroText(texts[index]);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box
        transition="background 10s ease"
        background="white"
      >
        {/* Animated Section 1 */}
        <MotionBox
          p="80px 200px"
          textAlign="center"
          fontSize="60px"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          after={{ opacity: 0, x: 50, scale: 0 }}
          transition={{ duration: 1 }}
        >
          <Heading
            as="h6"
            fontWeight={500}
            lineHeight={0.5}
            size="60px"
            color="black"
            textAlign="center"
            width={["100%", "100%"]}
            mx="auto"
            style={{display:"inline"}}
          >
           {introText}
           <Text
          fontSize="60px"
          fontWeight={500}
          bgGradient="linear(to-r, #ff7e47, #fb6d6f)" bgClip="text"
          style={{display:"inline"}}
        >
          {" "}pop-ups!
        </Text>

            <Text
              fontWeight={450}
              fontWeight="bold"
              bgGradient="linear(to-r, orange.400, orange.500, orange.600, orange.700)"
              bgClip="text"
            >
            </Text>
          </Heading>

          <Text
            fontSize="23px"
            paddingTop={4}
            color="#726F6F"
            mt={2}
            textAlign="center"
            width={["100%", "80%"]}
            mx="auto"
          >
            The ultimate platform for pop-ups and local experiences, Popin connects consumers through real-time, location-based advertising
          </Text>
          <Box style={{display:"flex",
            gap:"20px",
            justifyContent:"center",
            width:"30%",
            margin:"0px auto"
          }}>
         <Button
      bgGradient="linear(to-r, #ff7e47, #fb6d6f)"
      marginTop={8}
      textColor="white"
      mx="auto"
      px={6}
      py={3}
      fontSize="lg"
      fontWeight="bold"
      borderRadius="md"
      transition="all 0.3s ease-in-out"
      _hover={{
        bgGradient: "linear(to-r, #fb6d6f, #ff7e47)", // Reverse gradient on hover
        transform: "scale(1.05)", // Slightly enlarge the button
        boxShadow: "0px 4px 15px rgba(255, 126, 71, 0.4)", // Glowing effect
      }}
      _active={{
        transform: "scale(0.98)", // Slight press-down effect when clicked
      }}
    >
      Access Popin
    </Button>
          </Box>
          <Text
            fontSize="lg"
            paddingTop={20}
            color="black"
            mt={2}
            textAlign="center"
            width={["100%", "50%"]}
            mx="auto"
          >
            Popin is the ultimate platform that connects communities with
            unique, local pop-ups and experiences in real time.
          </Text>
        </MotionBox>
        
        <MotionBox
          p={10}
          textAlign="center"
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          after={{ opacity: 0, x: 50, scale: 0 }}
          transition={{ duration: 1 }}
        >
           <Box
      display="flex"
      justifyContent="space-between"
      alignItems="start"
      px={10} // Add padding for spacing
      gap={6} // Space between text and image
    >
      {/* Left Text Content */}
      <Box flex="1">
        <Text
          fontSize="40px"
          fontWeight={700}
          p={5}
          color="#ff7e47"
          width="100%"
        >
          What we are offering
        </Text>
        <Text fontSize="lg" padding={2} textAlign="left" color="black" width="100%">
        Popin is the ultimate platform that connects communities with unique, local pop-ups and experiences in real time.

It’s the platform that helps you be discovered, connect with customers, and thrive in the moment. Whether you're serving crave-worthy eats, showcasing unique goods, or hosting unforgettable events, Popin puts your pop-up on the map—literally.


        </Text>
        <Text fontSize="lg" padding={2} textAlign="left" color="black" width="100%">
        Popin is the ultimate platform that connects communities with unique, local pop-ups and experiences in real time.

It’s the platform that helps you be discovered, connect with customers, and thrive in the moment. Whether you're serving crave-worthy eats, showcasing unique goods, or hosting unforgettable events, Popin puts your pop-up on the map—literally.


        </Text>
        <Button backgroundColor="#ff7e47" marginTop={8} textColor="white" mx="auto">
            About Us
          </Button>
      </Box>

      {/* Right Image */}
      <Box flex="1" display="flex" justifyContent="center">
        <Image
          src="/landingpic.jpg"
          alt="Landing Image"
          width={500} // Adjust width as needed
          height={600} // Adjust height as needed
          style={{
            borderRadius: "20px",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
        </MotionBox>
        <MotionBox
          p={10}
          textAlign="center"
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          after={{ opacity: 0, x: 50, scale: 0 }}
          transition={{ duration: 1 }}
        >
          <Text
              mt={40}
              p={20}
              textAlign="center"
              fontSize="2xl"
              initial={{ opacity: 0, x: -50, scale: 0 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              after={{ opacity: 0, x: 50, scale: 0 }}
              transition={{ duration: 1 }}
          >
            What is popin?
          </Text>
          <Text fontSize="lg" color="black" width={["100%", "70%"]} mx="auto">
            It’s the platform that helps you be discovered, connect with
            customers, and thrive in the moment. Whether you're serving
            crave-worthy eats, showcasing unique goods, or hosting unforgettable
            events, Popin puts your pop-up on the map—literally.
          </Text>
        </MotionBox>
        <MotionBox
          textAlign="center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          after={{ opacity: 0, x: 50, scale: 0 }}
          transition={{ duration: 1 }}
        >
          <Button backgroundColor="#ff7e47" textColor="white" mx="auto">
            Learn More
          </Button>
        </MotionBox>
        {/* Animated Section 2 */}
        <MotionBox
          mt={40}
          p={20}
          textAlign="center"
          fontSize="2xl"
          initial={{ opacity: 0, x: -50, scale: 0 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          after={{ opacity: 0, x: 50, scale: 0 }}
          transition={{ duration: 1 }}
        >
          Smooth Animations with Framer Motion
        </MotionBox>

        {/* Animated Section 3 */}
        <MotionBox
          mt={40}
          p={20}
          textAlign="center"
          fontSize="2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          after={{ opacity: 0, x: 50, scale: 0.6 }}
          transition={{ duration: 1 }}
        >
          Scroll Down for More Effects
        </MotionBox>
        <MotionBox
          mt={40}
          p={20}
          textAlign="center"
          fontSize="2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          after={{ opacity: 0, x: 50, scale: 0.6 }}
          transition={{ duration: 1 }}
        >
          Scroll Down for More Effects
        </MotionBox>
        <MotionBox
          mt={40}
          p={20}
          textAlign="center"
          fontSize="2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          after={{ opacity: 0, x: 50, scale: 0.6 }}
          transition={{ duration: 1 }}
        >
          Scroll Down for More Effects
        </MotionBox>
      </Box>
    </ChakraProvider>
  );
}

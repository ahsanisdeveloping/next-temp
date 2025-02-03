"use client";

import { Box, Button, Heading, Text, useColorModeValue, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { chakra } from "@chakra-ui/system";
const Banner = () => {
  const ownerText = "Be found by customers seeking experiences and local";
  const customerText = "Discover unique experiences and uncover amazing";

  const [introText, setIntroText] = useState(customerText);

  useEffect(() => {
    const texts = [ownerText, customerText];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length; // Toggle between 0 and 1
      setIntroText(texts[index]);
    }, 7000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // 🌙 Dark Mode Support
  const bg = useColorModeValue("white", "gray.900"); 
  const textColor = useColorModeValue("black", "whiteAlpha.900"); 
  const gradientText = useColorModeValue(
    "linear(to-r, #ff7e47, #fb6d6f)", 
    "linear(to-r, #ff9e7a, #fc8c8e)" 
  );
  const secondaryText = useColorModeValue("gray.600", "gray.400");

  const MotionText = motion(chakra.text);

  return (
    <Box bg={bg} minH="80vh" display="flex" alignItems="center" justifyContent="center" px={4}>
      <Box maxW="1200px" width="100%" textAlign="center" px={[4, 6, 8]} py={[10, 16, 20]}>
        <Heading
          as="h6"
          fontWeight={500}
          lineHeight="1.2"
          fontSize={["32px", "40px", "50px", "50px"]}
          color={textColor}
          textAlign="center"
        >
          <MotionText
            key={introText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            display="inline"
          >
            {introText}{" "}
            <MotionText fontSize={["32px", "40px", "50px", "50px"]} fontWeight={500} bgGradient={gradientText} bgClip="text" display="inline">
              pop-ups!
            </MotionText>
          </MotionText>
        </Heading>

        <Text
          fontSize={["16px", "18px", "20px", "23px"]}
          paddingTop={4}
          color={secondaryText}
          mt={2}
          textAlign="center"
          maxW={["90%", "80%", "70%"]}
          mx="auto"
        >
          The ultimate platform for pop-ups and local experiences, Popin connects consumers through real-time, location-based advertising.
        </Text>

        <Flex justifyContent="center" gap={4} flexWrap="wrap" mt={6}>
          <Button
            bgGradient="linear(to-r, #ff7e47, #fb6d6f)"
            textColor="white"
            px={[4, 6]}
            py={[2, 3]}
            fontSize={["md", "lg"]}
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
        </Flex>
      </Box>
    </Box>
  );
};

export default Banner;

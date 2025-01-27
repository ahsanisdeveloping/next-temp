"use client";

import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Heading,
  Button,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Motion Wrapper for Animations
const MotionBox = motion(Box);

const collections = [
  {
    title: "Food & Drink",
    image: "/landingpage/food.png",
    description:
      "From street food to gourmet creations, Popin is where foodies and creators unite. Share your culinary craft or discover something delicious and unexpected.",
  },
  {
    title: "Fitness Collection",
    image: "/landingpage/food.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus nulla at dignissim tempus.",
  },
  {
    title: "Health & Fitness",
    image: "/landingpage/health.png",
    description:
      "Host or find wellness events like yoga classes, fitness workshops, and mindfulness sessions that inspire healthy living.",
  },
  {
    title: "Fitness Collection",
    image: "/landingpage/food.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus nulla at dignissim tempus.",
  },
  {
    title: "Entertainment",
    image: "/landingpage/entertainment.png",
    description:
      "Turn your creativity into an event! From live music and art exhibits to cultural showcases, Popin makes entertainment accessible and engaging for everyone.",
  },
];

const CollectionSection = () => {
  // 🌙 Dark Mode Colors
  const bg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("#ff7e47", "#ff7e47");
  const overlayBg =
    "linear-gradient(to top, rgba(0, 0, 0, 0.91), rgba(0,0,0,0.2))";

  return (
    <Box py={16} px={6} bg={bg} textAlign="center">
      {/* Title */}
      <Heading
        as="h2"
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        color={textColor}
      >
        Some Heading
      </Heading>
      <Text
        color="gray.500"
        fontSize={["sm", "md"]}
        mt={2}
        maxW="600px"
        mx="auto"
      >
        Popin is built on the idea of creating connections through Food,
        Wellness, Creativity, and Community. Whether you’re hosting a pop-up or
        just exploring what’s out there, these categories help bring people
        together in meaningful ways.
      </Text>

      {/* Collection Grid */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={6} mt={10}>
        {collections.map((item, index) => (
          <MotionBox
            key={index}
            overflow="hidden"
            position="relative"
            borderRadius="md"
            boxShadow="lg"
            height={["300px","300px","300px","300px","300px"]}
            width={["280px","280px","280px","280px","280px"]}
            // whileHover={{ scale: 1.05 }}
            // transition={{ duration: 0.3 }}
          >
            {/* Background Image */}
            <MotionBox
              whileHover={{
                scale: 1.2, // Zoom in
                rotate: 5, // Rotate 5 degrees to the right
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Image
                src={item.image}
                alt={item.title}
                objectFit="cover"
            height={["300px","300px","300px","300px","300px"]}
            width={["280px","280px","280px","280px","280px"]}
                borderRadius="md"
              />
            </MotionBox>

            {/* Overlay */}
            <Box
              position="absolute"
              bottom="0"
              left="0"
              width="100%"
              height="140px"
              bg={overlayBg}
              display="flex"
              alignItems="end"
              justifyContent="start"
              p={4}
              color="white"
              borderBottomRadius="md"
            >
              <VStack align="start" spacing={1}>
                <Text fontWeight="bold" fontSize="sm">
                  {item.title}
                </Text>
                <Text fontSize="xs" opacity={0.8} textAlign="left">
                  {item.description}
                </Text>
                <Button variant="link" color="white" size="xs">
                  Explore Now →
                </Button>
              </VStack>
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CollectionSection;

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
import { motion, useAnimation } from "framer-motion";

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
    title: "Arts and Crafts",
    image: "/landingpage/arts.png",
    description:
      "Celebrate the art of making. From handmade jewelry and unique home decor to DIY workshops, Popin empowers crafters to share their passion and inspire others through creativity.",
  },
  {
    title: "Health & Fitness",
    image: "/landingpage/health.png",
    description:
      "Host or find wellness events like yoga classes, fitness workshops, and mindfulness sessions that inspire healthy living.",
  },
  {
    title: "Entertainment",
    image: "/landingpage/entertainment.png",
    description:
      "Turn your creativity into an event! From live music and art exhibits to cultural showcases, Popin makes entertainment accessible and engaging for everyone.",
  },
  {
    title: "Community & Business",
    image: "/landingpage/community.jpg",
    description:
      "Build connections that last. Whether it’s a local meetup, a networking event, or an educational workshop, Popin fosters opportunities to grow together.",
  },
];

const CollectionSection = () => {
  // 🌙 Dark Mode Colors
  const bg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("#ff7e47", "#ff7e47");
const secondaryText = useColorModeValue("gray.600", "gray.400");
  const overlayBg = "/landingpage/darkverticalgradiant.png";

  return (
    <Box py={16} px={6} bg={bg} textAlign="center">
      <Heading
        as="h2"
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        color={textColor}
      >
        The Pillars of Popup’s Business Community
      </Heading>
      <Text
        color={secondaryText}
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

      <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={6} mt={10} templateAreas={{
    base: `"a" "b" "c" "d" "e"`, // Single column layout for small screens
    md: `"a b c"
         ". d ."`, // Bottom row centered horizontally
  }}>
        {collections.map((item, index) => {
          const controls = useAnimation();

          return (
            <MotionBox
              key={index}
              overflow="hidden"
              position="relative"
              borderRadius="md"
              boxShadow="lg"
              height={["300px", "300px", "300px", "300px", "300px"]}
              width={["280px", "280px", "280px", "280px", "280px"]}
              onHoverStart={() => controls.start({ scale: 1.2, rotate: 10 })}
              onHoverEnd={() => controls.start({ scale: 1, rotate: 0 })}
            >
             
              <MotionBox
                animate={controls}
                transition={{ type: "ease" }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  objectFit="cover"
                  height={["250px", "250px", "250px", "250px", "250px"]}
                  width={["280px", "280px", "280px", "280px", "280px"]}
                  borderRadius="md"
                />
              </MotionBox>

              <Box
                position="absolute"
                bottom="0"
                left="0"
                width="100%"
                height="400px"
                backgroundImage={`url(${overlayBg})`}
                backgroundSize="cover"
                backgroundPosition="bottom"
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
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default CollectionSection;

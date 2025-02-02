"use client";

import {
  Box,
  Flex,
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
    image: "/landingpage/newfood.png",
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
    image: "/landingpage/newhealth.png",
    description:
      "Host or find wellness events like yoga classes, fitness workshops, and mindfulness sessions that inspire healthy living.",
  },
  {
    title: "Entertainment",
    image: "/landingpage/newentertainment.png",
    description:
      "Turn your creativity into an event! From live music and art exhibits to cultural showcases, Popin makes entertainment accessible and engaging for everyone.",
  },
  {
    title: "Community & Business",
    image: "/landingpage/newcommunity.png",
    description:
      "Build connections that last. Whether it’s a local meetup, a networking event, or an educational workshop, Popin fosters opportunities to grow together.",
  },
];

const CollectionSection = () => {
  const bg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("#ff7e47", "#ff7e47");
  const secondaryText = useColorModeValue("gray.600", "gray.400");
  const overlayBg = useColorModeValue( "/landingpage/lightverticalgradiant.png",  "/landingpage/darkverticalgradiant.png");
  return (
    <Box py={16} px={6} bg={bg} textAlign="center">
      <Heading as="h2" fontSize={["2xl", "3xl"]} fontWeight="bold" color={textColor}>
        The Pillars of Popup’s Business Community
      </Heading>
      <Text color={secondaryText} fontSize={["sm", "md"]} mt={2} maxW="600px" mx="auto">
        Popin is built on the idea of creating connections through Food, Wellness, Creativity, and Community. 
        Whether you’re hosting a pop-up or just exploring what’s out there, these categories help bring people together in meaningful ways.
      </Text>

      <Flex justifyContent="center" gap={6} flexWrap="wrap" mt={10}>
        {collections.slice(0, 3).map((item, index) => (
          <AnimatedCard key={index} item={item} overlayBg={overlayBg} />
        ))}
      </Flex>

      {/* ✅ Second row: Two items centered */}
      <Flex justifyContent="center" gap={6} flexWrap="wrap" mt={6}>
        {collections.slice(3, 5).map((item, index) => (
          <AnimatedCard key={index} item={item} overlayBg={overlayBg} />
        ))}
      </Flex>
    </Box>
  );
};

// ✅ **Reusable Motion Card Component (Preserves Your Animations)**
const AnimatedCard = ({ item, overlayBg }: { item: any; overlayBg: string }) => {
  const controls = useAnimation();
  const stackText = useColorModeValue("black","white")

  return (
    <MotionBox
      overflow="hidden"
      position="relative"
      borderRadius="md"
      height="400px"
      width="380px"
      onHoverStart={() => controls.start({ scale: 1.2, rotate: 10 })}
      onHoverEnd={() => controls.start({ scale: 1, rotate: 0 })}
    >
      <MotionBox animate={controls} transition={{ type: "ease" }}>
        <Image
          src={item.image}
          alt={item.title}
          objectFit="cover"
          height="500px"
          width="380px"
          borderRadius="md"
        />
      </MotionBox>

      {/* Overlay */}
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
          <Text fontWeight="bold" fontSize="sm" color={stackText}>
            {item.title}
          </Text>
          <Text fontSize="xs" fontWeight={600} textAlign="left" color={stackText}>
            {item.description}
          </Text>
          <Button variant="link" color="white" size="xs" color={stackText}>
            Explore Now →
          </Button>
        </VStack>
      </Box>
    </MotionBox>
  );
};

export default CollectionSection;

"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  UnorderedList,
  ListItem,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

// Motion Wrapper
const MotionBox = motion(Box);

const tabs = [
  { id: 0, title: "For Businesses", color: "#fb6d6f" },
  { id: 1, title: "For Consumers", color: "#fb6d6f" },
  { id: 2, title: "For Everyone", color: "#fb6d6f" },
];

const tabContent = [
  {
    title: "For Businesses",
    description: "Get discovered and grow your customer base in just a few steps:",
    points: [
      {
        id: 1,
        boldText: "Create your profile: ",
        text: " Share your business story, offerings, and goals with a dynamic profile.",
      },
      {
        id: 2,
        boldText: "Get Approved: ",
        text: "Once we’ve verified your profile, you’re ready to showcase your pop-up!",
      },
      {
        id: 3,
        boldText: "Add Your Dates: ",
        text: " Let your audience know when they can find you by adding pop-up dates to your profile.",
      },
      {
        id: 4,
        boldText: "Update Your Location: ",
        text: "On the day of your pop-up, pinpoint your exact location on the map so customers can find you effortlessly in real-time.",
      },
    ],
  },
  {
    title: "For Consumers",
    description: "Discover exciting pop-ups and unique experiences effortlessly:",
    points: [
      {
        id: 1,
        boldText: "Create a Free Profile: ",
        text: " Let us know your preferences to help tailor the experience just for you.",
      },
      {
        id: 2,
        boldText: "Explore the Map: ",
        text: "Search for pop-ups and events near you, or let Popin suggest experiences that match your taste.",
      },
    ],
  },
  {
    title: "For Everyone",
    description: "Discover exciting pop-ups and unique experiences effortlessly:",
    points: [
      {
        id: 1,
        boldText: "Meet, Connect, and Enjoy in Real-Time: ",
        text: "Whether you’re hosting a pop-up or discovering one, Popin makes connecting effortless and memorable.",
      },
    ],
  },
];

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [manualSwitch, setManualSwitch] = useState(false);

  // Auto-switch every 5 seconds unless manually switched
  useEffect(() => {
    if (manualSwitch) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [manualSwitch]);

  // 🌙 Dark Mode Colors
  const textColor = useColorModeValue("black", "whiteAlpha.900");
  const secondaryText = useColorModeValue("gray.600", "gray.400");
  const boxBg = useColorModeValue("gray.50", "gray.800"); // Right-side content box
  const gradientBorder = useColorModeValue(
    "linear(to-r, #ff7e47, #fb6d6f)", // Light Mode
    "linear(to-r, #ff9e7a, #fc8c8e)" // Dark Mode
  );

  // Responsive Layout Handling
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      direction={{ base: "column", md: "row" }} // Stacks on mobile, side-by-side on desktop
      align="center"
      justify="space-evenly"
      width="full"
      py={10}
      minHeight="500px"
      gap={10}
      px={20}
      height={{base:"auto",md:"500px"}}

    >
      {/* Left Tabs */}
      <VStack
        align={{ base: "center", md: "start" }}
        spacing={5}
        width={{ base: "100%", md: "40%" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Text fontSize={["2xl", "3xl"]} fontWeight="bold" color="#ff7e47">
          How it Works
        </Text>
        <Text fontSize={["md", "md"]} color={secondaryText} maxW="350px">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
        </Text>

        {tabs.map((tab, index) => (
          <HStack
            key={tab.id}
            width="full"
            cursor="pointer"
            onClick={() => {
              setActiveTab(index);
              setManualSwitch(true);
            }}
            spacing={2}
            transition="all 0.3s ease-in-out"
            _hover={{
              
              transform: "scale(1.02)",
            }}
          >
            <Box
              width="3px"
              height="20px"
              bg={activeTab === index ? tab.color : "transparent"}
              transition="all 0.3s"
            />
            <Text
              fontSize="lg"
              fontWeight={activeTab === index ? "bold" : "normal"}
              color={activeTab === index ? "#ff7e47" : "gray.500"}
            >
              {tab.title}
            </Text>
          </HStack>
        ))}
      </VStack>

      {/* Right Content Area */}
      <Box
        width={{ base: "100%", md: "50%" }}
        p={6}
        borderRadius="md"
        // bg={boxBg}
        color={textColor}
        overflow="hidden"
        // boxShadow="lg"
        // borderWidth="2px"
        // borderStyle="solid"
        borderImage={gradientBorder}
        transition="background 0.3s ease-in-out, border 0.3s ease-in-out"
      >
        <AnimatePresence mode="wait">
          <MotionBox
            key={activeTab}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Text color={secondaryText} fontSize={["lg","xl"]}>{tabContent[activeTab].description}</Text>
            <Box>
              <UnorderedList my={2}>
                {tabContent[activeTab].points?.map((point) => (
                  <ListItem key={point.id} sx={{
                    "::marker": {
                      color: "#ff7e47", // Change bullet color
                      fontSize: "1.2em", // Optional: Adjust bullet size
                    },
                  }}>
                    <Text>
                      <strong>{point.boldText}</strong>
                      {point.text}
                    </Text>
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          </MotionBox>
        </AnimatePresence>
      </Box>
    </Flex>
  );
}

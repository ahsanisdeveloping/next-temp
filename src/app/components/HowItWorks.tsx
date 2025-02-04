import { useState, useEffect } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Grid,
  Kbd,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { BsShop } from "react-icons/bs";
import { BiRightArrow } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { PiHandshake } from "react-icons/pi";
// Motion Wrapper
const MotionBox = motion(Box);

const tabs = [
  { id: 0, title: "For Businesses", icon: BsShop },
  { id: 1, title: "For Consumers", icon: IoIosPeople },
  { id: 2, title: "For Everyone", icon: PiHandshake },
];

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [manualSwitch, setManualSwitch] = useState(false);
  const [component, setComponent] = useState(<ForBusinesses />);

  // Function to update component based on tab index
  const updateComponent = (index: number) => {
    switch (index) {
      case 0:
        setComponent(<ForBusinesses />);
        break;
      case 1:
        setComponent(<ForConsumers />);
        break;
      case 2:
        setComponent(<ForEveryone />);
        break;
      default:
        setComponent(<ForBusinesses />);
    }
  };

  // Auto-switch every 5 seconds unless manually switched
  useEffect(() => {
    if (manualSwitch) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
      updateComponent((activeTab + 1) % tabs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [manualSwitch, activeTab]); // Depend on activeTab for smooth cycling

  // 🌙 Dark Mode Colors
  const textColor = useColorModeValue("black", "whiteAlpha.900");
  const secondaryText = useColorModeValue("gray.600", "gray.400");
  const gradientBorder = useColorModeValue(
    "linear(to-r, #ff7e47, #fb6d6f)", // Light Mode
    "linear(to-r, #ff9e7a, #fc8c8e)" // Dark Mode
  );
  const borderColor = useColorModeValue("#ff7e47", "#fc8c8e");
  // Responsive Layout Handling

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 2fr" }} // 1 column for mobile, 1:2 ratio for desktop
      width="full"
      py={5}
      minHeight={["90vh", "100vh"]}
      gap={10}
      px={{ base: 5, md: 20 }}
      height={{ base: "auto", md: "500px" }}
    >
      {/* Left Tabs - Takes 1 Column */}
      <VStack
        align={{ base: "center", md: "start" }}
        spacing={5}
        width="100%"
        textAlign={{ base: "center", md: "left" }}
      >
        <Text fontSize={["3xl", "5xl"]} fontWeight="bold" color="#ff7e47">
          How it Works
        </Text>
        <Text fontSize={["md", "xl"]} color={secondaryText} maxW="350px">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </Text>

        {tabs.map((tab, index) => (
          <HStack
            key={tab.id}
            width="full"
            cursor="pointer"
            onClick={() => {
              setActiveTab(index);
              setManualSwitch(true);
              updateComponent(index);
            }}
            spacing={3}
            transition="all 0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
            align="center"
          >
            <Box
              width="3px"
              height="20px"
              bg={activeTab === index ? borderColor : "transparent"}
              transition="all 0.3s"
            />
            <tab.icon
              size={25}
              color={activeTab === index ? borderColor : borderColor}
            />
            <Text
              fontSize="lg"
              fontWeight={activeTab === index ? "bold" : "normal"}
              color={activeTab === index ? borderColor : "gray.500"}
            >
              {tab.title}
            </Text>
          </HStack>
        ))}
      </VStack>

      {/* Right Content Area - Takes 2 Columns */}
      <Box
        width="100%"
        p={{ base: 3, md: 6 }}
        borderRadius="md"
        minHeight={["90vh", "100vh"]}
        color={textColor}
        overflow="hidden"
        transition="background 0.3s ease-in-out, border 0.3s ease-in-out"
      >
        <AnimatePresence >
          <MotionBox
            key={activeTab}
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }} // Ensures smooth height expansion
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {component}
          </MotionBox>
        </AnimatePresence>
      </Box>
    </Grid>
  );
}

// Individual Components
const ForBusinesses = () => {
  const businessesData = {
    title: "For Businesses",
    description:
      "Get discovered and grow your customer base in just a few steps:",
    points: [
      {
        id: 1,
        boldText: "Create your profile",
        text: " Share your business story, offerings, and goals with a dynamic profile.",
      },
      {
        id: 2,
        boldText: "Get Approved",
        text: "Once we’ve verified your profile, you’re ready to showcase your pop-up!",
      },
      {
        id: 3,
        boldText: "Add Your Dates",
        text: " Let your audience know when they can find you by adding pop-up dates to your profile.",
      },
      {
        id: 4,
        boldText: "Update Your Location",
        text: "On the day of your pop-up, pinpoint your exact location on the map so customers can find you effortlessly in real-time.",
      },
    ],
  };
  return (
    <Box>
      <Box
        bgGradient="linear(to-r, #ff7e47, #fb6d6f)"
        textColor="white"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        shadow="lg"
        px={5}
        rounded="xl"
      >
        <Text fontSize={["xl", "3xl"]} fontWeight="bold" my={2}>
          {businessesData.title}
        </Text>

        <BsShop size={30} />
      </Box>

      <Text fontSize={["xl", "3xl"]} color="gray.600" my={2}>
        {businessesData.description}
      </Text>
      <Box display="flex" flexDirection="column" gap={5}>
        {businessesData.points.map((point) => (
          <Box key={point.id}>
            <Kbd fontSize={{base:"md",sm:"xl"}} bg="#ff7e47" textColor="white" mx="auto">
              {point.boldText}
            </Kbd>
            <Box
              mt={2}
              display="flex"
              gap={2}
              alignItems="center"
              justifyContent="start"
            >
              <Box>
                <BiRightArrow color="#ff7e47" size={25} />
              </Box>
              <Text fontWeight={600} fontSize="xl">
                {point.text}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
const ForConsumers = () => {
  const consumersData = {
    title: "For Consumers",
    description:
      "Discover exciting pop-ups and unique experiences effortlessly:",
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
  };
  return (
    <Box>
      <Box
        bgGradient="linear(to-r, #ff7e47, #fb6d6f)"
        textColor="white"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        shadow="lg"
        px={5}
        rounded="xl"
      >
        <Text fontSize={["xl", "3xl"]} fontWeight="bold" my={2}>
          {consumersData.title}
        </Text>

        <IoIosPeople size={30} />
      </Box>

      <Text fontSize={["xl", "3xl"]} color="gray.600" my={2}>
        {consumersData.description}
      </Text>
      <Box display="flex" flexDirection="column" gap={5}>
        {consumersData.points.map((point) => (
          <Box key={point.id}>
            <Kbd fontSize="xl" bg="#ff7e47" textColor="white" mx="auto">
              {point.boldText}
            </Kbd>
            <Box
              mt={2}
              display="flex"
              gap={2}
              alignItems="center"
              justifyContent="start"
            >
              <Box>
                <BiRightArrow color="#ff7e47" size={25} />
              </Box>
              <Text fontWeight={600} fontSize="xl">
                {point.text}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
const ForEveryone = () => {
  const everyoneData = {
    title: "For Everyone",
    description:
      "Discover exciting pop-ups and unique experiences effortlessly:",
    points: [
      {
        id: 1,
        boldText: "Meet, Connect, and Enjoy in Real-Time: ",
        text: "Whether you’re hosting a pop-up or discovering one, Popin makes connecting effortless and memorable.",
      },
    ],
  };
  return (
    <Box>
      <Box
        bgGradient="linear(to-r, #ff7e47, #fb6d6f)"
        textColor="white"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        shadow="lg"
        px={5}
        rounded="xl"
      >
        <Text fontSize={["xl", "3xl"]} fontWeight="bold" my={2}>
          {everyoneData.title}
        </Text>

        <PiHandshake size={30} />
      </Box>

      <Text fontSize={["xl", "3xl"]} color="gray.600" my={2}>
        {everyoneData.description}
      </Text>
      <Box display="flex" flexDirection="column" gap={5}>
        {everyoneData.points.map((point) => (
          <Box key={point.id}>
            <Kbd fontSize="xl" bg="#ff7e47" textColor="white" mx="auto">
              {point.boldText}
            </Kbd>
            <Box
              mt={2}
              display="flex"
              gap={2}
              alignItems="center"
              justifyContent="start"
            >
              <Box>
                <BiRightArrow color="#ff7e47" size={25} />
              </Box>
              <Text fontWeight={600} fontSize={["lg", "xl"]}>
                {point.text}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

import {
  Box,
  Text,
  useColorModeValue,
  Heading,
  Grid,
  Flex,
  Image,
} from "@chakra-ui/react";

const HowItWorks = () => {
  const businessPoints = [
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
  ];
  const consumerPoints = [
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
  ];
  const everyonePoints = [
    {
      id: 1,
      boldText: "Meet, Connect, and Enjoy in Real-Time: ",

      text: "Whether you’re hosting a pop-up or discovering one, Popin makes connecting effortless and memorable.",
    },
    
  ];
  const bg = useColorModeValue("white", "gray.900");
  const boxBg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("#ff7e47", "#ff7e47");
  const secondaryText = useColorModeValue("gray.600", "gray.400");
  return (
    <Box py={16} px={10} bg={bg} textAlign="center">
    <Heading as="h2" fontSize={["2xl", "3xl"]} fontWeight="bold" color={textColor}>
      How It Works
    </Heading>
    <Text color={secondaryText} fontSize={["md", "lg"]} mt={2} mx="auto">
      With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
    </Text>
  
    {/* Main Wrapper */}
    <Flex
    mt={5}
      w="100%"
      maxW="1200px"
      mx="auto"
      direction="column"
      borderRadius="lg"
      // boxShadow="xl"
      p={6}
      bg={boxBg}
    >
      {/* Two Column Layout for Business & Consumers */}
      <Flex
        direction={{ base: "column", md: "row" }} // Stack on mobile, side-by-side on desktop
        justifyContent="space-between"
        alignItems="flex-start"
        width="100%"
        gap={6} // Add spacing between sections
      >
        {/* Business Column */}
        <Box flex="1" minW="300px">
          <Text as="h1" fontSize="20px" fontWeight="bold" textAlign="left" px={3}>
            For Businesses
          </Text>
          <Text as="p" fontSize="18px" fontWeight={500} textAlign="left" color={secondaryText} px={3} py={3}>
            Get discovered and grow your customer base in just a few steps:
          </Text>
          {businessPoints.map((point) => (
            <Flex
              key={point.id}
              alignItems="center"
              gap={3}
              padding={3}
              shadow="lg"
              my="1"
              transition="all 0.3s ease-in-out"
              _hover={{
                shadow: "lg",
                boxShadow: "0px 0px 20px #ff7e47, 0px 0px 40px #fb6d6f", // Gradient Glow
              }}
              rounded="xl"
            >
              <Text bgColor={useColorModeValue("black", "gray.400")} color={useColorModeValue("white", "black")} rounded="lg" px={4} py={2} textAlign="center">
                {point.id}
              </Text>
              <Text as="p" textAlign="left">
                <strong>{point.boldText}</strong> {point.text}
              </Text>
            </Flex>
          ))}
        </Box>
  
        {/* Consumers Column */}
        <Box flex="1" minW="300px">
          <Text as="h1" fontSize="20px" fontWeight="bold" textAlign="left" px={3}>
            For Consumers
          </Text>
          <Text as="p" fontSize="18px" fontWeight={500} textAlign="left" color={secondaryText} px={3} py={3}>
            Discover exciting pop-ups and unique experiences effortlessly:
          </Text>
          {consumerPoints.map((point) => (
            <Flex
              key={point.id}
              alignItems="center"
              gap={3}
              padding={3}
              shadow="sm"
              my="1"
              transition="all 0.3s ease-in-out"
              _hover={{
                shadow: "lg",
                boxShadow: "0px 0px 20px #ff7e47, 0px 0px 40px #fb6d6f", // Gradient Glow
              }}
              rounded="xl"
            >
              <Text bgColor={useColorModeValue("black", "gray.400")} color={useColorModeValue("white", "black")} rounded="lg" px={4} py={2} textAlign="center">
                {point.id}
              </Text>
              <Text as="p" textAlign="left">
                <strong>{point.boldText}</strong> {point.text}
              </Text>
            </Flex>
          ))}
        </Box>
      </Flex>
  
      {/* Bottom Row Centered */}
      <Box mt={6} display="flex" justifyContent="center" 
              flexDirection="column"
              alignItems="center" mx="auto"
              maxWidth="700px">
      <Text as="h1" fontSize="20px" fontWeight="bold" textAlign="left" px={3}>
            For Everyone
          </Text>
          <Text as="p" fontSize="18px" fontWeight={500} textAlign="left" color={secondaryText} px={3} py={3}>
            Discover exciting pop-ups and unique experiences effortlessly:
          </Text>
          {everyonePoints.map((point) => (
            <Flex
              key={point.id}
              alignItems="center"
              gap={3}
              padding={3}
              shadow="sm"
              my="1"
              transition="all 0.3s ease-in-out"
              _hover={{
                shadow: "lg",
                boxShadow: "0px 0px 20px #ff7e47, 0px 0px 40px #fb6d6f", // Gradient Glow
              }}
              rounded="xl"
              maxWidth={"600px"}
            >
              <Text bgColor={useColorModeValue("black", "gray.400")} color={useColorModeValue("white", "black")} rounded="lg" px={4} py={2} textAlign="center">
                {point.id}
              </Text>
              <Text as="p" textAlign="left">
                <strong>{point.boldText}</strong> {point.text}
              </Text>
            </Flex>
          ))}
      </Box>
    </Flex>
  </Box>
  
  );
};

export default HowItWorks;

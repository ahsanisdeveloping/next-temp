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
  const bg = useColorModeValue("white", "gray.900");
  const boxBg = useColorModeValue("gray.100", "gray.800");
  const textColor = useColorModeValue("#ff7e47", "#ff7e47");
  const secondaryText = useColorModeValue("gray.600", "gray.400");
  return (
    <Box py={16} px={6} bg={bg} textAlign="center">
      <Heading
        as="h2"
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        color={textColor}
      >
        How It Works
      </Heading>
      <Text
        color={secondaryText}
        fontSize={["sm", "md"]}
        mt={2}
        maxW="600px"
        mx="auto"
      >
        With lots of unique blocks, you can easily build a page without coding.
        Build your next landing page
      </Text>
      <Flex
        w="90%"
        h="80vh"
        bg={boxBg}
        direction="column"
        borderRadius="lg"
        boxShadow="xl"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={6}
      >
        <Flex direction="row" justifyContent="space-between" width="100%">
          <Box width="500px">
            <Text as="h1">For Businesses</Text>
            <Text as="p">
              Get discovered and grow your customer base in just a few steps:
            </Text>
            {businessPoints.map((point) => {
              return (
                <Flex
  alignItems="center"
  gap={3}
  justifyContent="space-between"
  padding={3}
  shadow="sm"
  my="1"
  transition="all 0.3s ease-in-out"
  _hover={{
    shadow: "lg",
    boxShadow: "0px 0px 20px #ff7e47, 0px 0px 40px #fb6d6f", // Brand gradient glow
  }}
  rounded="xl"
>
  <Text
    bgColor="black"
    color="white"
    rounded="lg"
    px={3}
    py={2}
    textAlign="center"
    mx="auto"
    my="auto"
  >
    {point.id}
  </Text>
  <Text as="p" textAlign="left">
    <strong>{point.boldText}</strong>
    {point.text}
  </Text>
</Flex>

              );
            })}
          </Box>
          <Box width="500px">
            <Text as="h1">For Consumers</Text>
            <Text as="p">
              Discover exciting pop-ups and unique experiences effortlessly:
            </Text>
            {consumerPoints.map((point) => {
              return (
                <Flex
                  alignItems="center"
                  gap={3}
                  justifyContent="space-between"
                  padding={3}
                >
                  <Text
                    bgColor="black"
                    color="white"
                    rounded="lg"
                    px={3}
                    py={2}
                    textAlign="center"
                    mx="auto"
                    my="auto"
                  >
                    {point.id}
                  </Text>
                  <Text as="p" textAlign="left">
                    <strong>{point.boldText}</strong>
                    {point.text}
                  </Text>
                </Flex>
              );
            })}
          </Box>
        </Flex>
        <Box>bottom row</Box>
      </Flex>
    </Box>
  );
};

export default HowItWorks;

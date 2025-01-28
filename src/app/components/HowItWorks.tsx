import { Box, Text, useColorModeValue, Heading } from "@chakra-ui/react";

const HowItWorks = () => {
  const bg = useColorModeValue("white", "gray.900");

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
       With lots of unique blocks, you can easily build a page without coding. Build your next landing page
      </Text>
      <Box>
        <Box>

        </Box>
        <Box>
            
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorks;

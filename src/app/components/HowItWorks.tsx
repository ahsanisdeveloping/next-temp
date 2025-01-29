import { Box, Text, useColorModeValue, Heading, Grid } from "@chakra-ui/react";

const HowItWorks = () => {
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
       With lots of unique blocks, you can easily build a page without coding. Build your next landing page
      </Text>
      <Box
        w="90%"
        h="80vh"
        bg={boxBg}
        borderRadius="lg"
        boxShadow="xl"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={6}
      >
        {/* Grid Layout */}
        <Grid
          templateAreas={{
            base: `"a" "b" "c"`, // Single column layout on mobile
            md: `"left right" "bottom bottom"`, // Desktop layout
          }}
          templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} // Two columns for desktop
          templateRows={{ base: "auto", md: "auto auto auto" }} // Two rows for desktop
          gap={6}
          w="100%"
          h="100%"
        >
          {/* Left Box */}
          <Box
            bg="green.400"
            p={6}
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gridArea="left"
          >
            Box #1
          </Box>

          {/* Right Box */}
          <Box
            bg="yellow.400"
            p={6}
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gridArea="right"
          >
            Box #2
          </Box>

          {/* Bottom Full-Width Box */}
          <Box
            bg="red.400"
            p={6}
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gridArea="bottom"
            colSpan={3} // Ensures it spans both columns
            rowSpan={3}
          >
            Box #3
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default HowItWorks;
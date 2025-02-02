import { Box, Text } from "@chakra-ui/react";

const Business = () => {
  return (
    <Box>
      <Box
        backgroundImage={`url("/landingpage/orangeball.png")`}
        backgroundSize="contain"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {/* Your content here */}
        <Text fontSize="5xl" fontWeight={700}>
          Put your business on the map; Literally
        </Text>
      </Box>
    </Box>
  );
};

export default Business;

import { Box, Text, Image } from "@chakra-ui/react";
import {motion} from 'framer-motion'
const MotionBox = motion(Box)
const Business = () => {
  return (
    <Box
      minHeight={["90vh", "100vh"]}
      position="relative"
      // bgImage={"url(/landingpage/orangepallete.svg)"}
      bgRepeat="no-repeat"
      bgPosition="center"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        zIndex={3}
      >
        {/* Your content here */}
        <Text fontSize="6xl" fontWeight={700}>
          Put your business on the map; Literally
        </Text>
      </Box>
      <Box>
        <Text fontSize="3xl" fontWeight={600}>
          For Popup Owners & Event Organisers
        </Text>
        <Text>
          Popin empowers your business to stand out and thrive in a competitive
          marketplace.
        </Text>
      </Box>
      <MotionBox
      initial={{ y: "50px", opacity: 0 }} // Start from below
      animate={{ y: 1, opacity: 1 }} // Move up smoothly
      transition={{ duration: 1.2, ease: "easeOut" }} // Smooth transition
    >
      <Box
        bgImage="url(/landingpage/orangeglow.png)"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        height="1000px" // Adjusted for a perfect dome effect
        width="100%"
        borderTopRadius="100%" // This ensures a perfect dome shape
        borderBottomRadius="0" // Keeps bottom flat
        overflow="hidden" // Ensures it maintains shape
        position="absolute"
        bottom={-600}
        zIndex={1}
      ></Box>
    </MotionBox>
      <Box display="flex" justifyContent="flex-end" zIndex={2}>
        <Image
          src="/landingpage/popinmap.jpg"
          height={400}
          width={500}
          rounded="xl"
        />
      </Box>
    </Box>
  );
};

export default Business;

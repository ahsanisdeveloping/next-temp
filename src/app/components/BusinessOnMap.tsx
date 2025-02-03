import {
  Box,
  Text,
  Image,
  Kbd,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
const MotionBox = motion(Box);
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
      <Text fontSize={["3xl","6xl"]} fontWeight={700} textAlign="center" >
        Put your business on the map; Literally
      </Text>
      <Box display="flex">
        <Box px={10} display="flex" flexDirection="column" gap={3} >
          <Text fontSize={["2xl","3xl"]} fontWeight={600}>
            For Popup Owners & Event Organisers
          </Text>
          <Text>
            Popin empowers your business to stand out and thrive in a
            competitive marketplace.
          </Text>
          <Box>
            <Text>
              <Kbd fontSize="xl" bg="#ff7e47" textColor="white" mx="auto">
                Showcase Your Story:
              </Kbd>{" "}
              Build a rich, dynamic profile that highlights what makes your
              pop-up unique—your mission, story, and offerings.
            </Text>
            <Text>
              <Kbd fontSize="xl" bg="#ff7e47" textColor="white" mx="auto">
                Get Discovered in Real Time:
              </Kbd>{" "}
              Pin your business on the map and let customers know where to find
              you and when.
            </Text>
            <Text>
              <Kbd fontSize="xl" bg="#ff7e47" textColor="white" mx="auto">
                Grow Your Community:
              </Kbd>{" "}
              Attract followers who are excited about your pop-up and keep them
              updated with real-time notifications and directions.
            </Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end" zIndex={2} p={5}>
        <Image
          src="/landingpage/popinmap.jpg"
          height={500}
          width={600}
          rounded="xl"
        />
      </Box>
      </Box>

      <MotionBox
        initial={{ y: 1000, opacity: 0 }} // Start from below
        animate={{ y: 0, opacity: 1 }} // Move up smoothly
        transition={{ duration: 1, ease: "easeOut" }}
        position="absolute" // Smooth transition
        zIndex={1}
        bottom={-100}
      >
        <Image
          src="/landingpage/orangeglow.png"
          height="1000px" // Adjusted for a perfect dome effect
          width="100%"
        />
      </MotionBox>
    </Box>
  );
};

export default Business;

import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Flex,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const BusinessOnMap = () => {
  const bg = useColorModeValue("white", "gray.900");
  const mainColor = useColorModeValue("black", "white");
  const textColor = useColorModeValue("#ff7e47", "#ff7e47");
  const secondaryText = useColorModeValue("gray.600", "gray.400");

  return (
    <Box py={16} px={6} bg={bg} textAlign="center" >
      
      <Heading
        as="h2"
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        color={textColor}
        textAlign="center"
      >
        Put Your Business On the Map
      </Heading>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        <Box flex="1" p={10} minW="300px">
          <Text
            color={mainColor}
            mt={2}
            maxW="600px"
            textAlign="left"
            fontWeight={700}
            fontSize="xl"
          >
            For Popup Owners & Event Organisers
          </Text>
          <Text
            color={secondaryText}
            fontSize={["sm", "md"]}
            mt={2}
            maxW="600px"
            textAlign="left"
          >
            Popin empowers your business to stand out and thrive in a
            competitive marketplace.
          </Text>
          <UnorderedList
            textAlign="left"
            mt={2}
            display="flex"
            flexDirection="column"
            gap={5}
            pl={2}
          >
            <ListItem mt={2}>
              <strong>Showcase Your Story: </strong>Build a rich, dynamic
              profile that highlights what makes your pop-up unique—your
              mission, story, and offerings.
            </ListItem>
            <ListItem>
              <strong>Get Discovered in Real Time: </strong>Pin your business on
              the map and let customers know where to find you and when.
            </ListItem>
            <ListItem>
              <strong>Grow Your Community: </strong>Attract followers who are
              excited about your pop-up and keep them updated with real-time
              notifications and directions.
            </ListItem>
          </UnorderedList>
        </Box>

        <Flex p={10} justifyContent="flex-end" alignItems="center" minW="300px">
          <Image
            src="/landingpage/grid1.png"
            rounded="xl"
            width={["100%", "400px"]} // Responsive width
            height={["300px", "400px"]} // Responsive width
            ml="auto" // Ensures image moves to the right
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default BusinessOnMap;

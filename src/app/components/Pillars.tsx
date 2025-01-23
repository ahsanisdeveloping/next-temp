import { Box, Text, Image } from "@chakra-ui/react";

const Pillars = () => {
  return (
    <Box padding={20}>
      <Box>
        <Text
          fontSize="40px"
          textAlign="center"
          color="#ff7e47"
          width={["100%", "70%"]}
          mx="auto"
          fontWeight={500}
        >
          The 4 Pillars of the Popin Community
        </Text>
      </Box>
      <Box style={{
        display:"flex",
        gridColumn:"4"
      }}>
        <Box>
          <Box height={250} width={250}>
            <Image src="/grid1.webp" alt="Food" borderRadius="md" />
          </Box>
          <Text
          fontSize="20px"
          color="#ff7e47"
          width={["100%", "70%"]}
          mx="auto"
          fontWeight={500}
        >
          The 4 Pillars of the Popin Community
        </Text>
        <Text
          fontSize="20px"
          color="#ff7e47"
          width={["100%", "70%"]}
          mx="auto"
          fontWeight={500}
        >
          The 4 Pillars of the Popin Community
        </Text>
        </Box>
        <Box>
          <Box height={250} width={250}>
            <Image src="/grid1.webp" alt="Food" borderRadius="md" />
          </Box>
          <Text
          fontSize="20px"
          color="#ff7e47"
          width={["100%", "70%"]}
          mx="auto"
          fontWeight={500}
        >
          The 4 Pillars of the Popin Community
        </Text>
        <Text
          fontSize="20px"
          color="#ff7e47"
          width={["100%", "70%"]}
          mx="auto"
          fontWeight={500}
        >
          The 4 Pillars of the Popin Community
        </Text>
        </Box>
        <Box>
          <Box height={250} width={250}>
            <Image src="/grid1.webp" alt="Food" borderRadius="md" />
          </Box>
          <Text
          fontSize="20px"
          color="#ff7e47"
          width={["100%", "70%"]}
          mx="auto"
          fontWeight={500}
        >
          The 4 Pillars of the Popin Community
        </Text>
        <Text
          fontSize="20px"
          color="#ff7e47"
          width={["100%", "70%"]}
          mx="auto"
          fontWeight={500}
        >
          The 4 Pillars of the Popin Community
        </Text>
        </Box>
        <Box>
          <Box height={250} width={250}>
            <Image src="/grid1.webp" alt="Food" borderRadius="md" />
          </Box>
          <Text
          fontSize="20px"
          color="#ff7e47"
          width={["100%", "70%"]}
          mx="auto"
          fontWeight={500}
        >
          The 4 Pillars of the Popin Community
        </Text>
        <Text
          fontSize="20px"
          color="#ff7e47"
          width={["100%", "70%"]}
          mx="auto"
          fontWeight={500}
        >
          The 4 Pillars of the Popin Community
        </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Pillars;

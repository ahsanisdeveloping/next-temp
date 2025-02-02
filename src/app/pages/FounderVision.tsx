"use client";
import {
  Box,
  Image,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Button,
  useColorModeValue
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
const FounderVision = () => {
   const gradientText = useColorModeValue(
      "linear(to-r, #ff7e47, #fb6d6f)", 
      "linear(to-r, #ff9e7a, #fc8c8e)" 
    );
  const router = useRouter();
  return (
    <Box p={20} display="flex" flexDirection="column" gap={4} maxWidth={2000}>
      <Box display="flex" width="100%" justifyContent="end">
        <Button
          onClick={() => router.back()}
          maxWidth={300}
          rounded="xl"
          backgroundColor="#ff7e47"
          color="white"
          display="flex"
          gap={1}
          alignItems="center"
          justifyContent="center"
        >
          <Box display="relative" >
          <IoIosArrowBack />
          </Box>
          <Text position="relative" bottom="2px">Back</Text>{" "}
        </Button>
      </Box>

      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }} // Stack on mobile, side-by-side on larger screens
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        gap={6}
        textAlign={{ base: "center", md: "left" }} // Center text on mobile
      >
        {/* Left Side - Image */}
       

        {/* Right Side - Text */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth="1000px"
          px={{ base: 4, md: 20 }} // Add padding on mobile for better spacing
        >
          <Text bgGradient={gradientText} bgClip="text" display="inline" fontSize="5xl">Founder's Vision</Text>
          <Text fontSize={{ base: "sm", md: "md" }}>
            Helping people unlock their potential and bring their vision to life
            has always been my passion. I love encouraging people to uncover
            that special something within them—their unique contribution to the
            world—and supporting them in making it a reality.
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} mt={4}>
            Over the years, this passion has led me to help in all sorts of
            ways. Whether it was encouraging young people to dream big during my
            time as a youth worker, becoming a photographer during the rise of a
            friend’s band, or designing labels for the mango pepper sauce of my
            favourite Caribbean street food vendor, I’ve always found joy in
            seeing others succeed.
          </Text>
        </Box>
        <Image
          src="/landingpage/founder.jpg"
          width={{ base: "100%", md: "500px" }} // Full width on mobile, fixed on desktop
          height={{ base: "auto", md: "500px" }} // Auto height on mobile, fixed on desktop
          objectFit="cover" // Ensures the image scales correctly
          rounded="xl"
        />
      </Box>

      <Box>
        <Text>
          A recurring challenge I’ve witnessed is this: how can small businesses
          or creators bring their ideas to the market sustainably, without a
          massive advertising budget? That question became the driving force
          behind <strong>Popin</strong>—a platform built to level the playing
          field for small businesses, creators, and entrepreneurs.
        </Text>
      </Box>
      <Box>
        <Heading  fontSize={["2xl","3xl"]}>The Spark Behind Popin</Heading>
        <Text>
          Over the past 20 years, I’ve worked in technology across a range of
          industries, from charitable organisations to corporate giants like
          Visa. These experiences have shaped my understanding of innovation,
          community, and how technology can empower people when used
          thoughtfully.
        </Text>
        <Text>
          My inspiration for Popin came during my time working on Lower Marsh in
          Waterloo, home to one of the oldest markets in the country. The market
          was alive with creativity and culture—street food vendors sharing
          recipes and flavours, artisans showcasing their craftsmanship, and
          communities gathering to celebrate their passions.
        </Text>
        <Text>
          While I loved the vibrancy of the market, I couldn’t help but notice a
          challenge: not everyone knew when or where to find these amazing
          businesses. The excitement of these moments often passed unnoticed by
          many, only for people to discover them later on social media—the
          afterglow of local excitement.
        </Text>
        <Text>
          This realisation sparked an idea: what if there were a way to connect
          people to the exciting things happening around them in real time? And
          what if small businesses didn’t need huge advertising budgets to reach
          their community? That’s where Popin was born—a platform that
          seamlessly connects the physical to the digital, helping people
          discover what’s “Popin” around them effortlessly.
        </Text>
      </Box>
      <Box>
        <Heading  fontSize={["2xl","3xl"]}>A Vision for the Future</Heading>
        <Text>
          At its core, Popin is about creating connections. I believe that every
          product, service, or business has a natural community of
          customers—it’s just a matter of helping them find each other. Popin’s
          mission is to bridge that gap by making discovery effortless for both
          businesses and consumers.
        </Text>
        <Text>The platform is designed to:</Text>
        <UnorderedList >
          <ListItem sx={{
                    "::marker": {
                      color: "#ff7e47", // Change bullet color
                      fontSize: "1.2em", // Optional: Adjust bullet size
                    },
                  }}>
            Highlight the unique artistry and craftsmanship that people pour
            into their work.
          </ListItem>
          <ListItem sx={{
                    "::marker": {
                      color: "#ff7e47", // Change bullet color
                      fontSize: "1.2em", // Optional: Adjust bullet size
                    },
                  }}>
            Build stronger communities by keeping money circulating locally,
            rather than funnelling it into the hands of businesses with the
            biggest ad budgets.
          </ListItem>
          <ListItem sx={{
                    "::marker": {
                      color: "#ff7e47", // Change bullet color
                      fontSize: "1.2em", // Optional: Adjust bullet size
                    },
                  }}>
            Empower entrepreneurs to focus on what they do best—creating—while
            Popin helps them build their community and grow their reach.
          </ListItem>
        </UnorderedList>
        <Text>
          I want Popin to be a place where businesses thrive because of their
          creativity, innovation, and dedication—not because they can outspend
          the competition.
        </Text>
      </Box>
      <Box>
        <Heading  fontSize={["2xl","3xl"]}>What Drives Me</Heading>
        <Text>
          At the heart of Popin is my belief in family. To me, family means
          connection, support, and shared growth. These are the same values I
          want Popin to embody—a space where small businesses and their
          customers feel like they’re part of a community that supports and
          uplifts them.
        </Text>
        <Text>
          I’m also deeply motivated by my view of innovation as a force for
          good. I see AI not as a replacement for human ingenuity, but as a tool
          to enhance it. With Popin, I want to show how technology can empower
          entrepreneurs to focus on their artistry, their craftsmanship, and
          what makes them unique, while we take care of connecting them to their
          community.
        </Text>
      </Box>
    </Box>
  );
};

export default FounderVision;

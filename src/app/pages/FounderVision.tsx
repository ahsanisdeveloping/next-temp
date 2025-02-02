"use client";
import {
  Box,
  Image,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Button,
  useColorModeValue,
  Kbd,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";
const MotionKbd = motion(Kbd);
const MotionBox = motion(Box);
const MotionText = motion(Text);

const FounderVision = () => {
  const gradientText = useColorModeValue(
    "linear(to-r, #ff7e47, #fb6d6f)",
    "linear(to-r, #ff9e7a, #fc8c8e)"
  );
  const router = useRouter();
  return (
    <Box
      p={{ base: 5, md: 20 }}
      display="flex"
      flexDirection="column"
      gap={4}
      maxWidth={2000}
    >
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
          <Box display="relative">
            <IoIosArrowBack />
          </Box>
          <Text position="relative" bottom="2px">
            Back
          </Text>{" "}
        </Button>
      </Box>

      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        flexWrap="nowrap"
        alignItems="start"
        justifyContent="center"
        gap={6}
        textAlign={{ base: "center", md: "left" }}
      >
        {/* Left Side - Image */}

        {/* Right Side - Text */}
        <MotionBox
          display="flex"
          flexDirection="column"
          justifyContent="center"
          // maxWidth="1000px"
          px={{ base: 4, md: 20 }} // Add padding on mobile for better spacing
          gap={{ base: 2, md: 5 }}
          initial={{ opacity: 0, x: -50 }} // Start hidden & shifted left
          animate={{ opacity: 1, x: 0 }} // Fade in & move to the original position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        >
          <MotionKbd
            bgGradient="linear(to-r, #ff7e47, #fb6d6f)"
            textColor="white"
            fontSize={{ base: "xl", md: "5xl" }}
            w="fit-content"
            px={3}
            py={1}
            initial={{ opacity: 0, x: -50 }} // Start hidden & shifted left
            animate={{ opacity: 1, x: 0 }} // Fade in & move to the original position
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          >
            Founder's Vision
          </MotionKbd>
          <Text fontSize={{ base: "md", md: "xl" }}>
            Helping people unlock their potential and bring their vision to life
            has always been my passion. I love encouraging people to uncover
            that special something within them—their unique contribution to the
            world—and supporting them in making it a reality.
          </Text>
          <Text fontSize={{ base: "md", md: "xl" }} mt={4}>
            Over the years, this passion has led me to help in all sorts of
            ways. Whether it was encouraging young people to dream big during my
            time as a youth worker, becoming a photographer during the rise of a
            friend’s band, or designing labels for the mango pepper sauce of my
            favourite Caribbean street food vendor, I’ve always found joy in
            seeing others succeed.
          </Text>
        </MotionBox>
        <Image
          src="/landingpage/founder.jpg"
          width={{ base: "300px", md: "400px" }} // Full width on mobile, fixed on desktop
          height={{ base: "300px", md: "400px" }} // Auto height on mobile, fixed on desktop
          objectFit="cover" // Ensures the image scales correctly
          rounded="xl"
          mx="auto"
        />
      </Box>

      <Box px={{ base: 4, md: 20 }}>
        <Text
          fontSize={{ base: "md", md: "xl" }}
          fontStyle="italic"
        >
          A recurring challenge I’ve witnessed is this: how can small businesses
          or creators bring their ideas to the market sustainably, without a
          massive advertising budget? That question became the driving force
          behind <Kbd bgColor="#ff7e47" color="white"  >Popin</Kbd>—a platform built to level the playing
          field for small businesses, creators, and entrepreneurs.
        </Text>
      </Box>
      <Box>
        <Box display="flex" justifyContent="center" p={2}>
          <MotionKbd
            bgGradient="linear(to-r, #ff7e47, #fb6d6f)"
            textColor="white"
            fontSize={{ base: "xl", md: "4xl" }}
            w="fit-content"
            px={3}
            py={1}
            rounded="md"
            initial={{ opacity: 0, x: -50 }} // Start from the left and invisible
            whileInView={{ opacity: 1, x: 0 }} // Animate into view
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          >
            The Spark Behind Popin
          </MotionKbd>
        </Box>
        
        <Text px={{ base: 4, md: 20 }} fontSize={{ base: "md", md: "xl" }}>
          Over the past 20 years, I’ve worked in technology across a range of
          industries, from charitable organisations to corporate giants like
          Visa. These experiences have shaped my understanding of innovation,
          community, and how technology can empower people when used
          thoughtfully.
        </Text>
        <Text px={{ base: 4, md: 20 }} fontSize={{ base: "md", md: "xl" }}>
          My inspiration for <Kbd bgColor="#ff7e47" color="white"  >Popin</Kbd> came during my time working on Lower Marsh in
          Waterloo, home to one of the oldest markets in the country. The market
          was alive with creativity and culture—street food vendors sharing
          recipes and flavours, artisans showcasing their craftsmanship, and
          communities gathering to celebrate their passions.
        </Text>
        <Text px={{ base: 4, md: 20 }} fontSize={{ base: "md", md: "xl" }}>
          While I loved the vibrancy of the market, I couldn’t help but notice a
          challenge: not everyone knew when or where to find these amazing
          businesses. The excitement of these moments often passed unnoticed by
          many, only for people to discover them later on social media—the
          afterglow of local excitement.
        </Text>
        <Text px={{ base: 4, md: 20 }} fontSize={{ base: "md", md: "xl" }}>
          This realisation sparked an idea: what if there were a way to connect
          people to the exciting things happening around them in real time? And
          what if small businesses didn’t need huge advertising budgets to reach
          their community? That’s where <Kbd bgColor="#ff7e47" color="white"  >Popin</Kbd> was born—a platform that
          seamlessly connects the physical to the digital, helping people
          discover what’s <Kbd bgColor="#ff7e47" color="white"  >"Popin"</Kbd> around them effortlessly.
        </Text>
      </Box>
      <Box>
        <Box display="flex" justifyContent="center" p={2}>
          <MotionKbd
            bgGradient="linear(to-r, #ff7e47, #fb6d6f)"
            textColor="white"
            fontSize={{ base: "xl", md: "4xl" }}
            w="fit-content"
            px={3}
            py={1}
            rounded="md"
            initial={{ opacity: 0, x: -50 }} // Start from the left and invisible
            whileInView={{ opacity: 1, x: 0 }} // Animate into view
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          >
            A Vision for the Future
          </MotionKbd>
        </Box>
        <Text px={{ base: 4, md: 20 }} fontSize={{ base: "md", md: "xl" }}>
          At its core, <Kbd bgColor="#ff7e47" color="white"  >Popin</Kbd> is about creating connections. I believe that every
          product, service, or business has a natural community of
          customers—it’s just a matter of helping them find each other. <Kbd bgColor="#ff7e47" color="white"  >Popin's</Kbd>
          mission is to bridge that gap by making discovery effortless for both
          businesses and consumers.
        </Text>
        <Text px={{ base: 4, md: 20 }} fontSize={{ base: "md", md: "xl" }}>
          The platform is designed to:
        </Text>
        <UnorderedList px={{ base: 4, md: 20 }}>
          <Box
            display="flex"
            alignItems="center"
            gap={2}
            fontSize={{ base: "md", md: "xl" }}
          >
            <MotionBox  color="#ff7e47"
            initial={{ opacity: 0, x: -50 }} // Start from the left and invisible
            whileInView={{ opacity: 1, x: 0 }} // Animate into view
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
            >
            <BiRightArrow/>

            </MotionBox>
            <Text>
            Highlight the unique artistry and craftsmanship that people pour
            into their work.
            </Text>
            
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap={2}
            fontSize={{ base: "md", md: "xl" }}
          >
            <MotionBox color="#ff7e47"
            initial={{ opacity: 0, x: -50 }} // Start from the left and invisible
            whileInView={{ opacity: 1, x: 0 }} // Animate into view
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
            >

            <BiRightArrow/>
            </MotionBox>
            <Text>
            Build stronger communities by keeping money circulating locally,
            rather than funnelling it into the hands of businesses with the
            biggest ad budgets.
            </Text>
            
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap={2}
            fontSize={{ base: "md", md: "xl" }}
          >
            <MotionBox color="#ff7e47"
            initial={{ opacity: 0, x: -50 }} // Start from the left and invisible
            whileInView={{ opacity: 1, x: 0 }} // Animate into view
            transition={{ duration: 1.2, ease: "easeOut" }} // Smooth transition
            >
            <BiRightArrow/>

            </MotionBox>
            <Text>
            Empower entrepreneurs to focus on what they do best—creating—while
            <Kbd bgColor="#ff7e47" color="white"  >Popin</Kbd> helps them build their community and grow their reach.
            </Text>
            
          </Box>
        </UnorderedList>
        <Text px={{ base: 4, md: 20 }} fontSize={{ base: "md", md: "xl" }}>
          I want <Kbd bgColor="#ff7e47" color="white"  >Popin</Kbd> to be a place where businesses thrive because of their
          creativity, innovation, and dedication—not because they can outspend
          the competition.
        </Text>
      </Box>
      <Box>
        <Box display="flex" justifyContent="center" p={2}>
          <MotionKbd
            bgGradient="linear(to-r, #ff7e47, #fb6d6f)"
            textColor="white"
            fontSize={{ base: "xl", md: "4xl" }}
            w="fit-content"
            px={3}
            py={1}
            rounded="md"
            initial={{ opacity: 0, x: -50 }} // Start from the left and invisible
            whileInView={{ opacity: 1, x: 0 }} // Animate into view
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          >
            What Drives Me
          </MotionKbd>
        </Box>
        <Text px={{ base: 4, md: 20 }} fontSize={{ base: "md", md: "xl" }}>
          At the heart of <Kbd bgColor="#ff7e47" color="white"  >Popin</Kbd> is my belief in family. To me, family means
          connection, support, and shared growth. These are the same values I
          want <Kbd bgColor="#ff7e47" color="white"  >Popin</Kbd> to embody—a space where small businesses and their
          customers feel like they’re part of a community that supports and
          uplifts them.
        </Text>
        <Text px={{ base: 4, md: 20 }} fontSize={{ base: "md", md: "xl" }}>
          I’m also deeply motivated by my view of innovation as a force for
          good. I see AI not as a replacement for human ingenuity, but as a tool
          to enhance it. With <Kbd bgColor="#ff7e47" color="white"  >Popin</Kbd>, I want to show how technology can empower
          entrepreneurs to focus on their artistry, their craftsmanship, and
          what makes them unique, while we take care of connecting them to their
          community.
        </Text>
      </Box>
    </Box>
  );
};

export default FounderVision;

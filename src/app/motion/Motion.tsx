"use client";
import {
  Box,
  ChakraProvider,
  extendTheme,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import GradientText from "../components/Text";
import AnimatedGradientText from "../components/AnimatedText";
import Gallery from "../components/Gallery";
import Pillars from "../components/Pillars";
import PricingTable from "../components/Pricing";
import FAQSection from "../components/Faqs";

// Custom theme for smooth animations
const theme = extendTheme({
  styles: {
    global: {
      body: {
        transition: "background 0.5s ease-in-out",
      },
    },
  },
});

// Motion Wrapper
const MotionBox = motion(Box);

export default function LandingComponent() {
  const ownerText = "Be found by customers seeking experiences and local";
  const customerText = "Discover unique experiences and uncover amazing";

  const [introText, setIntroText] = useState(
    "Discover unique experiences and uncover amazing"
  );

  useEffect(() => {
    const texts = [ownerText, customerText];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length; // Toggle between 0 and 1
      setIntroText(texts[index]);
    }, 7000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box transition="background 10s ease" background="white">
        {/* Animated Section 1 */}
        <MotionBox
          p="80px 200px"
          textAlign="center"
          fontSize="60px"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          after={{ opacity: 0, x: 50, scale: 0 }}
          transition={{ duration: 1 }}
        >
          <Heading
            as="h6"
            fontWeight={500}
            lineHeight="1.2" // Reduced line height
            fontSize="60px" // Use `fontSize` instead of `size`
            color="black"
            textAlign="center"
            display="inline-block"
          >
            {introText}{" "}
            <Text
              fontSize="60px"
              fontWeight={500}
              bgGradient="linear(to-r, #ff7e47, #fb6d6f)"
              bgClip="text"
              display="inline"
            >
              pop-ups!
            </Text>
          </Heading>

          <Text
            fontSize="23px"
            paddingTop={4}
            color="#726F6F"
            mt={2}
            textAlign="center"
            width={["100%", "80%"]}
            mx="auto"
          >
            The ultimate platform for pop-ups and local experiences, Popin
            connects consumers through real-time, location-based advertising
          </Text>
          <Box
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              width: "30%",
              margin: "0px auto",
            }}
          >
            <Button
              bgGradient="linear(to-r, #ff7e47, #fb6d6f)"
              marginTop={8}
              textColor="white"
              mx="auto"
              px={6}
              py={3}
              fontSize="lg"
              fontWeight="bold"
              borderRadius="md"
              transition="all 0.3s ease-in-out"
              _hover={{
                bgGradient: "linear(to-r, #fb6d6f, #ff7e47)", // Reverse gradient on hover
                transform: "scale(1.05)", // Slightly enlarge the button
                boxShadow: "0px 4px 15px rgba(255, 126, 71, 0.4)", // Glowing effect
              }}
              _active={{
                transform: "scale(0.98)", // Slight press-down effect when clicked
              }}
            >
              Access Popin
            </Button>
          </Box>
          {/* <Text
            fontSize="lg"
            paddingTop={20}
            color="black"
            mt={2}
            textAlign="center"
            width={["100%", "50%"]}
            mx="auto"
          >
            Popin is the ultimate platform that connects communities with
            unique, local pop-ups and experiences in real time.
          </Text> */}
        </MotionBox>
        
        <MotionBox
          p={10}
          textAlign="center"
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          after={{ opacity: 0, x: 50, scale: 0 }}
          transition={{ duration: 1 }}
        >
          <Box display="flex" width="100%" justifyContent="center">
          <Image
                src="/orangeglow.png"
                alt="Landing Image"
                style={{
                  objectFit: "cover",
                }}
              />
          </Box>
            
            <Box >
              <Image
                src="/bannermap.jpg"
                alt="Landing Image"
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          
        </MotionBox>
        <Box
          style={{
            position: "relative",
            overflow:"hidden",
            width:'100%',
            scale:1.05
          }}
          right="60px"
          margin={10}
          padding="30px 30px"
        >
          <Box
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              scale: "1.1",
              zIndex: "+1",
            }}
          // bgGradient="linear(to-r,rgba(255, 126, 71, 0.69),rgba(251, 109, 111, 0.14))"
          ></Box>
          <Box
          
            style={{
              height: "50%",
              width: "50%",
              scale: "1.1",
              zIndex: "+1",
              // transform:"rotate(200deg)",
              borderRadius: "100% 100% 100% 100%",
              top:"50px"
            }}
            position="absolute"
            left="-100px"
            top={10}
            // bgGradient="linear(to-r,rgba(255, 126, 71, 0.63),rgba(251, 109, 111, 0.78))"
            // backgroundColor="white"
          ></Box>
          <Box position="absolute" zIndex={+10} top={0}>

          <Image src="topleftwhite.png"/>
          </Box>
          <Box position="absolute" zIndex={+10} top={0} left={50}>

          <Image src="topleftwhite.png"/>
          </Box>
          <Box position="absolute" zIndex={+10} top={0} left={50} >

          <Image src="topleftwhite.png"/>
          </Box>
          <Box position="absolute" zIndex={+10} top={0} left={50} >

          <Image src="topleftwhite.png"/>
          </Box>
          <Gallery />
          <Box
            position="absolute"
            zIndex={10}
            left="100px"
            top={10}
            // backgroundColor="white"
            // bgGradient="linear(to-r,rgba(255, 126, 71, 0.33),rgba(251, 109, 111, 0.3))"
            width={400}
          >
           <Text
              fontSize="20px"
              fontWeight={500}
              // bgGradient="linear(to-r, #ff7e47, #fb6d6f)"
              // bgClip="text"
              color="#ff7e47"
              display="inline"
            >
              Popin is the real-time advertising platform for pop-up businesses. It empowers owners to create a flexible business profile, share their location effortlessly, and connect with customers instantly.
            </Text>
            <br />
            <Text
              fontSize="20px"
              fontWeight={500}
              // bgGradient="linear(to-r, #ff7e47, #fb6d6f)"
              // bgClip="text"
              color="gray"
              display="inline"
            >
             For consumers, it’s the easiest way to discover what’s happening right now—unique experiences, nearby and in the moment.
             
            </Text>
            <br />
            <Button
              bgGradient="linear(to-r, #ff7e47, #fb6d6f)"
              marginTop={7}
              textColor="white"
              mx="auto"
              px={6}
              py={3}
              fontSize="lg"
              fontWeight="bold"
              borderRadius="md"
              transition="all 0.3s ease-in-out"
              _hover={{
                bgGradient: "linear(to-r, #fb6d6f, #ff7e47)", // Reverse gradient on hover
                transform: "scale(1.05)", // Slightly enlarge the button
                boxShadow: "0px 4px 15px rgba(255, 126, 71, 0.4)", // Glowing effect
              }}
              _active={{
                transform: "scale(0.98)", // Slight press-down effect when clicked
              }}
            >
             Browse Popins
            </Button>
          </Box>
          
        </Box>

        <PricingTable/>
        <FAQSection/>
        {/* <Pillars/> */}
        <MotionBox
          p={10}
          textAlign="center"
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          after={{ opacity: 0, x: 50, scale: 0 }}
          transition={{ duration: 1 }}
        >
          <Text
            mt={40}
            p={20}
            textAlign="center"
            fontSize="2xl"
            initial={{ opacity: 0, x: -50, scale: 0 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            after={{ opacity: 0, x: 50, scale: 0 }}
            transition={{ duration: 1 }}
          >
            What is popin?
          </Text>
          <Text fontSize="lg" color="black" width={["100%", "70%"]} mx="auto">
            It’s the platform that helps you be discovered, connect with
            customers, and thrive in the moment. Whether you're serving
            crave-worthy eats, showcasing unique goods, or hosting unforgettable
            events, Popin puts your pop-up on the map—literally.
          </Text>
        </MotionBox>
        <MotionBox
          textAlign="center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          after={{ opacity: 0, x: 50, scale: 0 }}
          transition={{ duration: 1 }}
        >
          <Button backgroundColor="#ff7e47" textColor="white" mx="auto">
            Learn More
          </Button>
        </MotionBox>







        {/* Animated Section 2 */}
        <MotionBox
          mt={40}
          p={20}
          textAlign="center"
          fontSize="2xl"
          initial={{ opacity: 0, x: -50, scale: 0 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          after={{ opacity: 0, x: 50, scale: 0 }}
          transition={{ duration: 1 }}
        >
          Smooth Animations with Framer Motion
        </MotionBox>

        {/* Animated Section 3 */}
        <MotionBox
          mt={40}
          p={20}
          textAlign="center"
          fontSize="2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          after={{ opacity: 0, x: 50, scale: 0.6 }}
          transition={{ duration: 1 }}
        >
          Scroll Down for More Effects
        </MotionBox>
        <MotionBox
          mt={40}
          p={20}
          textAlign="center"
          fontSize="2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          after={{ opacity: 0, x: 50, scale: 0.6 }}
          transition={{ duration: 1 }}
        >
          Scroll Down for More Effects
        </MotionBox>
        <MotionBox
          mt={40}
          p={20}
          textAlign="center"
          fontSize="2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          after={{ opacity: 0, x: 50, scale: 0.6 }}
          transition={{ duration: 1 }}
        >
          Scroll Down for More Effects
        </MotionBox>
      </Box>
    </ChakraProvider>
  );
}

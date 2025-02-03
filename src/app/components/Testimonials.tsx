"use client";

import { Box, Text,  VStack, HStack, SimpleGrid, useColorModeValue } from "@chakra-ui/react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
    name: "Devon Lane",
    role: "Account Assistant",
    avatar: "/avatars/avatar1.png",
  },
  {
    quote:
      "Rareblocks makes it super easy to see which kinds of tweets perform best for whatever metric I’m optimizing for.",
    name: "Marvin McKinney",
    role: "Project Manager",
    avatar: "/avatars/avatar2.png",
  },
  {
    quote:
      "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
    name: "Bessie Cooper",
    role: "President of Sales",
    avatar: "/avatars/avatar3.png",
  },
  {
    quote:
      "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
    name: "Guy Hawkins",
    role: "Marketing Coordinator",
    avatar: "/avatars/avatar4.png",
  },
];

export default function Testimonials() {
  const bg = useColorModeValue("white", "gray.900"); // Light/Dark Mode Background
  const cardBg = useColorModeValue("base.100", "gray.800"); // Light/Dark Mode Card Background
  const quotebg = useColorModeValue("cream.900", "gray.700")
  return (
    <Box py={12} px={6} bg={bg}>
      {/* Title */}
      <Text fontSize={["2xl", "3xl"]} fontWeight="bold" textAlign="center" mb={8} textColor="#ff7e47">
        What Users say about Popin
      </Text>

      {/* Grid Layout for Testimonials */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} maxW="1000px" mx="auto">
        {testimonials.map((testimonial, index) => (
          <VStack key={index} bg={cardBg} p={6} borderRadius="xl" shadow="md" align="start" spacing={4}  minHeight={200}>
            <Text fontSize="md" fontStyle="italic" bg={quotebg} padding={3} borderRadius="xl">“{testimonial.quote}”</Text>
            <HStack spacing={3} pt={5}>
              {/* <Avatar name={testimonial.name} src={testimonial.avatar} size="sm" /> */}
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">{testimonial.name}</Text>
                <Text fontSize="sm" color="gray.500">
                  {testimonial.role}
                </Text>
              </VStack>
            </HStack>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}

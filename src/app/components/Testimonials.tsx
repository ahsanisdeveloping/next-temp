

"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";
import { TestimonialCard } from "./TestimonialCard";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

// Dummy Testimonials Data
const testimonials = [
  {
    author: "Alice Johnson",
    quote: "Popin revolutionized how we reach customers on the go! The visibility boost is phenomenal.",
    title: "Founder",
    company: "Alice’s Popups",
  },
  {
    author: "Michael Brown",
    quote: "Easy to set up and instantly effective! A must-have for any pop-up business.",
    title: "Marketing Director",
    company: "Urban Eats",
  },
  {
    author: "Samantha Green",
    quote: "The real-time location feature is a game changer! Customers find us effortlessly.",
    title: "Operations Manager",
    company: "Foodie Spot",
  },
  {
    author: "David Martinez",
    quote: "Love the flexibility! I can schedule pop-ups anytime and attract the right audience.",
    title: "Owner",
    company: "Streetwear X",
  },
  {
    author: "Emma Wilson",
    quote: "Popin helped us gain exposure like never before! Traffic has doubled in the last month.",
    title: "CEO",
    company: "Eco Popups",
  },
  {
    author: "James Anderson",
    quote: "The analytics tools are spot on. Now we know exactly where our customers are!",
    title: "Business Consultant",
    company: "Retail Boost",
  },
  {
    author: "Olivia Taylor",
    quote: "Super user-friendly! I was able to get started in minutes and start attracting customers.",
    title: "Pop-Up Artist",
    company: "Olivia’s Art Hub",
  },
  {
    author: "Daniel Lee",
    quote: "Great support team and an intuitive platform. Highly recommended for pop-up businesses!",
    title: "General Manager",
    company: "Street Delights",
  },
  {
    author: "Sophia Rodriguez",
    quote: "A seamless way to connect with customers in real-time. Couldn’t ask for more!",
    title: "Marketing Lead",
    company: "Pop Culture Events",
  },
  {
    author: "William Clark",
    quote: "The ultimate tool for pop-up success. We’ve seen a 300% increase in engagement!",
    title: "Event Coordinator",
    company: "City Nights",
  },
];

const MotionBox = motion(Box);

export const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();

  // 🏃 Start animation loop
  const startAnimation = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    });
  };

  // ⏸️ Pause animation when hovered
  const pauseAnimation = async () => {
    await controls.stop();
  };

  // 🎨 Dark Mode Styles
  const bg = useColorModeValue("white", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box overflow="hidden" py={12} bg={bg}>
      <MotionBox
        display="flex"
        gap={6}
        minW="300%" // Ensures smooth infinite scrolling
        animate={controls}
        onMouseEnter={pauseAnimation} // Stop movement
        onMouseLeave={startAnimation} // Restart smoothly
      >
        {/* Duplicate testimonials to create an infinite scrolling effect */}
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} data={testimonial} />
        ))}
      </MotionBox>
    </Box>
  );
};



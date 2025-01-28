"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import LandingMap from "../components/LandingMap";
import LandingGallery from "../components/LandingGallery";
import PricingTable from "../components/Pricing";
import FAQSection from "../components/Faqs";
import Testimonials from "../components/Testimonials";
import Pillars from "../components/Pillars";
import HowItWorks from "../components/HowItWorks";

const LandingPage = () => {
  // 🌙 Dark Mode Support
  const bg = useColorModeValue("white", "gray.900");

  return (
    <Box bg={bg} transition="background 0.3s ease-in-out">
      <Navbar />
      <Banner />
      <LandingMap />
      <LandingGallery />
      <HowItWorks/>
      <Pillars/>
      <PricingTable />
      <FAQSection />
      <Testimonials/>
    </Box>
  );
};

export default LandingPage;

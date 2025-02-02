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
import BusinessOnMap from "../components/BusinessOnMap";
import { useRef } from "react";
import FeatureTabs from "../components/TestHIW";
import Business from "../components/TestBOM";
import OldHIW from "../components/HIWOld";

const LandingPage = () => {
  const pricingRef = useRef(null);
  // 🌙 Dark Mode Support
  const bg = useColorModeValue("white", "gray.900");

  return (
    <Box bg={bg} transition="background 0.3s ease-in-out">
      <Navbar pricingRef={pricingRef}/>
      <Banner />
      <LandingMap />
      <LandingGallery />
      <FeatureTabs/>
      {/* <HowItWorks/> */}
      <Business/>
      <BusinessOnMap/>
      <Pillars/>
      <Box ref={pricingRef}>
        <PricingTable />
      </Box>
      <FAQSection />
      <Testimonials/>
    </Box>
  );
};

export default LandingPage;

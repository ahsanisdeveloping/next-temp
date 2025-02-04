"use client";

import { useEffect, useState } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import LandingMap from "../components/LandingMap";
import LandingGallery from "../components/LandingGallery";
import PricingTable from "../components/Pricing";
import FAQSection from "../components/Faqs";
import Testimonials from "../components/Testimonials";
import Pillars from "../components/Pillars";
import { useRef } from "react";
import FeatureTabs from "../components/HowItWorks";
import Business from "../components/BusinessOnMap";
import Preloader from "../components/Preloader"; // ✅ Import Preloader

const LandingPage = () => {
  const [showContent, setShowContent] = useState(false);
  const pricingRef = useRef(null);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only run on client-side
      const hasVisited = sessionStorage.getItem("hasVisited");

      if (!hasVisited) {
        sessionStorage.setItem("hasVisited", "true"); // Mark the session
        setTimeout(() => setShowContent(true), 3000); // Show content after 3s
      } else {
        setShowContent(true); // Skip preloader if visited before
      }
    }
  }, []);

  // 🌙 Dark Mode Support
  const bg = useColorModeValue("white", "gray.900");

  return (
    <Box bg={bg} transition="background 0.3s ease-in-out">
      {!showContent ? (
        <Preloader onComplete={() => setShowContent(true)} /> // ✅ Show Preloader Only for Landing Page
      ) : (
        <>
          <Navbar pricingRef={pricingRef} />
          <Banner />
          <LandingMap />
          <LandingGallery />
          <FeatureTabs />
          <Business />
          <Pillars />
          <Box ref={pricingRef}>
            <PricingTable />
          </Box>
          <FAQSection />
          <Testimonials />
        </>
      )}
    </Box>
  );
};

export default LandingPage;

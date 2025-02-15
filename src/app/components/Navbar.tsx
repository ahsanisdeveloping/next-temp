"use client";

import {
  Box,
  HStack,
  Link,
  IconButton,
  Button,
  Stack,
  Image,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { MutableRefObject } from "react";

const Links = ["Home", "Pricing", "Blogs", "Contact"];
interface NavbarProps {
  pricingRef: MutableRefObject<HTMLDivElement | null>; // Reference to a div
}
export default function Navbar({pricingRef}:NavbarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  // 🌙 Dark Mode Colors
  const bg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const hoverBg = useColorModeValue("gray.200", "gray.700");
  const gradientColor = "linear(to-r, #ff7e47, #fb6d6f)";
  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box bg={bg} px={6} py={4} boxShadow="md">
      <Box display="flex" h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Box width={["80px", "100px"]}>
          <Image src="/landingpage/popinlogoorange.png" alt="Popin Logo" width="100%" height="auto" />
        </Box>

        {/* Desktop Navigation */}
        <HStack as="nav" spacing={6} display={{ base: "none", md: "flex" }}>
        <Link
              position="relative"
              fontSize="lg"
              fontWeight={400}
              color={textColor}
              _hover={{ textDecoration: "none",_after: {
                transform: "scaleX(1)", // Expand gradient border on hover
              }, }}
              _after={{
                content: '""',
                position: "absolute",
                left: 0,
                bottom: "-3px",
                width: "100%",
                height: "2px",
                bgGradient: gradientColor, // Gradient underline effect
                transform: "scaleX(0)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              Home
            </Link>
            <Link
              position="relative"
              fontSize="lg"
              fontWeight={400}
              color={textColor}
              _hover={{ textDecoration: "none",_after: {
                transform: "scaleX(1)", // Expand gradient border on hover
              }, }}
              _after={{
                content: '""',
                position: "absolute",
                left: 0,
                bottom: "-3px",
                width: "100%",
                height: "2px",
                bgGradient: gradientColor, // Gradient underline effect
                transform: "scaleX(0)",
                transition: "transform 0.3s ease-in-out",
              }}
              // href={`/${link.toLowerCase()}`}
              onClick={scrollToPricing}
            >
              Pricing
            </Link>
            <Link
              position="relative"
              fontSize="lg"
              fontWeight={400}
              color={textColor}
              _hover={{ textDecoration: "none",_after: {
                transform: "scaleX(1)", // Expand gradient border on hover
              }, }}
              _after={{
                content: '""',
                position: "absolute",
                left: 0,
                bottom: "-3px",
                width: "100%",
                height: "2px",
                bgGradient: gradientColor, // Gradient underline effect
                transform: "scaleX(0)",
                transition: "transform 0.3s ease-in-out",
              }}
              href={`/foundersvision`}
            >
              Founder&apos;s Vision
            </Link>
            <Link
              position="relative"
              fontSize="lg"
              fontWeight={400}
              color={textColor}
              _hover={{ textDecoration: "none",_after: {
                transform: "scaleX(1)", // Expand gradient border on hover
              } }}
              _after={{
                content: '""',
                position: "absolute",
                left: 0,
                bottom: "-3px",
                width: "100%",
                height: "2px",
                bgGradient: gradientColor, // Gradient underline effect
                transform: "scaleX(0)",
                transition: "transform 0.3s ease-in-out",
              }}
              // href={`/${link.toLowerCase()}`}
            >
              Contact
            </Link>
          {/* Theme Toggle Button */}
          <Button onClick={toggleColorMode} variant="ghost"  >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Box>

      {/* Mobile Navigation */}
      {isOpen && (
        <Box pb={4} display={{ md: "none" }} bg={bg} borderRadius="md">
          <Stack as="nav" spacing={4}>
          <Link
              position="relative"
              fontSize="lg"
              fontWeight={400}
              color={textColor}
              _hover={{ textDecoration: "none",_after: {
                transform: "scaleX(1)", // Expand gradient border on hover
              }, }}
              _after={{
                content: '""',
                position: "absolute",
                left: 0,
                bottom: "-3px",
                width: "100%",
                height: "2px",
                bgGradient: gradientColor, // Gradient underline effect
                transform: "scaleX(0)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              Home
            </Link>
            <Link
              position="relative"
              fontSize="lg"
              fontWeight={400}
              color={textColor}
              _hover={{ textDecoration: "none",_after: {
                transform: "scaleX(1)", // Expand gradient border on hover
              }, }}
              _after={{
                content: '""',
                position: "absolute",
                left: 0,
                bottom: "-3px",
                width: "100%",
                height: "2px",
                bgGradient: gradientColor, // Gradient underline effect
                transform: "scaleX(0)",
                transition: "transform 0.3s ease-in-out",
              }}
              // href={`/${link.toLowerCase()}`}
              onClick={scrollToPricing}
            >
              Pricing
            </Link>
            <Link
              position="relative"
              fontSize="lg"
              fontWeight={400}
              color={textColor}
              _hover={{ textDecoration: "none",_after: {
                transform: "scaleX(1)", // Expand gradient border on hover
              }, }}
              _after={{
                content: '""',
                position: "absolute",
                left: 0,
                bottom: "-3px",
                width: "100%",
                height: "2px",
                bgGradient: gradientColor, // Gradient underline effect
                transform: "scaleX(0)",
                transition: "transform 0.3s ease-in-out",
              }}
              href={`/foundersvision`}
            >
              Founder&apos;s Vision
            </Link>
            <Link
              position="relative"
              fontSize="lg"
              fontWeight={400}
              color={textColor}
              _hover={{ textDecoration: "none",_after: {
                transform: "scaleX(1)", // Expand gradient border on hover
              } }}
              _after={{
                content: '""',
                position: "absolute",
                left: 0,
                bottom: "-3px",
                width: "100%",
                height: "2px",
                bgGradient: gradientColor, // Gradient underline effect
                transform: "scaleX(0)",
                transition: "transform 0.3s ease-in-out",
              }}
              // href={`/${link.toLowerCase()}`}
            >
              Contact
            </Link>
            {/* Theme Toggle Button */}
            <Button onClick={toggleColorMode} variant="ghost"  >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
}

"use client";

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
  Image
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Links = ["Home", "Pricing", "Blogs", "Contact"];

const NavLink = ({ children }: { children: string }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={`#${children.toLowerCase()}`}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box background="white " style={{padding:"10px 25px"}}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* Logo or Brand Name */}
        <Box width="100px" height="auto"> {/* Adjust width here */}
      <Image
        src="/popinlogoorange.png"
        alt="Popin Logo"
        layout="intrinsic" // Maintains aspect ratio automatically
        width={300} // Original image width
        height={100} // Original image height
      />
    </Box>

        {/* Desktop Navigation */}
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
        {Links.map((link) => (
        <Link
          key={link}
          position="relative"
          fontSize="lg"
          fontWeight={400}
          color="gray.700"
          // _hover={{ textDecoration: "none" }}
          _after={{
            content: '""',
            position: "absolute",
            left: 0,
            bottom: "-3px",
            width: "100%",
            height: "2px",
            bgGradient: "linear(to-r, #ff7e47, #fb6d6f)", // Apply gradient
            transform: "scaleX(0)",
            transition: "transform 0.3s ease-in-out",
          }}
          _hover={{
            _after: {
              transform: "scaleX(1)", // Expand gradient border on hover
            },
          }}
        >
          {link}
        </Link>
      ))}
          {/* Theme Toggle Button */}
          <Button onClick={toggleColorMode} variant="ghost">
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile Navigation */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            {/* Theme Toggle Button */}
            <Button onClick={toggleColorMode} variant="ghost">
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

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

const Links = ["Home", "About", "Services", "Contact"];

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
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* Logo or Brand Name */}
        <Box fontWeight={"bold"}><Image src="/popinlogoorange.png" alt="Popin Logo" width={120} height={40} /></Box>

        {/* Desktop Navigation */}
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
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

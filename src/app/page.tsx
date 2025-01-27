"use client"
import { extendTheme,ChakraProvider } from "@chakra-ui/react";
import LandingPage from "./pages/LandingPage";
const theme = extendTheme({
  styles: {
    global: {
      body: {
        transition: "background 0.5s ease-in-out",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        _focus: { boxShadow: "none" },
        _focusVisible: { boxShadow: "none" },
      },
    },
    Link: {
      baseStyle: {
        _focus: { boxShadow: "none" },
        _focusVisible: { boxShadow: "none" },
      },
    },
    Tag: {
      baseStyle: {
        _focus: { boxShadow: "none" },
        _focusVisible: { boxShadow: "none" },
      },
    },
    AccordionButton: {
      baseStyle: {
        _focus: { boxShadow: "none" },
        _focusVisible: { boxShadow: "none" },
      },
    },
    AccordionItem: {
      baseStyle: {
        _focus: { boxShadow: "none" },
        _focusVisible: { boxShadow: "none" },
      },
    },
  },
});
export default function Home() {
  return (
    <ChakraProvider theme={theme}>
    <LandingPage/>
    </ChakraProvider>
  );
}

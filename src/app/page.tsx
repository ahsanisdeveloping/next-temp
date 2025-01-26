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
});
export default function Home() {
  return (
    <ChakraProvider theme={theme}>
    <LandingPage/>
    </ChakraProvider>
  );
}

import { Outlet } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";

import Header from "./../components/elements/header";
import Footer from "./../components/elements/footer";

export default function Pages() {
  return (
    <ChakraProvider>
      <Header />
      <Box pt={"24"}>
        <Outlet />
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

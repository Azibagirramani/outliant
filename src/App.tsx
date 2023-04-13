import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Pages from "./pages/index";

function App() {
  const colors = {
    black: {
      50: "#636262",
    },
    gray: {
      50: "#C4C4C4",
      40: "#9D9D9D",
      30: "#ECECEC",
    },
  };
  const theme = extendTheme({ colors });
  return (
    <ChakraProvider theme={theme}>
      <Pages />
    </ChakraProvider>
  );
}

export default App;

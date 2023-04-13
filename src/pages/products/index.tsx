import { Box, Flex } from "@chakra-ui/react";
import Details from "./elements/product/details";
import Form from "./elements/product/form";

export default function Page(): JSX.Element {
  return (
    <Flex
      margin={"auto"}
      width={"full"}
      maxWidth={"5xl"}
      justifyContent={"space-between"}
      gap={"20"}
    >
      <Box flex={1}>
        <Details />
      </Box>
      <Box flex={0.8}>
        <Form />
      </Box>
    </Flex>
  );
}

import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export default function SecondLayer() {
  return (
    <Grid
      transition={"0.9s all ease"}
      height={{ base: "auto", md: "lg" }}
      templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
      gap={"10"}
      margin={"auto"}
      width={"full"}
      maxWidth={"5xl"}
      px={{ base: "5", lg: 0 }}
      mb={{ base: "16", lg: "64" }}
      mt={{ base: "16", lg: "36" }}
    >
      <GridItem alignItems={"end"}>
        <Heading as={"h1"} fontSize={"xl"}>
          Header link
        </Heading>
        <Text fontSize={"sm"} mt={"5"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex fuga
          totam vero optio explicabo rerum, necessitatibus, laborum consectetur
          saepe ipsam distinctio
        </Text>
      </GridItem>
      <GridItem colSpan={2} rowSpan={{ base: 4, lg: 1 }}>
        <Box width={"full"} height={"full"} bg={"#C4C4C4"} />
      </GridItem>
      <GridItem alignSelf={"end"}>
        <Box>
          <Heading as={"h1"} fontSize={"xl"}>
            Header link
          </Heading>
          <Text fontSize={"sm"} mt={"5"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex fuga
            totam vero optio explicabo rerum, necessitatibus, laborum
            consectetur saepe ipsam distinctio
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
}

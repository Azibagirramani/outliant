import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import BaseButton from "../forms/BaseButton";

export default function Footer() {
  return (
    <Box
      bg={"#ECECEC"}
      height={{ base: "auto", lg: "md" }}
      mt={{ base: "10", md: "36" }}
    >
      <Stack
        transition={"0.9s all ease"}
        margin={"auto"}
        width={"full"}
        maxWidth={"5xl"}
        direction={"row"}
        spacing={"10"}
        height={{ base: "inherit" }}
        sx={{
          transform: { base: "none", lg: "translateY(-100px)" },
        }}
      >
        <Box
          width={"50%"}
          bg={"#C4C4C4"}
          height={{ base: "480px" }}
          display={{ base: "none", lg: "block" }}
        />
        <Stack
          width={{ base: "full", md: "50%" }}
          spacing={"5"}
          justifyContent={"end"}
          alignItems={"start"}
          pb={{ base: "0", lg: "10" }}
          py={{ base: "5" }}
        >
          <Heading as={"h1"} fontWeight={"bold"} fontSize={"4xl"}>
            Lorem ipsum dolor sit amet consectetur.
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            ducimus unde voluptatem
          </Text>
          <BaseButton bg={"blackAlpha.900"} textColor={"white"} size={"lg"}>
            Call to Action
          </BaseButton>
        </Stack>
      </Stack>
    </Box>
  );
}

import { Stack, Box, Heading, Text } from "@chakra-ui/react";

import BaseButton from "../../../components/forms/BaseButton";

export default function FirstLayer() {
  return (
    <Stack
      transition={"0.9s all ease"}
      margin={"auto"}
      width={"full"}
      maxWidth={"5xl"}
      direction={"row"}
      justifyContent={{ base: "center", lg: "space-between" }}
      height={{ base: "auto", md: "450px" }}
      my={{ base: 0, lg: "24" }}
      px={{ base: "5", lg: 0 }}
    >
      <Stack
        width={"full"}
        maxWidth={{ base: "full", lg: "45%" }}
        spacing={"7"}
      >
        <Heading as={"h1"} fontSize={"6xl"}>
          Lorem ipsum dolor sit amet consectetur
        </Heading>
        <Text
          textColor={"gray.500"}
          fontWeight={"semibold"}
          width={"full"}
          maxWidth={""}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus
        </Text>
        <Stack direction={{ base: "column", md: "row" }} spacing={"3"}>
          <BaseButton bg={"blackAlpha.900"} textColor={"white"} size={"lg"}>
            Call to Action
          </BaseButton>
          <BaseButton
            borderWidth={1}
            borderColor={"blackAlpha.900"}
            size={"lg"}
          >
            See Workspace
          </BaseButton>
        </Stack>
      </Stack>
      <Box
        width={"full"}
        maxWidth={"500px"}
        display={{ base: "none", lg: "flex" }}
      >
        <Box
          height={"full"}
          width={"full"}
          bg={"#C4C4C4"}
          _after={{
            content: '""',
            width: 200,
            height: 200,
            position: "absolute",
            bg: "red",
            translateY: -60,
          }}
        ></Box>
      </Box>
    </Stack>
  );
}

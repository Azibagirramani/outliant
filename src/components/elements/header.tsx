import { Box, Flex, Heading, List } from "@chakra-ui/react";
import { useLocation, Link } from "react-router-dom";

import BaseButton from "../forms/BaseButton";

type LinksProps = {
  label: string;
  pathName: string;
};
const HeaderLinks = () => {
  const links: Array<LinksProps> = [
    {
      label: "Home",
      pathName: "/",
    },
    {
      label: "Products",
      pathName: "/product",
    },
  ];
  const path = useLocation().pathname;
  return (
    <Flex
      as={"ul"}
      flexDirection={"row"}
      gap={"5"}
      display={{ base: "none", lg: "flex" }}
    >
      {links.map((link: LinksProps, k) => (
        <List
          as={"li"}
          key={k}
          fontWeight={"bold"}
          textColor={path === link.pathName ? "#636262" : "black"}
        >
          <Link to={link.pathName}>{link.label}</Link>
        </List>
      ))}
    </Flex>
  );
};

export default function Header() {
  return (
    <Box position={"fixed"} width={"full"} bg={"white"} zIndex={1}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        margin={"auto"}
        width={"full"}
        maxWidth={"5xl"}
        py={"5"}
        px={{ base: "5", lg: 0 }}
      >
        <Heading as={"h1"} fontWeight={"extrabold"} fontSize={"lg"}>
          Logo
        </Heading>
        <HeaderLinks />
        <BaseButton
          bg={"blackAlpha.900"}
          textColor={"white"}
          fontWeight={"semibold"}
        >
          Call to action
        </BaseButton>
      </Flex>
    </Box>
  );
}

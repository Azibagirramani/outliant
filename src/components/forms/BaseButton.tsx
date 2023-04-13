import { Button, ButtonProps } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

interface BaseButtonProps {
  children: ReactNode;
}

const BaseButton: FC<BaseButtonProps & ButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <Button
      size={"md"}
      fontSize={"md"}
      bg={"primary"}
      _disabled={{ bg: "parent", cursor: "busy" }}
      _hover={{
        bg: "primary",
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default BaseButton;

import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";
import type { FC } from "react";

interface BaseFormInputProps {
  label?: any;
  value: string;
}

const FormInput: FC<BaseFormInputProps & InputProps> = ({
  label,
  ...props
}) => {
  return (
    <FormControl
      borderRadius={"8px"}
      borderColor={"gray.30"}
      borderWidth={"1px"}
    >
      {label && (
        <FormLabel
          fontSize={"14px"}
          fontWeight={"300"}
          textColor={"gray.0"}
          p={0}
          m={0}
          ml={"10px"}
        >
          {label}
        </FormLabel>
      )}
      <Input
        type="tel"
        size="lg"
        focusBorderColor="transparent"
        fontSize="16px"
        fontWeight="500"
        fontStyle="normal"
        borderRadius={8}
        borderColor="primary"
        transition="0.5s ease"
        placeholder="phone number"
        onChange={() => {}}
        bg={"white"}
        {...props}
      />
    </FormControl>
  );
};

export default FormInput;

import { useState } from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";

import BaseInput from "../../../../components/forms/BaseInput";
import BaseButton from "../../../../components/forms/BaseButton";

import { addData } from "../../../../config/db";

type FormInputProps = {
  name: string;
  price: string;
};
const Form = () => {
  const [inputs, setInputs] = useState<FormInputProps>({ name: "", price: "" });

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addData(inputs);
  };
  return (
    <Stack
      bg={"#ECECEC"}
      justifyContent={"center"}
      alignItems={"center"}
      py={"8"}
    >
      <Heading as={"h1"} fontSize={"2xl"}>
        Header Text
      </Heading>
      <Text>Lorem ipsum dolor sit amet, consectetur</Text>

      <Stack
        as={"form"}
        width={"full"}
        px={"14"}
        py={"5"}
        spacing={"3"}
        onSubmit={handleSubmit}
      >
        <BaseInput
          placeholder={"Name"}
          width={"full"}
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />
        <BaseInput
          value={inputs.price}
          onChange={handleChange}
          type={"number"}
          placeholder={"Price"}
          name={"price"}
          width={"full"}
        />
        <BaseButton
          bg={"blackAlpha.900"}
          textColor={"white"}
          width={"full"}
          type={"submit"}
        >
          Call to Action
        </BaseButton>
      </Stack>
    </Stack>
  );
};

export default Form;

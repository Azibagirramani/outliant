import { useEffect, useMemo, useState } from "react";
import BaseTable from "../../../../components/tables/index";

import { getAllData } from "../../../../config/db";
import BaseInput from "../../../../components/forms/BaseInput";
import { Flex, Heading } from "@chakra-ui/react";

type ProductProps = {
  name: string;
  price: string;
};
const Details = () => {
  const [products, setProducts] = useState<Array<ProductProps>>([]);
  const [searchKey, setSearchKey] = useState<string>("");
  const getComputedUserList = useMemo(() => {
    if (!products) {
      return [{}];
    }
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
  }, [products, searchKey]);

  useEffect(() => {
    getAllData().then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"fit-content"}
        gap={"10"}
        mb={"5"}
      >
        <Heading as={"h1"} fontSize={"3xl"}>
          Products
        </Heading>
        <BaseInput
          value={searchKey}
          name={"q"}
          size={"md"}
          placeholder={"Search Keywords"}
          width={"fit-content"}
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </Flex>
      <BaseTable
        columns={["Name", "Price", "Action"]}
        rows={getComputedUserList}
      />
      ;
    </>
  );
};

export default Details;

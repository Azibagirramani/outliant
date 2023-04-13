import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState, type FC, useEffect } from "react";
import BaseInput from "../forms/BaseInput";
import BaseButton from "../forms/BaseButton";
import { updateData, deleteData } from "../../config/db";

type BaseTableProps = {
  columns: string[];
  rows: Array<any>;
};

const BaseTable: FC<BaseTableProps> = ({ columns, rows }) => {
  const [tableRows, setTableRows] = useState(rows);

  useEffect(() => {
    setTableRows(rows);
  }, [rows]);
  const handleRowChange = (
    index: number,
    fieldName: "name" | "price",
    newValue: string | number
  ) => {
    setTableRows((prevRows) =>
      prevRows.map((row, i) => {
        if (i === index) {
          return { ...row, [fieldName]: newValue };
        } else {
          return row;
        }
      })
    );
  };

  const handleNameChange = (index: number, newValue: string) => {
    handleRowChange(index, "name", newValue);
  };

  const handlePriceChange = (index: number, newValue: number) => {
    handleRowChange(index, "price", newValue);
  };

  const handleSave = ({ index, data }: { index: number; data: any }) => {
    updateData({ id: data.id, data });
    setTableRows((prevRows) =>
      prevRows.map((row, i) => {
        if (i === index) {
          return { ...row, editing: false };
        } else {
          return row;
        }
      })
    );
  };

  const handleCancel = (index: number) => {
    setTableRows((prevRows) =>
      prevRows.map((row, i) => {
        if (i === index) {
          return { ...row, editing: false };
        } else {
          return row;
        }
      })
    );
  };

  const handleEdit = (index: number) => {
    setTableRows((prevRows) =>
      prevRows.map((row, i) => {
        if (i === index) {
          return { ...row, editing: true };
        } else {
          return row;
        }
      })
    );
  };

  const handleDelete = ({ id }: { id: number }) => {
    deleteData(id);
  };
  return (
    <TableContainer>
      <Table variant="simple" borderWidth={1} borderColor={"blackAlpha.900"}>
        <Thead bg={"gray.30"}>
          <Tr>
            {columns.map((item, k) => (
              <Th key={k} fontStyle={"normal"} fontWeight={"extrabold"}>
                {item}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {tableRows.map((row, index) => (
            <Tr key={row.id}>
              <Td>
                {row.editing ? (
                  <BaseInput
                    value={row.name}
                    name={"name"}
                    type={"text"}
                    onChange={(e) => handleNameChange(index, e.target.value)}
                  />
                ) : (
                  row.name
                )}
              </Td>
              <Td isNumeric>
                {row.editing ? (
                  <BaseInput
                    value={row.price}
                    name={"price"}
                    type={"number"}
                    onChange={(e) =>
                      handlePriceChange(index, parseInt(e.target.value))
                    }
                  />
                ) : (
                  row.price
                )}
              </Td>
              <Td as={Flex} gap="4">
                {row.editing ? (
                  <>
                    <BaseButton
                      bg={"green.500"}
                      textColor={"white"}
                      onClick={() => handleSave({ index, data: row })}
                    >
                      Save
                    </BaseButton>
                    <BaseButton
                      bg={"gray.400"}
                      textColor={"white"}
                      onClick={() => handleCancel(index)}
                    >
                      Cancel
                    </BaseButton>
                  </>
                ) : (
                  <>
                    <BaseButton
                      bg={"blackAlpha.900"}
                      textColor={"white"}
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </BaseButton>
                    <BaseButton
                      borderColor="blackAlpha.900"
                      borderWidth={1}
                      onClick={() => handleDelete({ id: row.id })}
                    >
                      Delete
                    </BaseButton>
                  </>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BaseTable;

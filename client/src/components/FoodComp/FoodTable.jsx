import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const FoodTable = ({ data }) => {
  return (
    <div>
      <TableContainer mt={5} mb={10}>
        <Table variant="simple">
          <Thead>
            <Tr bgColor={"blue"}>
              <Th color={"white"}>Eating Time</Th>
              <Th color={"white"}>Calories</Th>
              <Th color={"white"}>Carbs</Th>
              <Th color={"white"}>Fat</Th>
              <Th color={"white"}>Protein</Th>
              <Th color={"white"}>Sodium</Th>
              <Th color={"white"}>Sugar</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((el) => (
              <Tr key={el._id}>
                <Td>{el.time}</Td>
                <Td>{el.foodID.Calories}</Td>
                <Td>{el.foodID.TotalCarbs}</Td>
                <Td>{el.foodID.TotalFat}</Td>
                <Td>{el.foodID.Protein}</Td>
                <Td>{el.foodID.Sodium}</Td>
                <Td>{el.foodID.Sugar}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FoodTable;

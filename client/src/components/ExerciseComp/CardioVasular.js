import React from "react";
import {
  Box,
  Flex,
  Input,
  Text,
  Table,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Thead,
  Tbody,
} from "@chakra-ui/react";

import { AiFillStop } from "react-icons/ai";
// import "../../pages/ExercisePage/exercise.css"

function CardioVasular() {
  return (
    <Box
    // border="1px solid red"
    >
      <TableContainer>
        <Table variant="simple">
          <TableCaption textAlign="start" borderBottom="1px solid lightgrey" >
            <Flex gap="1" >
              <Text fontSize="15px" 
              fontWeight='bold'
              color="#0072BF">
                Add Text
              </Text>
              <Text fontSize="13px" color="#0072BF">
                |
              </Text>
              <Text fontSize="15px"
              fontWeight='bold'
              color="#0072BF">
                Quick Tools
              </Text>
            </Flex>
          </TableCaption>
          <Thead>
            <Tr borderBottom="1px solid #e6e6e6">
              <Th
                w="60%"
                fontSize="18px"
                fontWeight="bold"
                textTransform="capitalize"
                color="#00548F"
              >
                Cardiovascular
              </Th>
              <Th
                background="#00548f"
                textAlign="center"
                color="#ffffff"
                borderRight="2px solid white"
              >
                Minutes
              </Th>
              <Th background="#00548f" color="#ffffff" isNumeric>
                Calories Burned
              </Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr
              borderBottom="1px solid #e6e6e6"
              backgroundColor="#f6f6f6"
              color="black"
            >
              <Td borderRight="2px solid white">inches</Td>
              <Td isNumeric borderRight="2px solid white"
              textAlign={"center"}
              >
               5
              </Td>
              <Td borderRight="2px solid white"
              textAlign={"center"}>25.4</Td>

              <Td>
                <Text fontWeight="extrabold" color="red" borderRadius="50%">
                  <AiFillStop />
                </Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CardioVasular;
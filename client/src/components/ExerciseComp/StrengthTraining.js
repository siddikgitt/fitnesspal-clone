import React from 'react'
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

function StrengthTraining() {
  return (
    <Box gap='1' >
        <TableContainer>
    <Table>
      <TableCaption textAlign='start' borderBottom='1px solid lightgrey' >
        <Flex    >
       <Text   fontSize='13px'  color= '#0072BF'>Add Text</Text>
       <Text fontSize='13px'  color= '#0072BF'>|</Text>
       <Text fontSize='13px'  color= '#0072BF'>Quick Tools</Text>
        </Flex>
      </TableCaption>
      <Thead>
        <Tr  borderBottom="1px solid #e6e6e6">
          <Th w="70%" fontSize='18px' fontWeight="bold" textTransform='capitalize'
          color='#00548F' >Strength Training</Th>
          <Th background="#00548F" color="#ffffff">Sets</Th>
          <Th background="#00548F" color="#ffffff" isNumeric>
           Reps/Sets
          </Th>
          <Th background="#00548F" color="#ffffff" isNumeric>
            Weight/Sets
          </Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr borderBottom="1px solid #e6e6e6"
         backgroundColor="#f6f6f6"
       
                      color="black">
          <Td>push ups</Td>
          <Td> 10</Td>
          <Td isNumeric>25.4</Td>
          <Td isNumeric>25.4</Td>

          <Td>
          <Text fontWeight='extrabold' color="red" borderRadius="50%">
              <AiFillStop />
            </Text>
          </Td>
        </Tr>
      
      </Tbody>
    </Table>
  </TableContainer>
    </Box>
  )
}

export default StrengthTraining
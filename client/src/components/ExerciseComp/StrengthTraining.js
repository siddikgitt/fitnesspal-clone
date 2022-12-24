import React from 'react'
import {
    Box,
    Flex,
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
       <Text  fontWeight='bold'   fontSize='15px'  color= '#0072BF'> Add Text </Text>
       <Text fontSize='13px'  color= '#0072BF' m="0 0.5rem"> | </Text>
       <Text fontSize='15px' fontWeight='bold' color= '#0072BF'>Quick Tools</Text>
        </Flex>
      </TableCaption>
      <Thead>
        <Tr  borderBottom="1px solid #e6e6e6">
          <Th w="70%" fontSize='18px' fontWeight="bold" textTransform='capitalize'
          color='#00548F' 
          borderRight='2px solid white'
          >Strength Training</Th>
          <Th background="#00548F" color="#ffffff" 
          borderRight='2px solid white'
          >Sets</Th>
          <Th background="#00548F" color="#ffffff" 
          borderRight='2px solid white'
          isNumeric>
           Reps/Sets
          </Th>
          <Th background="#00548F" color="#ffffff"
          borderRight='2px solid white'
          isNumeric>
            Weight/Sets
          </Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr borderBottom="1px solid #e6e6e6"
         backgroundColor="#f6f6f6"
      
          color="black">
          <Td borderRight='2px solid white'>push ups</Td>
          <Td borderRight='2px solid white'> 10</Td>
          <Td borderRight='2px solid white' isNumeric>25.4</Td>
          <Td borderRight='2px solid white' isNumeric>25.4</Td>

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
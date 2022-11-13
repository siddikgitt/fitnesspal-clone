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

function DwTotal({summin,sumcal}) {
  return (
    <Box  m='2rem 0'>

    <Flex justifyContent="space-between">
    <Box></Box> 
    <TableContainer w="60%">
      <Table variant="simple">
        <Thead>
          <Tr  border='none'>
            <Th width="35%" 
            textAlign='end' 
            borderRight="2px solid white" >
            <Flex justify='flex-end'>
                <Text >Daily Total / </Text>
                <Text color="#00548F"> Goal</Text>
              </Flex>
            </Th>
            <Th
            
            width="30%"
            borderRight='2px solid white'
              backgroundColor="#f6f6f6"
              color="black"
              borderBottom="1px solid #e6e6e6"
            >
              <Flex justify='center'>
                <Text>{summin} / </Text>
                <Text color="#00548F"> 0</Text>
              </Flex>
            </Th>
            <Th

            width="30%"
            borderRight='2px solid white'
              backgroundColor="#f6f6f6"
              color="black"
              borderBottom="1px solid #e6e6e6"
            >
              <Flex justify='center'>
                <Text>{sumcal} / </Text>
                <Text color="#00548F"> 0</Text>
              </Flex>
            </Th>
            
            <Th >
             {/* empty */}
              
            </Th>
          </Tr>
        </Thead>
      </Table>
    </TableContainer>
  </Flex>
  {/* weekly */}
  
  <Flex justifyContent="space-between">
    <Box></Box> <TableContainer w="60%">
      <Table variant="simple">
        <Thead>
          <Tr borderBottom="1px solid #e6e6e6">
            <Th width="35%" textAlign='end' borderRight="1px solid white" >
            <Flex justify='flex-end'>
                <Text>Weekly Total / </Text>
                <Text color="#00548F"> Goal</Text>
              </Flex>
            </Th>
            <Th
            
            width="30%"
              borderRight="1px solid #fff"
              backgroundColor="#f6f6f6"
              color="black"
            >
              <Flex justify='center'>
                <Text>{summin} / </Text>
                <Text color="#00548F"> 0</Text>
              </Flex>
            </Th>
            <Th

            width="30%"
              borderRight="1px solid #fff"
              backgroundColor="#f6f6f6"
              color="black"
            >
              <Flex justify='center'>
                <Text>{sumcal} / </Text>
                <Text color="#00548F"> 0</Text>
              </Flex>
            </Th>
            
            <Th>
             {/* empty */}
              
            </Th>
          </Tr>
        </Thead>
      </Table>
    </TableContainer>
  </Flex>
    </Box>
  )
}

export default DwTotal
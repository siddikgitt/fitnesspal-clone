import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

function MyExercisePage() {
 
  const data = new Array(10).fill(0);

  return (
    <Flex
      w="60%"
    justifyContent={'center'}
      m="5rem auto"
      flexFlow="column"
    >
      <HStack mb={"0.3rem"} justifyContent={"space-between"}>
        <Text fontSize="1.3rem " fontWeight="bold" color="#00548f">
          Your Personal Exercises
        </Text>
        <Box>
          <Button
            colorScheme="green"
            className="reportBtn"
            fontSize={"13px"}
            h="30px"
            padding={"0 0.7rem"}
          >
            Create Exercise
          </Button>
        </Box>
      </HStack>
      <hr />
      <HStack justifyContent={'space-between'} mt='0.5rem'>
        <Text w='43%' color={'black'} fontSize={'12px'} fontWeight='semibold'>To edit or delete a personal exercise, click on that exercise below. Use the search box to narrow your choices.</Text>
        <Box bg='#f6f6f6' w='45%' borderBottom={'1px solid lightgrey'} height={'50px'}></Box>
      </HStack>
      {/* search */}
      <Box w="50%" m="1rem 0">
        <Text
          color="#00548f"
          fontSize="17px"
          fontWeight="bold"
          m="0 0 0.5rem  0"
        >
          Search our exercise database by name:
        </Text>
        <HStack>
          <Input
            borderRadius="none"
            border={"1px solid black"}
            boxShadow="rgb(42, 43, 44) 1px 1px 2px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
            placeholder="search"
            focusBorderColor="none"
            mr="0.3rem"
            h="35px"
          />
          <Button
            colorScheme="green"
            className="reportBtn"
            h="35px"
            padding={"0 1.5rem"}
          >
            Search
          </Button>
        </HStack>
      </Box>
 

      <Box>
        <Box>
          <Text color="#00548f" fontSize="18px" fontWeight="bold">
            Matching exercises:
          </Text>

          <Stack
            direction="row"
            h="250px"
            m="1rem 0"
          >
            <Box
              border="1px solid grey"

              w="50%"
              borderRadius="0.2rem"
              overflowY="scroll"
            >
              {data.map((e) => (
                <Text
                  p="5px"
                  borderBottom="1px solid lightgrey"
                  color="blue.500"
                >
                  running fsadfkjfhn hfsjdh
                </Text>
              ))}
            </Box>
           
          </Stack>
        </Box>
       
      </Box>
    </Flex>
  );
}

export default MyExercisePage;

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function CreateNewMyExercise() {
  return (
    <Flex flexDir={"column"} width={"57%"} m="3rem auto " >
      <Text
        textAlign={"start"}
        fontSize="1.3rem "
        fontWeight="bold"
        color="#00548f"
      >
        Your Personal Exercises
      </Text>
      <hr />
      <HStack bg="#f6f6f6" justifyContent={"space-between"} p="1.5rem">
        <Box fontSize={'13px'} fontWeight='semibold'  textAlign='start'
        mb={'5rem'}
        
        >
          <Box mb={'0.5rem'}
          >
            <Text>Exercise Description: </Text>
            <Input
              focusBorderColor="none"
              type="text"
              w="170px"
              h="26px"
              borderRadius="none"
              boxShadow= "rgb(35, 49, 47) 1px 1px 1.5px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
              background="white"
            />
          </Box>
            {/* type */}
          <Box mb={'0.5rem'}>
            <Text>Exercise type:</Text>
            <Select
            fontSize={'13px'}
           h='26px'
           bg="white"
           boxShadow= "rgb(35, 49, 47) 1px 1px 1.5px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
           borderRadius='2px'
           
            placeholder="Select option"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          </Box>
            {/* Long */}
            <Box mb={'0.5rem'}>
            <Text>How long?:</Text>
            <Input
            mr="0.5rem"
              focusBorderColor="none"
              type="text"
              w="60px"
              h="23px"
              borderRadius="none"
              boxShadow= "rgb(35, 49, 47) 1px 1px 1.5px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
              background="white"
            />
            Minutes
          </Box>
          {/* calories burned */}
          <Box mb='1.5rem'>
            <Text>Calories Burned:</Text>
            <Input
              focusBorderColor="none"
              type="text"
              w="60px"
              h="23px"
              borderRadius="none"
              boxShadow= "rgb(35, 49, 47) 1px 1px 1.5px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
              background="white"
            />
          </Box>
          <Box >
          <Button colorScheme="green" className="reportBtn"
             h='35px'
             padding={"0 1.5rem"}
            >
              Add
            </Button>
          </Box>
        
          
        </Box>
        <Box w="50%" pb='5rem'>
          <Text color="#00548f" fontWeight={"bold"}>
            Creating a New Exercise
          </Text>
          <Box fontSize={"13px"} p="0 1.5rem 0  0" color='blackAlpha.900'>
            <Text>
              If you can't find an exercise in our database, you can easily add
              it yourself.
            </Text>
            <br />
            <Text>
              For cardio exercises, if you do not know how many calories you
              burned, instead of creating a new exercise, it's better to enter
              an existing exercise in our database that is close to the one you
              performed. This will at least provide you with a rough estimate of
              how many calories you burned.
            </Text>
            <br />
            <Text>
              Once you've created an exercise, you will be able to search for it
              and add it to your exercise log at any time
            </Text>
          </Box>
        </Box>
      </HStack>
    </Flex>
  );
}

export default CreateNewMyExercise;

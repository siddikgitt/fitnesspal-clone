import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function CheckedExeRow() {
  const data = [1, 2, 3, 4, 5];
  return (
    <Box>
      
      <Box>
        <Text>Or, add your most recently used cardio exercises</Text>

        <Flex justifyContent={"space-between"} m="1rem 0">
          <Button colorScheme="green" className="reportBtn">
            Add Exercise
          </Button>
          <RadioGroup>
            <Stack direction="row">
              <Text>
                <b>Sort By:</b>
              </Text>
              <Radio value="1">Most Recent</Radio>
              <Radio value="2">Name</Radio>
            </Stack>
          </RadioGroup>
        </Flex>

        {/* rows */}
        <Box mb="1rem">
          {data.map((e) => (
            <Stack
              justifyContent="space-between"
              background="#f6f6f6"
              p="0.3rem 0.5rem"
              direction="row"
              borderBottom="1px solid lightgrey"
            >
              <Stack direction="row">
                <input type="checkbox" />
                <Text>Running (jogging), 10 mph (6 min mile)</Text>
              </Stack>
              <Stack direction="row">
                <Stack direction="row">
                  <Text>Minutes:</Text>
                  <Input
                    type="text"
                    w="50px"
                    h="23px"
                    borderRadius="none"
                    borderTop="1px solid black"
                    borderLeft="1px solid black"
                    background="white"
                  />
                </Stack>
                <Stack direction="row">
                  <Text>Calories:</Text>
                  <Input
                    type="text"
                    w="50px"
                    h="23px"
                    borderRadius="none"
                    borderTop="1px solid black"
                    borderLeft="1px solid black"
                    background="white"
                  />
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Box>

        {/* add Exercise button */}
        <Box>
          <Button colorScheme="green" className="reportBtn">
            Add Exercise
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CheckedExeRow;

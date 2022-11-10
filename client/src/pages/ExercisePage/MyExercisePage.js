import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

function MyExercisePage() {
  const data = new Array(10).fill(0);

  return (
    <Flex w="60%" justifyContent={"center"} m="5rem auto" flexFlow="column">
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

      {/* TExt */}
      <HStack justifyContent={"space-between"} alignItems="" mt="0.5rem">
        <Box
          w="50%"
          // border={"1px solid black"}
        >
          <Text w="100%" color={"black"} fontSize={"13px"} fontWeight="bold">
            To edit or delete a personal exercise, click on that exercise below.
            Use the search box to narrow your choices.
          </Text>

          {/* search */}
          <Box>
            <Box w="100%" m="0.5rem 0">
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
            {/* matching exercise */}

            <Box>
              <Box>
                <Text color="#00548f" fontSize="18px" fontWeight="bold">
                  Matching exercises:
                </Text>

                <Stack direction="row" h="170px" m="1rem 0">
                  <Box
                    border="1px solid lightgrey"
                    w="100%"
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
          </Box>
        </Box>

        {/* 2nd div */}
        <VStack
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          p="1rem"
          rowGap={"1rem"}
          bg="#f6f6f6"
          w="45%"
          borderBottom={"1px solid lightgrey"}
          h={"320px"}
        >
          <Text textAlign={"center"} fontWeight="bold" color="#00548f">
            How Many Calories Did I Burn?
          </Text>
          <HStack justifyContent={"center"}>
            <Text fontWeight="bold" fontSize={"13px"} color="#00548f">
              Name:
            </Text>
            <Input
              focusBorderColor="none"
              type="text"
              w="180px"
              h="23px"
              borderRadius="none"
              borderTop="1px solid black"
              borderLeft="1px solid black"
              background="white"
              placeholder="0"
            />
          </HStack>

          <HStack justifyContent={"center"}>
            <Text fontSize={"13px"} color="#00548f" fontWeight="bold">
              Type:
            </Text>

            <Stack spacing={3}>
              <Select
                w="150px"
                focusBorderColor="none"
                bg="white"
                borderTop={"1px solid "}
                borderLeft={"1px solid "}
                h="23px"
                borderRadius={"none"}
                fontSize="12px"
              >
                <option value="option1">Killogram</option>
                <option value="option2">pounds</option>
              </Select>
            </Stack>
          </HStack>
          {/* weight */}
          <HStack justifyContent={"center"}>
            <Text fontWeight="bold" fontSize={"13px"} color="#00548f">
              Your Weight:
            </Text>
            <Input
              focusBorderColor="none"
              type="text"
              w="60px"
              h="23px"
              borderRadius="none"
              borderTop="1px solid black"
              borderLeft="1px solid black"
              background="white"
              placeholder="0"
            />
            <Text>lbs</Text>
          </HStack>

          {/* minutes */}
          <Flex flexFlow={"row"} justify="center" gap="1rem">
            <HStack justifyContent={"center"}>
              <Text fontWeight="bold" fontSize={"13px"} color="#00548f">
                Minutes:
              </Text>
              <Input
                focusBorderColor="none"
                type="text"
                w="60px"
                h="23px"
                borderRadius="none"
                borderTop="1px solid black"
                borderLeft="1px solid black"
                background="white"
                placeholder="0"
              />
            </HStack>
            <HStack justifyContent={"center"}>
              <Text fontWeight="bold" fontSize={"13px"} color="#00548f">
                Calories:
              </Text>
              <Input
                focusBorderColor="none"
                type="text"
                w="60px"
                h="23px"
                borderRadius="none"
                borderTop="1px solid black"
                borderLeft="1px solid black"
                background="white"
                placeholder="0"
              />
            </HStack>
          </Flex>

          {/* buttons */}
          <HStack>
            <Button
              colorScheme="green"
              className="reportBtn"
              fontSize={"13px"}
              h="30px"
              padding={"0 0.7rem"}
            >
              Save
            </Button>
            <Button
              border="1px solid"
              className="reportBtn"
              fontSize={"13px"}
              h="30px"
              padding={"0 0.7rem"}
            >
              Delete
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </Flex>
  );
}

export default MyExercisePage;

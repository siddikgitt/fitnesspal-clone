import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <>
      <Center mt={"10%"}>
        <Box w={"50%"} backgroundColor={"#f6f6f6"}>
          <Box bgColor={"blue"}>
            <Flex
              padding={2}
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Text color={"white"}>Your Daily Summary</Text>
              <Text color={"white"}>5 DAY STREAK</Text>
            </Flex>
          </Box>

          <Box marginTop={5}>
            <Flex>
              <Box>
                <Box w={120} h={120} bgColor={"#e6e6e6"}>
                  <label for="file-input">
                    <Center>
                      <Text>Upload Photo</Text>
                    </Center>
                  </label>

                  <input
                    style={{ display: "none" }}
                    id="file-input"
                    type="file"
                  />
                </Box>

                {/* KG GAINED */}
                <Box>
                  <Text fontSize={20}>1 KG Gained</Text>
                </Box>
              </Box>
              {/* Calories remaining  */}

              <Box padding={"10px 20px"}>
                <Flex gap={20}>
                  <Box>
                    <Text>Calories Remaining</Text>
                    <Text fontWeight={"bold"} color={"#85c400 "} fontSize={31}>2710</Text>
                  </Box>
                  <Box>
                    <Flex gap={5}>
                      <Button bgColor={"white"} border={"1px solid black"}>Add Exercise</Button>
                      <Button bgColor={"white"} border={"1px solid black"}>Add Food</Button>
                    </Flex>
                  </Box>
                </Flex>

                {/* Goal count */}
                <Box mt={5}>
                  <Flex justifyContent={"space-evenly"}>
                    <Box>
                      <Text>2710</Text>
                      <Text>GOAL</Text>
                    </Box>
                    <Box>
                      <Text>0</Text>
                      <Text>FOOD</Text>
                    </Box>
                    <Box>
                      <Text>-</Text>
                    </Box>
                    <Box>
                      <Text>0</Text>
                      <Text>EXERCISE</Text>
                    </Box>
                    <Box>
                      <Text>=</Text>
                    </Box>
                    <Box>
                      <Text>0</Text>
                      <Text>NET</Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default Home;

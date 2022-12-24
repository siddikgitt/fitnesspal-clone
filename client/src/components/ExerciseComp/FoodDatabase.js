import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function FoodDatabase() {
  const data = new Array(10).fill(0);

  return (
    <Flex w="60%" justifyContent={"center"} m="5rem auto" flexFlow="column">
      <HStack mb={"0.3rem"} justifyContent={"space-between"}>
        <Text fontSize="1.3rem " fontWeight="bold" color="#00548f">
          Calorie Chart, Nutrition Facts for Food
        </Text>
        <Box>
          <Button
            colorScheme="green"
            className="reportBtn"
            fontSize={"13px"}
            h="30px"
            padding={"0 0.7rem"}
          >
            Create Food
          </Button>
        </Box>
      </HStack>
      <hr />

      {/* TExt */}
      <HStack
        justifyContent={"space-between"}
        h="400px"
        alignItems=""
        mt="0.5rem"
      >
        {/* 1st div */}

        <Box w="50%">
          <Box w="100%" m="0.5rem 0">
            <Text
              color="#00548f"
              fontSize="17px"
              fontWeight="bold"
              m="0 0 0.5rem  0"
            >
              Search our Food database by name:
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

          <Box mt="1.5rem">
            <Box>
              <Text color="#00548f" fontSize="18px" fontWeight="bold">
                Matching exercises:
              </Text>

              <Stack m="1rem 0">
                <Box
                  border="1px solid black"
                  w="100%"
                  h="260px"
                  borderRadius="0.2rem"
                  overflowY="scroll"
                  p="0.2rem"
                >
                  {data.map((e) => (
                    <Text
                      p="5px"
                      borderBottom="1px solid lightgrey"
                      color="blue.500"
                    >
                      Delious Food From our database
                    </Text>
                  ))}
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>

        {/* 2nd div */}
        <Box w="48%" borderBottom={"1px solid lightgrey"} h={"400px"}>
          <Text fontWeight="bold">Nutrition Facts</Text>
          <Box padding={"1.2rem"} borderBottom="2px solid" />
          <HStack justifyContent={"start"} w="100%" m="1rem 0">
            <Text fontSize={"12px"} fontWeight="bold" bor>
              Servings:
            </Text>
            <Input
              focusBorderColor="none"
              type="text"
              w="55px"
              h="25px"
              fontSize={"12px"}
              borderRadius="none"
              boxShadow="rgb(35, 49, 47) 1px 1px 1.5px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
              background="white"
              placeholder="0"
            />

            <Stack spacing={3} w="90%">
              <Select
                w="90%"
                focusBorderColor="none"
                bg="white"
                boxShadow="rgb(35, 49, 47) 1px 1px 1.5px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
                h="25px"
                borderRadius={"none"}
                fontSize="12px"
              >
                <option value="option1">1 Serving</option>
              </Select>
            </Stack>
          </HStack>
          <Box borderBottom="2px solid" />
          {/* caories and sodium */}
          <HStack>
            <Box w="50%" h="160px" fontSize={"13px"}>
              <HStack
                pt="2px"
                fontWeight={"semibold"}
                justify={"space-between"}
              >
                <Text>Calories</Text>
                <Text>0</Text>
              </HStack>
              <HStack
                pt="2px"
                fontWeight={"semibold"}
                justify={"space-between"}
              >
                <Text>Total Fat</Text>
                <Text>0 g</Text>
              </HStack>
              <HStack
                pt="2px"
                fontWeight={"semibold"}
                justify={"space-between"}
              >
                <Text>Saturated</Text>
                <Text>0 g</Text>
              </HStack>
              <HStack
                pt="2px"
                fontWeight={"semibold"}
                justify={"space-between"}
              >
                <Text>Polyunsaturated</Text>
                <Text>0</Text>
              </HStack>
              <HStack
                pt="2px"
                fontWeight={"semibold"}
                justify={"space-between"}
              >
                <Text>MonoSaturated</Text>
                <Text>0 g</Text>
              </HStack>
              <HStack
                pt="2px"
                fontWeight={"semibold"}
                justify={"space-between"}
              >
                <Text>Trans</Text>
                <Text>0 g</Text>
              </HStack>
              <HStack
                pt="2px"
                fontWeight={"semibold"}
                justify={"space-between"}
              >
                <Text>Cholestrol</Text>
                <Text>0 g</Text>
              </HStack>
            </Box>
            {/* food nutrition 2nd div */}
            <Box w="50%" h="160px" fontSize={"13px"}>
              <HStack
                pt="2px"
                fontWeight={"semibold"}
                justify={"space-between"}
              >
                <Text>Calories</Text>
                <Text>0</Text>
              </HStack>
              <HStack
                pt="2px"
                fontWeight={"semibold"}
                justify={"space-between"}
              >
                <Text>Total Fat</Text>
                <Text>0 g</Text>
              </HStack>
              <HStack
                pt="2px"
                fontWeight={"semibold"}
                justify={"space-between"}
              >
                <Text>Saturated</Text>
                <Text>0 g</Text>
              </HStack>
              <HStack
                pt="2px"
                fontWeight={"semibold"}
                justify={"space-between"}
              >
                <Text>Polyunsaturated</Text>
                <Text>0</Text>
              </HStack>
              <HStack
                pt="2px"
                fontWeight={"semibold"}
                justify={"space-between"}
              >
                <Text>MonoSaturated</Text>
                <Text>0 g</Text>
              </HStack>
              <HStack
                pt="2px"
                fontWeight={"semibold"}
                justify={"space-between"}
              >
                <Text>Trans</Text>
                <Text>0 g</Text>
              </HStack>
              <HStack
                pt="2px"
                fontWeight={"semibold"}
                justify={"space-between"}
              >
                <Text>Cholestrol</Text>
                <Text>0 g</Text>
              </HStack>
            </Box>
          </HStack>
          <Box borderBottom="2px solid" />

          {/* vitamins */}
          <HStack p="0.5rem 0">
            <Box w="50%" fontSize={"13px"}>
              <HStack
                pt="2px"
                fontWeight={"semibold"}
                justify={"space-between"}
              >
                <Text>Calories</Text>
                <Text>0</Text>
              </HStack>
              <HStack
                pt="2px"
                fontWeight={"semibold"}
                justify={"space-between"}
              >
                <Text>Total Fat</Text>
                <Text>0 g</Text>
              </HStack>
            </Box>
            {/*  2nd div */}
            <Box w="50%" fontSize={"13px"}>
              <HStack
                pt="2px"
                fontWeight={"semibold"}
                justify={"space-between"}
              >
                <Text>Calories</Text>
                <Text>0</Text>
              </HStack>
              <HStack
                pt="2px"
                fontWeight={"semibold"}
                justify={"space-between"}
              >
                <Text>Total Fat</Text>
                <Text>0 g</Text>
              </HStack>
            </Box>
          </HStack>

          <Box borderBottom="2px solid" />
          {/* lasat section paragraph */}
          <Box fontSize={"11px"} w="90%" p="0.2rem" fontWeight={"semibold"}>
            <Text>
              *Percent Daily Values are based on a 2000 calorie diet. Your daily
              values may be higher or lower depending on your calorie needs.
            </Text>
          </Box>
        </Box>
      </HStack>
    </Flex>
  );
}

export default FoodDatabase;

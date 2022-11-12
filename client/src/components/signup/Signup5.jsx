import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const Signup5 = () => {
  return (
    <div>
      <Center height={"100vh"}>
        <Box width={"40%"} height={"fit-content"}>
          <Center>
            <Box
              borderRadius="10"
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              padding={"50px 60px"}
              alignContent={"center"}
            >
              <Text overflow={"auto"} fontSize={"18px"} fontWeight={"bold"}>
                How tall are you?
              </Text>

              <Flex gap={5}>
                <InputGroup>
                  <Input placeholder="Height (feet)" />
                  <InputRightElement children={"ft"} />
                </InputGroup>
                <InputGroup>
                  <Input placeholder="Height (inches)" />
                  <InputRightElement children={"in"} />
                </InputGroup>
              </Flex>

              <Text
                marginTop={10}
                overflow={"auto"}
                fontSize={"18px"}
                fontWeight={"bold"}
              >
                How much do you weight?
              </Text>
              <InputGroup>
                <Input placeholder="Current Weight" />
                <InputRightElement children={"kg"} />
              </InputGroup>

              <Text
                marginTop={10}
                overflow={"auto"}
                fontSize={"18px"}
                fontWeight={"bold"}
              >
                What's your goal weight?
              </Text>
              <InputGroup>
                <Input placeholder="Goal Weight" />
                <InputRightElement children={"kg"} />
              </InputGroup>

              <Flex marginTop={7} gap={5}>
                <Button
                  colorScheme="teal"
                  variant="outline"
                  marginBottom="2"
                  w={"100%"}
                >
                  BACK
                </Button>
                <Button marginBottom="2" colorScheme={"blue"} w={"100%"}>
                  NEXT
                </Button>
              </Flex>
            </Box>
          </Center>
        </Box>
      </Center>
    </div>
  );
};

export default Signup5;

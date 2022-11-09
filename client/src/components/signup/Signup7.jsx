import React from 'react'
import {
    Box,
    Button,
    Center,
    Checkbox,
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

const Signup7 = () => {
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
              <Text
                textAlign={"center"}
                overflow={"auto"}
                fontSize={"20px"}
                fontWeight={"bold"}
              >
                Create a username.
              </Text>

              <Input marginTop={10} placeholder="Create a username" />
              
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
  )
}

export default Signup7
import React, { useContext } from 'react'
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
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import { signupUser } from '../../api';

const Signup7 = () => {
  const {signup,signupHandler,setSignup}=useContext(AuthContext);
  // console.log(signup);

  const submitHandle = async() => {
    console.log("SIGNUP:", signup);
    localStorage.setItem("user",JSON.stringify(signup))
    
    const user = await signupUser(signup);
    console.log(user)
  }

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

              <Input required marginTop={10} placeholder="Create a username"   onChange={(e)=>setSignup({...signup,username:e.target.value})} />
              
              <Flex marginTop={7} gap={5}>
              <Link to="/signup6">

                <Button
                  colorScheme="teal"
                  variant="outline"
                  marginBottom="2"
                  w={"100%"}
                >
                  BACK
                </Button>
                </Link>
                <Link to="/signup8">
                <Button onClick={submitHandle} marginBottom="2" colorScheme={"blue"} w={"100%"}>
                  NEXT
                </Button>
                </Link>
              </Flex>
            </Box>
          </Center>
        </Box>
      </Center>
    </div>
  )
}

export default Signup7